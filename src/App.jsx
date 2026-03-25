import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SummaryView from './components/SummaryView';
import QuizView from './components/QuizView';

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

      <footer className="py-6 text-center text-gray-500 text-sm border-t border-white/5 bg-[#0b1220] z-10 relative">
        <p>
          {lang === 'th' 
            ? 'สรุปและข้อสอบออกแบบมาเพื่อใช้ทบทวนเร็ว' 
            : 'Summary and quiz designed for quick review.'}
        </p>
      </footer>
    </div>
  );
}

export default App;
