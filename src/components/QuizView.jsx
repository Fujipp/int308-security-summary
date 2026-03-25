import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quizCategories } from '../data/quiz';
import { CheckCircle2, XCircle, RefreshCw, Trophy, ArrowLeft } from 'lucide-react';
import * as Icons from 'lucide-react';

export default function QuizView({ lang }) {
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const activeCategory = quizCategories.find(c => c.id === activeCategoryId);
  const questions = activeCategory?.questions || [];
  const question = questions[currentQuestionIdx];

  const handleSelectCategory = (id) => {
    setActiveCategoryId(id);
    setCurrentQuestionIdx(0);
    setScore(0);
    setShowResults(false);
    setSelectedAnswer(null);
    setIsSubmitted(false);
  };

  const handleBackToCategories = () => {
    setActiveCategoryId(null);
  };

  const handleSelect = (idx) => {
    if (isSubmitted) return;
    setSelectedAnswer(idx);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null || isSubmitted) return;
    setIsSubmitted(true);
    if (selectedAnswer === question.answerIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
      setSelectedAnswer(null);
      setIsSubmitted(false);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIdx(0);
    setSelectedAnswer(null);
    setIsSubmitted(false);
    setScore(0);
    setShowResults(false);
  };

  if (!activeCategoryId) {
    // Category Selection View
    return (
      <div className="max-w-5xl mx-auto px-4 py-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            {lang === 'th' ? 'เลือกหมวดหมู่การทดสอบ' : 'Select Quiz Category'}
          </h2>
          <p className="text-gray-400 text-lg">
            {lang === 'th' ? 'เลือกหัวข้อที่ต้องการทบทวนความรู้ก่อนสอบจริง' : 'Choose a topic to test your knowledge before the exam.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quizCategories.map((cat, idx) => {
            const IconComponent = cat.icon ? Icons[cat.icon] : Icons.HelpCircle;
            return (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => handleSelectCategory(cat.id)}
                className="group p-6 rounded-3xl bg-card/60 border border-white/5 hover:border-sky-500/50 hover:bg-card/90 transition-all text-left flex items-start gap-5 shadow-lg"
              >
                <div className="w-14 h-14 rounded-2xl bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                  <IconComponent size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{cat.title[lang]}</h3>
                  <div className="text-sm font-medium text-sky-400">
                    {cat.questions.length} {lang === 'th' ? 'ข้อ' : 'Questions'}
                  </div>
                </div>
              </motion.button>
            )
          })}
        </div>
      </div>
    );
  }

  // Quiz Results View
  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100);
    const message = percentage >= 80 
      ? (lang === 'th' ? 'ยอดเยี่ยมมาก! คุณเข้าใจหมวดหมู่นี้ดีมาก' : 'Excellent! You mastered this category.')
      : percentage >= 50
      ? (lang === 'th' ? 'ทำได้ดี! แต่อ่านทบทวนหมวดนี้อีกนิดนะ' : 'Good job! A little more review would help.')
      : (lang === 'th' ? 'ต้องพยายามอีกนิด กลับไปอ่านสรุปบทนี้เพิ่มนะ' : 'Keep trying! Review the summary for this chapter again.');

    return (
      <div className="max-w-2xl mx-auto px-4 py-16">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-card/80 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-emerald-400 to-sky-400"></div>
          
          <div className="w-24 h-24 mx-auto bg-linear-to-br from-emerald-400/20 to-sky-400/20 rounded-full flex items-center justify-center mb-6 border border-emerald-400/30">
            <Trophy size={48} className="text-emerald-400" />
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-2">
            {lang === 'th' ? 'ผลการทดสอบ' : 'Quiz Results'}
          </h2>
          <p className="text-gray-400 mb-8">{message}</p>
          
          <div className="flex justify-center items-end gap-2 mb-10">
            <span className="text-6xl font-black text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-sky-400">
              {score}
            </span>
            <span className="text-2xl text-gray-500 font-bold mb-2">/ {questions.length}</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleRestart}
              className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all"
            >
              <RefreshCw size={20} />
              {lang === 'th' ? 'ทดสอบใหม่อีกครั้ง' : 'Take Quiz Again'}
            </button>
            <button 
              onClick={handleBackToCategories}
              className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-sky-500 hover:bg-sky-400 text-white font-medium transition-all"
            >
              <ArrowLeft size={20} />
              {lang === 'th' ? 'กลับ' : 'Back'}
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // Active Quiz View
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-6 flex items-center gap-4">
        <button 
          onClick={handleBackToCategories}
          className="p-2 rounded-full bg-base-700 hover:bg-white/10 text-gray-400 hover:text-white transition-all shadow-sm"
          title={lang === 'th' ? 'กลับ' : 'Back'}
        >
          <ArrowLeft size={20} />
        </button>
        <h2 className="text-xl font-bold text-white tracking-wide">
          {activeCategory.title[lang]}
        </h2>
      </div>

      <div className="mb-8 flex items-center justify-between">
        <div className="px-4 py-1.5 rounded-full bg-sky-400/10 border border-sky-400/20 text-sky-400 text-sm font-bold">
          {lang === 'th' ? `ข้อที่ ${currentQuestionIdx + 1} / ${questions.length}` : `Question ${currentQuestionIdx + 1} of ${questions.length}`}
        </div>
        <div className="text-gray-400 text-sm font-medium">
          {lang === 'th' ? `คะแนนปัจจุบัน: ${score}` : `Current Score: ${score}`}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={currentQuestionIdx}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="bg-card/60 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-10 shadow-xl"
        >
          <h3 className="text-2xl font-bold text-white mb-8 leading-relaxed">
            {question.question[lang]}
          </h3>

          <div className="space-y-3 mb-8">
            {question.options.map((opt, idx) => {
              const isSelected = selectedAnswer === idx;
              const isCorrect = idx === question.answerIndex;
              
              let btnClass = "w-full text-left p-4 rounded-xl border transition-all duration-200 ";
              if (isSubmitted) {
                if (isCorrect) {
                  btnClass += "bg-emerald-500/20 border-emerald-500/50 text-emerald-100";
                } else if (isSelected && !isCorrect) {
                  btnClass += "bg-red-500/20 border-red-500/50 text-red-100";
                } else {
                  btnClass += "bg-base-700 border-white/5 text-gray-500 opacity-50";
                }
              } else {
                if (isSelected) {
                  btnClass += "bg-sky-500/20 border-sky-500/50 text-sky-100 shadow-[0_0_15px_rgba(14,165,233,0.15)]";
                } else {
                  btnClass += "bg-base-700 border-white/5 text-gray-300 hover:bg-card hover:border-white/20";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={isSubmitted}
                  className={btnClass}
                >
                  <div className="flex items-center justify-between pointer-events-none">
                    <span>{opt[lang]}</span>
                    {isSubmitted && isCorrect && <CheckCircle2 size={20} className="text-emerald-400" />}
                    {isSubmitted && isSelected && !isCorrect && <XCircle size={20} className="text-red-400" />}
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
                <div className="p-5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-100 mb-8">
                  <p className="font-bold text-indigo-300 mb-1">{lang === 'th' ? 'คำอธิบาย:' : 'Explanation:'}</p>
                  <p className="text-sm leading-relaxed">{question.explanation[lang]}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-end pt-4 border-t border-white/10">
            {!isSubmitted ? (
              <button
                onClick={handleSubmit}
                disabled={selectedAnswer === null}
                className={`px-8 py-3 rounded-full font-bold transition-all ${
                  selectedAnswer !== null 
                    ? 'bg-sky-500 hover:bg-sky-400 text-white shadow-[0_4px_14px_rgba(14,165,233,0.39)] transform hover:-translate-y-0.5' 
                    : 'bg-white/5 text-gray-500 cursor-not-allowed'
                }`}
              >
                {lang === 'th' ? 'ส่งคำตอบ' : 'Submit Answer'}
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-8 py-3 rounded-full font-bold bg-white text-base-700 hover:bg-gray-200 transition-all shadow-[0_4px_14px_rgba(255,255,255,0.2)] transform hover:-translate-y-0.5"
              >
                {currentQuestionIdx < questions.length - 1 
                  ? (lang === 'th' ? 'ข้อถัดไป' : 'Next Question')
                  : (lang === 'th' ? 'ดูผลการทดสอบ' : 'See Results')}
              </button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
