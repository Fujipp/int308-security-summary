import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quizCategories } from '../data/quiz';
import {
  ArrowLeft,
  BookOpenCheck,
  BrainCircuit,
  CheckCircle2,
  Clock3,
  RefreshCw,
  Send,
  Shuffle,
  Tags,
  Timer,
  Trophy,
  XCircle,
} from 'lucide-react';
import * as Icons from 'lucide-react';

const RANDOM_QUIZ_ID = 'random-100';
const EXAM_QUIZ_ID = 'full-exam-100';
const EXAM_DURATION_SECONDS = 3 * 60 * 60;
const OPTION_LABELS = ['A', 'B', 'C', 'D', 'E'];
const QUIZ_STORAGE_KEY = 'int308_quiz_session_v1';

const levelMeta = {
  M: {
    short: '[M]',
    th: 'ความจำ',
    en: 'Memory',
    badgeClass: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300',
    hint: {
      th: 'มองหานิยาม คีย์เวิร์ด และคุณสมบัติหลักของแนวคิดนี้ก่อน แล้วค่อยตัดตัวเลือกที่ขัดกับนิยามออก',
      en: 'Start from the core definition and key properties, then eliminate choices that contradict them.',
    },
  },
  A: {
    short: '[A]',
    th: 'วิเคราะห์',
    en: 'Analysis',
    badgeClass: 'bg-amber-500/10 border-amber-500/20 text-amber-300',
    hint: {
      th: 'ดูให้ชัดว่าโจทย์กำลังถามเรื่องความเสี่ยง จุดอ่อน หรือเป้าหมายของกลไกใด แล้วเลือกคำตอบที่เหมาะสมที่สุดกับสถานการณ์',
      en: 'Identify whether the scenario is asking about a risk, weakness, or security goal, then choose the best-fit answer.',
    },
  },
};

const shuffle = (items) => {
  const cloned = [...items];
  for (let index = cloned.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [cloned[index], cloned[swapIndex]] = [cloned[swapIndex], cloned[index]];
  }
  return cloned;
};

const formatDuration = (seconds) => {
  const safeSeconds = Math.max(0, seconds);
  const hours = Math.floor(safeSeconds / 3600);
  const minutes = Math.floor((safeSeconds % 3600) / 60);
  const secs = safeSeconds % 60;
  return [hours, minutes, secs].map((value) => String(value).padStart(2, '0')).join(':');
};

const getPracticeMessage = (percentage, lang) => {
  if (percentage >= 80) {
    return lang === 'th'
      ? 'ยอดเยี่ยมมาก! คุณเข้าใจชุดข้อสอบนี้ได้ดี'
      : 'Excellent. You handled this quiz very well.';
  }
  if (percentage >= 50) {
    return lang === 'th'
      ? 'ทำได้ดี แต่ยังมีบางจุดที่ควรทบทวนเพิ่ม'
      : 'Good result. A few concepts still need review.';
  }
  return lang === 'th'
    ? 'ควรกลับไปอ่านสรุปและลองทำโจทย์อีกรอบ'
    : 'Review the summary and take another round.';
};

