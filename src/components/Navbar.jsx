import React from 'react';
import { BookOpen, Calculator, HelpCircle } from 'lucide-react';

export default function Navbar({ lang, setLang, view, setView }) {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#0d1723]/78 border-b border-white/8">
      <div className="max-w-6xl mx-auto px-3 md:px-6 py-3 md:py-4 flex flex-col gap-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-sky-400 to-cyan-500 flex items-center justify-center text-white shadow-[0_0_18px_rgba(56,189,248,0.28)] shrink-0">
            <BookOpen size={20} />
          </div>
          <h1 className="text-lg md:text-xl font-bold text-white tracking-wide truncate">
            INT308 <span className="text-sky-400">Security</span>
          </h1>
        </div>

        <div className="flex items-center gap-1 bg-white/4 rounded-full p-1 border border-white/8 shrink-0">
          <button
            onClick={() => setLang('th')}
            className={`px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all ${
              lang === 'th' ? 'bg-[#15293f] text-white border border-white/10' : 'text-slate-400 hover:text-white'
            }`}
          >
            TH
          </button>
          <button
            onClick={() => setLang('en')}
            className={`px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all ${
              lang === 'en' ? 'bg-[#15293f] text-white border border-white/10' : 'text-slate-400 hover:text-white'
            }`}
          >
            EN
          </button>
        </div>
        </div>

        <div className="flex items-center gap-2 bg-white/4 p-1 rounded-full border border-white/8 w-full overflow-x-auto scrollbar-hide">
          <button
            onClick={() => setView('summary')}
            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap flex-1 min-w-[132px] ${
              view === 'summary' 
                ? 'bg-sky-500/14 text-sky-300 border border-sky-400/25 shadow-[0_0_12px_rgba(56,189,248,0.1)]' 
                : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            <BookOpen size={16} />
            {lang === 'th' ? 'สรุปเนื้อหา' : 'Summary'}
          </button>
          <button
            onClick={() => setView('calculation-summary')}
            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap flex-1 min-w-[170px] ${
              view === 'calculation-summary'
                ? 'bg-amber-500/14 text-amber-300 border border-amber-300/25 shadow-[0_0_12px_rgba(251,191,36,0.1)]'
                : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            <Calculator size={16} />
            <span>{lang === 'th' ? 'สรุปคำนวณ' : 'Calc Summary'}</span>
            <span className="rounded-full bg-amber-400/15 border border-amber-300/20 px-2 py-0.5 text-[10px] font-bold tracking-[0.12em] text-amber-300">
              NEW
            </span>
          </button>
          <button
            onClick={() => setView('quiz')}
            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap flex-1 min-w-[132px] ${
              view === 'quiz' 
                ? 'bg-sky-500/14 text-sky-300 border border-sky-400/25 shadow-[0_0_12px_rgba(56,189,248,0.1)]' 
                : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            <HelpCircle size={16} />
            {lang === 'th' ? 'ทำข้อสอบ' : 'Quiz'}
          </button>
        </div>
      </div>
    </nav>
  );
}
