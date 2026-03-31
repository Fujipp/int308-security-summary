import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SummaryView from './components/SummaryView';
import QuizView from './components/QuizView';
import { ExternalLink } from 'lucide-react';

function App() {
  const [lang, setLang] = useState('th');
  const [view, setView] = useState('summary');

  // Load language preference from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('exam_lang');
    if (saved === 'th' || saved === 'en') {
      setLang(saved);
    }
  }, []);

  // Save language preference
  const handleSetLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem('exam_lang', newLang);
  };

  return (
    <div className="min-h-screen relative flex flex-col selection:bg-sky-500/30">
      <Navbar lang={lang} setLang={handleSetLang} view={view} setView={setView} />
      
      <main className="flex-1 relative z-10 w-full mb-20">
        {view === 'summary' && <SummaryView lang={lang} />}
        {view === 'quiz' && <QuizView lang={lang} />}
      </main>

      <footer className="py-6 px-4 text-center text-slate-400 text-sm border-t border-white/6 bg-[#0d1723]/90 z-10 relative backdrop-blur-xl">
        <p className="mb-1">
          {lang === 'th'
            ? 'สรุปและข้อสอบออกแบบมาเพื่อใช้ทบทวนเร็ว พร้อมโหมดสอบเต็ม 100 ข้อ'
            : 'Summary and quiz designed for fast review, including a full 100-question exam mode.'}
        </p>
        <p className="text-slate-500">
          {lang === 'th'
            ? 'Built with OpenAI Codex (GPT-5) assistance'
            : 'Built with OpenAI Codex (GPT-5) assistance'}
        </p>
        <a
          href="https://github.com/Fujipp/int308-security-summary"
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-300 hover:bg-white/10 hover:text-white transition-all"
        >
          <ExternalLink size={16} />
          <span>
            {lang === 'th' ? 'ดูโปรเจกต์บน GitHub' : 'View the project on GitHub'}
          </span>
        </a>
      </footer>
    </div>
  );
}

export default App;