export default function QuizView({ lang }) {
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const [examAnswers, setExamAnswers] = useState([]);
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [examStartedAt, setExamStartedAt] = useState(null);
  const [examElapsedSeconds, setExamElapsedSeconds] = useState(0);

  const allQuestionBank = useMemo(
    () =>
      quizCategories.flatMap((category) =>
        category.questions.map((question, index) => ({
          ...question,
          questionKey: `${category.id}-${index}`,
          sourceCategoryId: category.id,
          sourceCategoryTitle: category.title,
          sourceQuestionNumber: index + 1,
        })),
      ),
    [],
  );

  const questionBankByKey = useMemo(
    () =>
      new Map(
        allQuestionBank.map((question) => [question.questionKey, question]),
      ),
    [allQuestionBank],
  );

  const memoryCount = allQuestionBank.filter((question) => question.level === 'M').length;
  const analysisCount = allQuestionBank.length - memoryCount;

  useEffect(() => {
    if (activeQuiz?.mode !== 'exam' || !examStartedAt || examSubmitted) return undefined;

    const intervalId = window.setInterval(() => {
      setExamElapsedSeconds(Math.floor((Date.now() - examStartedAt) / 1000));
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [activeQuiz, examStartedAt, examSubmitted]);

  useEffect(() => {
    const raw = window.localStorage.getItem(QUIZ_STORAGE_KEY);
    if (!raw) {
      setIsHydrated(true);
      return;
    }

    try {
      const saved = JSON.parse(raw);
      if (!saved?.activeQuiz) {
        setIsHydrated(true);
        return;
      }

      let restoredQuestions = [];

      if (saved.activeQuiz.id === EXAM_QUIZ_ID) {
        restoredQuestions = allQuestionBank;
      } else if (saved.activeQuiz.id === RANDOM_QUIZ_ID) {
        restoredQuestions = (saved.activeQuiz.questionKeys || [])
          .map((key) => questionBankByKey.get(key))
          .filter(Boolean);
      } else {
        const matchedCategory = quizCategories.find((category) => category.id === saved.activeQuiz.id);
        restoredQuestions = matchedCategory?.questions || [];
      }

      if (!restoredQuestions.length) {
        window.localStorage.removeItem(QUIZ_STORAGE_KEY);
        setIsHydrated(true);
        return;
      }

      setActiveQuiz({
        ...saved.activeQuiz,
        questions: restoredQuestions,
      });
      setCurrentQuestionIdx(
        Math.min(Math.max(saved.currentQuestionIdx ?? 0, 0), restoredQuestions.length - 1),
      );
      setSelectedAnswer(saved.selectedAnswer ?? null);
      setIsSubmitted(Boolean(saved.isSubmitted));
      setScore(saved.score ?? 0);
      setShowResults(Boolean(saved.showResults));
      setExamAnswers(Array.isArray(saved.examAnswers) ? saved.examAnswers : []);
      setExamSubmitted(Boolean(saved.examSubmitted));
      setExamStartedAt(saved.examStartedAt ?? null);
      setExamElapsedSeconds(saved.examStartedAt ? Math.floor((Date.now() - saved.examStartedAt) / 1000) : 0);
    } catch {
      window.localStorage.removeItem(QUIZ_STORAGE_KEY);
    } finally {
      setIsHydrated(true);
    }
  }, [allQuestionBank, questionBankByKey]);

  useEffect(() => {
    if (!isHydrated) return;

    if (!activeQuiz) {
      window.localStorage.removeItem(QUIZ_STORAGE_KEY);
      return;
    }

    const serializedQuiz = {
      id: activeQuiz.id,
      title: activeQuiz.title,
      mode: activeQuiz.mode,
      isRandom: Boolean(activeQuiz.isRandom),
      isExam: Boolean(activeQuiz.isExam),
      questionKeys: activeQuiz.questions?.map((item) => item.questionKey).filter(Boolean) || [],
    };

    const payload = {
      activeQuiz: serializedQuiz,
      currentQuestionIdx,
      selectedAnswer,
      isSubmitted,
      score,
      showResults,
      examAnswers,
      examSubmitted,
      examStartedAt,
    };

    window.localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(payload));
  }, [
    activeQuiz,
    currentQuestionIdx,
    selectedAnswer,
    isSubmitted,
    score,
    showResults,
    examAnswers,
    examSubmitted,
    examStartedAt,
    isHydrated,
  ]);

  const resetPracticeState = () => {
    setCurrentQuestionIdx(0);
    setSelectedAnswer(null);
    setIsSubmitted(false);
    setScore(0);
    setShowResults(false);
  };

  const resetExamState = (questionCount = 0) => {
    setCurrentQuestionIdx(0);
    setExamAnswers(Array(questionCount).fill(null));
    setExamSubmitted(false);
    setExamStartedAt(Date.now());
    setExamElapsedSeconds(0);
    setScore(0);
  };

  const startPracticeQuiz = (quiz) => {
    setActiveQuiz({ ...quiz, mode: 'practice' });
    resetPracticeState();
    setExamAnswers([]);
    setExamSubmitted(false);
    setExamStartedAt(null);
    setExamElapsedSeconds(0);
  };

  const startExamQuiz = (quiz) => {
    setActiveQuiz({ ...quiz, mode: 'exam' });
    resetPracticeState();
    resetExamState(quiz.questions.length);
  };

  const buildRandomQuiz = () => ({
    id: RANDOM_QUIZ_ID,
    title: {
      th: 'Random Mock Exam 100 ข้อ',
      en: 'Random 100-Question Mock Exam',
    },
    questions: shuffle(allQuestionBank).slice(0, Math.min(100, allQuestionBank.length)),
    isRandom: true,
  });

  const buildFullExamQuiz = () => ({
    id: EXAM_QUIZ_ID,
    title: {
      th: 'Full Mock Exam 100 ข้อ',
      en: 'Full 100-Question Mock Exam',
    },
    questions: allQuestionBank,
    isExam: true,
  });

  const handleBackToCategories = () => {
    setActiveQuiz(null);
    resetPracticeState();
    setExamAnswers([]);
    setExamSubmitted(false);
    setExamStartedAt(null);
    setExamElapsedSeconds(0);
  };

  const questions = activeQuiz?.questions || [];
  const question = questions[currentQuestionIdx];
  const level = question ? levelMeta[question.level] : levelMeta.M;

  const handleSelect = (idx) => {
    if (!activeQuiz) return;

    if (activeQuiz.mode === 'exam') {
      if (examSubmitted) return;
      setExamAnswers((prev) => {
        const next = [...prev];
        next[currentQuestionIdx] = idx;
        return next;
      });
      return;
    }

    if (isSubmitted) return;
    setSelectedAnswer(idx);
  };

  const handleSubmitPractice = () => {
    if (selectedAnswer === null || isSubmitted) return;
    setIsSubmitted(true);
    if (selectedAnswer === question.answerIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextPractice = () => {
    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsSubmitted(false);
    } else {
      setShowResults(true);
    }
  };

  const handleRestartPractice = () => {
    if (activeQuiz?.isRandom) {
      startPracticeQuiz(buildRandomQuiz());
      return;
    }
    resetPracticeState();
  };

  const handleSubmitExam = () => {
    const nextScore = questions.reduce(
      (total, item, index) => total + (examAnswers[index] === item.answerIndex ? 1 : 0),
      0,
    );
    setScore(nextScore);
    setExamSubmitted(true);
  };

  const handleRestartExam = () => {
    startExamQuiz(buildFullExamQuiz());
  };

  const answeredCount = examAnswers.filter((value) => value !== null).length;
  const unansweredCount = Math.max(0, questions.length - answeredCount);
  const isOvertime = examElapsedSeconds > EXAM_DURATION_SECONDS;
  const remainingSeconds = Math.max(0, EXAM_DURATION_SECONDS - examElapsedSeconds);

  const getExamNavigatorClass = (index) => {
    const isCurrent = currentQuestionIdx === index;
    const userAnswer = examAnswers[index];

    let base =
      'aspect-square rounded-xl border text-sm font-semibold transition-all flex items-center justify-center ';

    if (!examSubmitted) {
      if (isCurrent) {
        return `${base} bg-sky-500 text-white border-sky-400 shadow-[0_0_0_3px_rgba(56,189,248,0.15)]`;
      }
      if (userAnswer !== null) {
        return `${base} bg-sky-500/10 text-sky-300 border-sky-500/25`;
      }
      return `${base} bg-white/4 text-gray-400 border-white/10 hover:bg-white/8 hover:text-white`;
    }

    const isCorrect = userAnswer === questions[index].answerIndex;
    if (isCurrent) {
      if (userAnswer === null) {
        return `${base} bg-gray-700/60 text-white border-gray-500 shadow-[0_0_0_3px_rgba(148,163,184,0.12)]`;
      }
      if (isCorrect) {
        return `${base} bg-emerald-500 text-white border-emerald-400 shadow-[0_0_0_3px_rgba(16,185,129,0.16)]`;
      }
      return `${base} bg-red-500 text-white border-red-400 shadow-[0_0_0_3px_rgba(239,68,68,0.16)]`;
    }

    if (userAnswer === null) {
      return `${base} bg-white/4 text-gray-500 border-white/10`;
    }
    if (isCorrect) {
      return `${base} bg-emerald-500/12 text-emerald-300 border-emerald-500/25`;
    }
    return `${base} bg-red-500/12 text-red-300 border-red-500/25`;
  };

  if (!activeQuiz) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            {lang === 'th' ? 'เลือกชุดการทดสอบ' : 'Choose a Quiz Set'}
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            {lang === 'th'
              ? 'มีทั้งโหมดฝึกทีละข้อ, โหมดสุ่ม 100 ข้อ, และโหมดสอบเต็มที่ทำข้ามข้อได้แล้วค่อยเฉลยทีเดียว'
              : 'Choose between chapter practice, a random 100-question set, or a full exam mode with deferred grading.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => startPracticeQuiz(buildRandomQuiz())}
            className="w-full text-left p-6 md:p-7 rounded-3xl border border-sky-300/20 bg-white/6 hover:bg-white/10 hover:border-sky-300/40 transition-all shadow-lg"
          >
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-2xl bg-sky-500/12 text-sky-300 flex items-center justify-center shrink-0 border border-sky-300/15">
                <Shuffle size={30} />
              </div>
              <div className="min-w-0">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {lang === 'th' ? 'Random Mock Exam 100 ข้อ' : 'Random 100-Question Mock Exam'}
                </h3>
                <p className="text-slate-300">
                  {lang === 'th'
                    ? 'ตอบทีละข้อและดูเฉลยได้ทันทีหลังส่งคำตอบในแต่ละข้อ'
                    : 'Answer one question at a time and see the explanation immediately after each submission.'}
                </p>
                <div className="flex flex-wrap gap-2 mt-4 text-xs">
                  <span className="px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300">
                    {allQuestionBank.length} {lang === 'th' ? 'ข้อในคลัง' : 'Questions in bank'}
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                    {memoryCount} {lang === 'th' ? 'ข้อจำ' : 'Memory'}
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300">
                    {analysisCount} {lang === 'th' ? 'ข้อวิเคราะห์' : 'Analysis'}
                  </span>
                </div>
              </div>
            </div>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            onClick={() => startExamQuiz(buildFullExamQuiz())}
            className="w-full text-left p-6 md:p-7 rounded-3xl border border-emerald-300/20 bg-linear-to-br from-white/6 to-emerald-500/6 hover:from-white/10 hover:to-emerald-500/10 hover:border-emerald-300/40 transition-all shadow-lg"
          >
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/12 text-emerald-300 flex items-center justify-center shrink-0 border border-emerald-300/15">
                <Timer size={30} />
              </div>
              <div className="min-w-0">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {lang === 'th' ? 'Full Mock Exam 100 ข้อ' : 'Full 100-Question Mock Exam'}
                </h3>
                <p className="text-slate-300">
                  {lang === 'th'
                    ? 'ทำข้ามข้อได้ ส่งทีเดียว และค่อยดูเฉลยทั้งหมดทีหลัง พร้อมจับเวลา 3 ชั่วโมงแบบเตือนอย่างเดียว'
                    : 'Move freely across all 100 questions, submit once, and review all explanations afterward with a soft 3-hour timer.'}
                </p>
                <div className="flex flex-wrap gap-2 mt-4 text-xs">
                  <span className="px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                    03:00:00 {lang === 'th' ? 'จับเวลา' : 'Timer'}
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-slate-500/10 border border-slate-400/20 text-slate-300">
                    {lang === 'th' ? 'เฉลยทีเดียว' : 'Deferred grading'}
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300">
                    {lang === 'th' ? 'ข้ามข้อได้' : 'Free navigation'}
                  </span>
                </div>
              </div>
            </div>
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quizCategories.map((cat, idx) => {
            const IconComponent = cat.icon ? Icons[cat.icon] : Icons.HelpCircle;
            const catMemoryCount = cat.questions.filter((item) => item.level === 'M').length;
            const catAnalysisCount = cat.questions.length - catMemoryCount;

            return (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.04 }}
                onClick={() => startPracticeQuiz({ id: cat.id, title: cat.title, questions: cat.questions })}
                className="group p-6 rounded-3xl bg-white/6 border border-white/8 hover:border-sky-300/40 hover:bg-white/10 transition-all text-left flex items-start gap-5 shadow-lg"
              >
                <div className="w-14 h-14 rounded-2xl bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                  <IconComponent size={28} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-bold text-white mb-2">{cat.title[lang]}</h3>
                  <div className="text-sm font-medium text-sky-300 mb-3">
                    {cat.questions.length} {lang === 'th' ? 'ข้อ' : 'Questions'}
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                      {catMemoryCount} {lang === 'th' ? 'ข้อจำ' : 'Memory'}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300">
                      {catAnalysisCount} {lang === 'th' ? 'ข้อวิเคราะห์' : 'Analysis'}
                    </span>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    );
  }

  if (activeQuiz.mode === 'practice' && showResults) {
    const percentage = Math.round((score / questions.length) * 100);
    const message = getPracticeMessage(percentage, lang);

    return (
      <div className="max-w-2xl mx-auto px-4 py-16">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white/8 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-emerald-400 to-sky-400"></div>
          <div className="w-24 h-24 mx-auto bg-linear-to-br from-emerald-400/15 to-sky-400/15 rounded-full flex items-center justify-center mb-6 border border-emerald-400/20">
            <Trophy size={48} className="text-emerald-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">
            {lang === 'th' ? 'ผลการทดสอบ' : 'Quiz Results'}
          </h2>
          <p className="text-slate-400 mb-4">{activeQuiz.title[lang]}</p>
          <p className="text-slate-300 mb-8">{message}</p>
          <div className="flex justify-center items-end gap-2 mb-10">
            <span className="text-6xl font-black text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-sky-400">
              {score}
            </span>
            <span className="text-2xl text-slate-500 font-bold mb-2">/ {questions.length}</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleRestartPractice}
              className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-white/6 hover:bg-white/10 border border-white/10 text-white font-medium transition-all"
            >
              <RefreshCw size={20} />
              {activeQuiz.isRandom
                ? lang === 'th'
                  ? 'สุ่มชุดใหม่อีกครั้ง'
                  : 'Shuffle New Exam'
                : lang === 'th'
                  ? 'ทดสอบใหม่อีกครั้ง'
                  : 'Take Quiz Again'}
            </button>
            <button
              onClick={handleBackToCategories}
              className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-sky-500 hover:bg-sky-400 text-white font-medium transition-all"
            >
              <ArrowLeft size={20} />
              {lang === 'th' ? 'กลับไปเลือกชุดข้อสอบ' : 'Back to Quiz Sets'}
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  if (activeQuiz.mode === 'exam') {
    const currentSelectedAnswer = examAnswers[currentQuestionIdx];
    const currentCorrectLabel = OPTION_LABELS[question.answerIndex];

    return (
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_320px] gap-6 items-start">
          <div className="min-w-0">
            <div className="mb-4 flex items-start gap-4">
              <button
                onClick={handleBackToCategories}
                className="p-2 rounded-full bg-white/6 hover:bg-white/10 text-slate-400 hover:text-white transition-all shadow-sm mt-1"
                title={lang === 'th' ? 'กลับ' : 'Back'}
              >
                <ArrowLeft size={20} />
              </button>
              <div className="min-w-0">
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">{activeQuiz.title[lang]}</h2>
                <p className="text-slate-400 mt-1">
                  {lang === 'th'
                    ? 'ทำข้ามข้อได้ทุกเมื่อ แล้วค่อยส่งทีเดียวเมื่อพร้อม'
                    : 'Move between questions freely and submit only when ready.'}
                </p>
              </div>
            </div>

            {examSubmitted && (
              <div className="mb-6 p-5 md:p-6 rounded-3xl border border-emerald-400/18 bg-linear-to-r from-emerald-500/10 to-sky-500/8 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-emerald-300 mb-2">
                      {lang === 'th' ? 'ผลสอบ' : 'Exam Results'}
                    </p>
                    <h3 className="text-3xl font-black text-white">
                      {score} / {questions.length}
                    </h3>
                    <p className="text-slate-300 mt-2">
                      {lang === 'th'
                        ? `ตอบแล้ว ${answeredCount} ข้อ · เวลาที่ใช้ ${formatDuration(examElapsedSeconds)}`
                        : `Answered ${answeredCount} questions · Time used ${formatDuration(examElapsedSeconds)}`}
                    </p>
                  </div>
                  <button
                    onClick={handleRestartExam}
                    className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-900 hover:bg-slate-100 font-semibold transition-all"
                  >
                    <RefreshCw size={18} />
                    {lang === 'th' ? 'เริ่มสอบใหม่' : 'Restart Exam'}
                  </button>
                </div>
              </div>
            )}

            <motion.div
              key={`${activeQuiz.id}-${currentQuestionIdx}-${examSubmitted ? 'review' : 'work'}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/7 backdrop-blur-md border border-white/10 rounded-3xl p-5 md:p-8 shadow-xl"
            >
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <div className="px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-sm font-bold">
                  {lang === 'th'
                    ? `ข้อที่ ${currentQuestionIdx + 1} / ${questions.length}`
                    : `Question ${currentQuestionIdx + 1} of ${questions.length}`}
                </div>
                <div className={`px-4 py-1.5 rounded-full border text-sm font-bold ${level.badgeClass}`}>
                  {level.short} {lang === 'th' ? level.th : level.en}
                </div>
                {question?.sourceCategoryTitle && (
                  <div className="px-4 py-1.5 rounded-full bg-white/6 border border-white/10 text-slate-300 text-sm font-medium">
                    <Tags size={14} className="inline mr-2" />
                    {question.sourceCategoryTitle[lang]}
                  </div>
                )}
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
                  {question.level === 'M' ? <BookOpenCheck size={16} /> : <BrainCircuit size={16} />}
                  <span>
                    {question.level === 'M'
                      ? lang === 'th'
                        ? 'โจทย์เน้นความจำและความเข้าใจพื้นฐาน'
                        : 'This question focuses on core recall and understanding.'
                      : lang === 'th'
                        ? 'โจทย์เน้นการวิเคราะห์และประยุกต์ใช้แนวคิด'
                        : 'This question focuses on analysis and application.'}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white leading-relaxed">{question.question[lang]}</h3>
              </div>

              <div className="space-y-3 mb-8">
                {question.options.map((opt, idx) => {
                  const isSelected = currentSelectedAnswer === idx;
                  const isCorrect = idx === question.answerIndex;
                  let btnClass = 'w-full text-left p-4 rounded-2xl border transition-all duration-200 ';

                  if (examSubmitted) {
                    if (isCorrect) {
                      btnClass += 'bg-emerald-500/16 border-emerald-500/28 text-emerald-100';
                    } else if (isSelected && !isCorrect) {
                      btnClass += 'bg-red-500/14 border-red-500/28 text-red-100';
                    } else {
                      btnClass += 'bg-white/4 border-white/8 text-slate-400';
                    }
                  } else if (isSelected) {
                    btnClass += 'bg-sky-500/18 border-sky-500/30 text-sky-100 shadow-[0_0_0_3px_rgba(56,189,248,0.08)]';
                  } else {
                    btnClass += 'bg-white/4 border-white/8 text-slate-200 hover:bg-white/8 hover:border-white/16';
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelect(idx)}
                      disabled={examSubmitted}
                      className={btnClass}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3">
                          <span className="w-8 h-8 rounded-full bg-white/8 border border-white/10 text-sm font-bold inline-flex items-center justify-center shrink-0">
                            {OPTION_LABELS[idx]}
                          </span>
                          <span className="pt-1">{opt[lang]}</span>
                        </div>
                        {examSubmitted && isCorrect && <CheckCircle2 size={20} className="text-emerald-400 shrink-0 mt-1" />}
                        {examSubmitted && isSelected && !isCorrect && <XCircle size={20} className="text-red-400 shrink-0 mt-1" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {examSubmitted && (
                <div className="p-5 rounded-2xl bg-indigo-500/10 border border-indigo-500/18 text-indigo-100 mb-8 space-y-4">
                  <div>
                    <p className="font-bold text-indigo-300 mb-1">
                      {lang === 'th' ? 'คำตอบของคุณ' : 'Your Answer'}
                    </p>
                    <p className="text-sm leading-relaxed">
                      {currentSelectedAnswer === null
                        ? lang === 'th'
                          ? 'ไม่ได้ตอบข้อนี้'
                          : 'You did not answer this question.'
                        : `${OPTION_LABELS[currentSelectedAnswer]}) ${question.options[currentSelectedAnswer][lang]}`}
                    </p>
                  </div>

                  <div>
                    <p className="font-bold text-indigo-300 mb-1">
                      {lang === 'th' ? 'เฉลยที่ถูกต้อง' : 'Correct Answer'}
                    </p>
                    <p className="text-sm leading-relaxed">
                      {currentCorrectLabel}) {question.options[question.answerIndex][lang]}
                    </p>
                  </div>

                  <div>
                    <p className="font-bold text-indigo-300 mb-1">
                      {lang === 'th' ? 'เหตุผล' : 'Why It Is Correct'}
                    </p>
                    <p className="text-sm leading-relaxed">{question.explanation[lang]}</p>
                  </div>

                  <div>
                    <p className="font-bold text-indigo-300 mb-1">
                      {lang === 'th' ? 'วิธีคิดเวลาเจอโจทย์แบบนี้' : 'How to Approach Questions Like This'}
                    </p>
                    <p className="text-sm leading-relaxed">{level.hint[lang]}</p>
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 sm:justify-between pt-4 border-t border-white/10">
                <div className="flex gap-3">
                  <button
                    onClick={() => setCurrentQuestionIdx((prev) => Math.max(0, prev - 1))}
                    disabled={currentQuestionIdx === 0}
                    className={`px-5 py-3 rounded-full font-semibold transition-all ${
                      currentQuestionIdx === 0
                        ? 'bg-white/5 text-slate-500 cursor-not-allowed'
                        : 'bg-white/7 hover:bg-white/10 text-white'
                    }`}
                  >
                    {lang === 'th' ? 'ข้อก่อนหน้า' : 'Previous'}
                  </button>
                  <button
                    onClick={() => setCurrentQuestionIdx((prev) => Math.min(questions.length - 1, prev + 1))}
                    disabled={currentQuestionIdx === questions.length - 1}
                    className={`px-5 py-3 rounded-full font-semibold transition-all ${
                      currentQuestionIdx === questions.length - 1
                        ? 'bg-white/5 text-slate-500 cursor-not-allowed'
                        : 'bg-white/7 hover:bg-white/10 text-white'
                    }`}
                  >
                    {lang === 'th' ? 'ข้อถัดไป' : 'Next'}
                  </button>
                </div>

                {!examSubmitted ? (
                  <button
                    onClick={handleSubmitExam}
                    className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-full bg-sky-500 hover:bg-sky-400 text-white font-semibold transition-all shadow-[0_8px_24px_rgba(14,165,233,0.22)]"
                  >
                    <Send size={18} />
                    {lang === 'th' ? 'ส่งทั้งชุดและดูเฉลย' : 'Submit All and Review'}
                  </button>
                ) : (
                  <button
                    onClick={handleBackToCategories}
                    className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-900 hover:bg-slate-100 font-semibold transition-all"
                  >
                    <ArrowLeft size={18} />
                    {lang === 'th' ? 'กลับไปเลือกชุดข้อสอบ' : 'Back to Quiz Sets'}
                  </button>
                )}
              </div>
            </motion.div>
          </div>

          <aside className="xl:sticky xl:top-24 space-y-4">
            <div className="rounded-3xl bg-white/7 backdrop-blur-md border border-white/10 p-5 shadow-lg">
              <h3 className="text-white font-bold text-lg mb-4">
                {lang === 'th' ? 'สถานะการสอบ' : 'Exam Status'}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-1 gap-3 mb-4">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-1">
                    {lang === 'th' ? 'เวลา' : 'Timer'}
                  </p>
                  <div className="flex items-center gap-2 text-white font-bold text-xl">
                    <Clock3 size={18} className={isOvertime ? 'text-red-400' : 'text-sky-300'} />
                    <span>{isOvertime ? formatDuration(examElapsedSeconds) : formatDuration(remainingSeconds)}</span>
                  </div>
                  <p className={`text-xs mt-2 ${isOvertime ? 'text-red-300' : 'text-slate-400'}`}>
                    {isOvertime
                      ? lang === 'th'
                        ? 'ส่งสายแล้ว แต่ยังทำต่อได้'
                        : 'Late submission. You can still continue.'
                      : lang === 'th'
                        ? 'ครบ 3 ชั่วโมงจะเตือนเฉย ๆ'
                        : 'At 3 hours this becomes a warning only.'}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-1">
                    {lang === 'th' ? 'ตอบแล้ว' : 'Answered'}
                  </p>
                  <p className="text-white font-bold text-xl">{answeredCount}</p>
                  <p className="text-xs text-slate-400 mt-2">
                    {lang === 'th' ? `เหลือ ${unansweredCount} ข้อ` : `${unansweredCount} unanswered`}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-1">
                    {lang === 'th' ? 'โหมด' : 'Mode'}
                  </p>
                  <p className="text-white font-bold text-xl">{examSubmitted ? (lang === 'th' ? 'Review' : 'Review') : 'Exam'}</p>
                  <p className="text-xs text-slate-400 mt-2">
                    {examSubmitted
                      ? lang === 'th'
                        ? 'แสดงเฉลยครบแล้ว'
                        : 'All answers are revealed.'
                      : lang === 'th'
                        ? 'ยังไม่เฉลยจนกว่าจะส่ง'
                        : 'No answers revealed until submission.'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-5 sm:grid-cols-10 xl:grid-cols-5 gap-2">
                {questions.map((item, index) => (
                  <button
                    key={`${activeQuiz.id}-nav-${index}`}
                    onClick={() => setCurrentQuestionIdx(index)}
                    className={getExamNavigatorClass(index)}
                    title={`${lang === 'th' ? 'ข้อ' : 'Question'} ${index + 1}`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 text-xs text-slate-400 space-y-2">
                <p>{lang === 'th' ? 'สีฟ้า = กำลังทำหรือทำแล้ว' : 'Blue = current or answered in-progress'}</p>
                <p>{lang === 'th' ? 'เขียว = ถูกหลังส่งข้อสอบ' : 'Green = correct after submission'}</p>
                <p>{lang === 'th' ? 'แดง = ผิดหลังส่งข้อสอบ' : 'Red = incorrect after submission'}</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6 flex items-center gap-4">
        <button
          onClick={handleBackToCategories}
          className="p-2 rounded-full bg-white/6 hover:bg-white/10 text-slate-400 hover:text-white transition-all shadow-sm"
          title={lang === 'th' ? 'กลับ' : 'Back'}
        >
          <ArrowLeft size={20} />
        </button>
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">{activeQuiz.title[lang]}</h2>
          {activeQuiz.isRandom && question?.sourceCategoryTitle && (
            <p className="text-sm text-slate-400 mt-1">
              {lang === 'th' ? 'หมวดต้นทาง:' : 'Source category:'} {question.sourceCategoryTitle[lang]}
            </p>
          )}
        </div>
      </div>

      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          <div className="px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-sm font-bold">
            {lang === 'th'
              ? `ข้อที่ ${currentQuestionIdx + 1} / ${questions.length}`
              : `Question ${currentQuestionIdx + 1} of ${questions.length}`}
          </div>
          <div className={`px-4 py-1.5 rounded-full border text-sm font-bold ${level.badgeClass}`}>
            {level.short} {lang === 'th' ? level.th : level.en}
          </div>
          {activeQuiz.isRandom && (
            <div className="px-4 py-1.5 rounded-full bg-white/6 border border-white/10 text-slate-300 text-sm font-medium">
              <Tags size={14} className="inline mr-2" />
              {question?.sourceCategoryTitle?.[lang]}
            </div>
          )}
        </div>
        <div className="text-slate-400 text-sm font-medium">
          {lang === 'th' ? `คะแนนปัจจุบัน: ${score}` : `Current Score: ${score}`}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeQuiz.id}-${currentQuestionIdx}`}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="bg-white/7 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-10 shadow-xl"
        >
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
              {question.level === 'M' ? <BookOpenCheck size={16} /> : <BrainCircuit size={16} />}
              <span>
                {question.level === 'M'
                  ? lang === 'th'
                    ? 'โจทย์เน้นความจำและความเข้าใจพื้นฐาน'
                    : 'This question focuses on core recall and understanding.'
                  : lang === 'th'
                    ? 'โจทย์เน้นการวิเคราะห์และประยุกต์ใช้แนวคิด'
                    : 'This question focuses on analysis and application.'}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white leading-relaxed">{question.question[lang]}</h3>
          </div>

          <div className="space-y-3 mb-8">
            {question.options.map((opt, idx) => {
              const isSelected = selectedAnswer === idx;
              const isCorrect = idx === question.answerIndex;

              let btnClass = 'w-full text-left p-4 rounded-2xl border transition-all duration-200 ';
              if (isSubmitted) {
                if (isCorrect) {
                  btnClass += 'bg-emerald-500/16 border-emerald-500/28 text-emerald-100';
                } else if (isSelected && !isCorrect) {
                  btnClass += 'bg-red-500/14 border-red-500/28 text-red-100';
                } else {
                  btnClass += 'bg-white/4 border-white/8 text-slate-500 opacity-60';
                }
              } else if (isSelected) {
                btnClass += 'bg-sky-500/18 border-sky-500/30 text-sky-100 shadow-[0_0_0_3px_rgba(56,189,248,0.08)]';
              } else {
                btnClass += 'bg-white/4 border-white/8 text-slate-200 hover:bg-white/8 hover:border-white/16';
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={isSubmitted}
                  className={btnClass}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <span className="w-8 h-8 rounded-full bg-white/8 border border-white/10 text-sm font-bold inline-flex items-center justify-center shrink-0">
                        {OPTION_LABELS[idx]}
                      </span>
                      <span className="pt-1">{opt[lang]}</span>
                    </div>
                    {isSubmitted && isCorrect && <CheckCircle2 size={20} className="text-emerald-400 shrink-0 mt-1" />}
                    {isSubmitted && isSelected && !isCorrect && <XCircle size={20} className="text-red-400 shrink-0 mt-1" />}
                  </div>
                </button>
              );
            })}
          </div>

          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="overflow-hidden"
              >
                <div className="p-5 rounded-2xl bg-indigo-500/10 border border-indigo-500/18 text-indigo-100 mb-8 space-y-4">
                  <div>
                    <p className="font-bold text-indigo-300 mb-1">
                      {lang === 'th' ? 'เฉลยที่ถูกต้อง' : 'Correct Answer'}
                    </p>
                    <p className="text-sm leading-relaxed">
                      {OPTION_LABELS[question.answerIndex]}) {question.options[question.answerIndex][lang]}
                    </p>
                  </div>

                  <div>
                    <p className="font-bold text-indigo-300 mb-1">
                      {lang === 'th' ? 'เหตุผล' : 'Why It Is Correct'}
                    </p>
                    <p className="text-sm leading-relaxed">{question.explanation[lang]}</p>
                  </div>

                  <div>
                    <p className="font-bold text-indigo-300 mb-1">
                      {lang === 'th' ? 'วิธีคิดเวลาเจอโจทย์แบบนี้' : 'How to Approach Questions Like This'}
                    </p>
                    <p className="text-sm leading-relaxed">{level.hint[lang]}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-end pt-4 border-t border-white/10">
            {!isSubmitted ? (
              <button
                onClick={handleSubmitPractice}
                disabled={selectedAnswer === null}
                className={`px-8 py-3 rounded-full font-bold transition-all ${
                  selectedAnswer !== null
                    ? 'bg-sky-500 hover:bg-sky-400 text-white shadow-[0_8px_24px_rgba(14,165,233,0.22)]'
                    : 'bg-white/5 text-slate-500 cursor-not-allowed'
                }`}
              >
                {lang === 'th' ? 'ส่งคำตอบ' : 'Submit Answer'}
              </button>
            ) : (
              <button
                onClick={handleNextPractice}
                className="px-8 py-3 rounded-full font-bold bg-white text-slate-900 hover:bg-slate-100 transition-all"
              >
                {currentQuestionIdx < questions.length - 1
                  ? lang === 'th'
                    ? 'ข้อถัดไป'
                    : 'Next Question'
                  : lang === 'th'
                    ? 'ดูผลการทดสอบ'
                    : 'See Results'}
              </button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
