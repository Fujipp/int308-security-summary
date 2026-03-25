import React from 'react';
import { BookOpen, HelpCircle, Languages } from 'lucide-react';

export default function Navbar({ lang, setLang, view, setView }) {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#0b1220]/80 border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-indigo-400 flex items-center justify-center text-white shadow-[0_0_20px_rgba(125,211,252,0.3)]">
            <BookOpen size={20} />
          </div>
          <h1 className="text-xl font-bold text-white tracking-wide">
            INT308 <span className="text-sky-400">Security</span>
          </h1>
        </div>

        <div className="flex items-center gap-2 bg-white/5 p-1 rounded-full border border-white/10">
          <button
            onClick={() => setView('summary')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              view === 'summary' 
                ? 'bg-gradient-to-r from-sky-400/20 to-indigo-400/20 text-sky-400 border border-sky-400/30 shadow-[0_0_15px_rgba(125,211,252,0.1)]' 
                : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            <BookOpen size={16} />
            {lang === 'th' ? 'สรุปเนื้อหา' : 'Summary'}
          </button>
          <button
            onClick={() => setView('quiz')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              view === 'quiz' 
                ? 'bg-gradient-to-r from-sky-400/20 to-indigo-400/20 text-sky-400 border border-sky-400/30 shadow-[0_0_15px_rgba(125,211,252,0.1)]' 
                : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            <HelpCircle size={16} />
            {lang === 'th' ? 'ทำข้อสอบ' : 'Quiz'}
          </button>
        </div>

        <div className="flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/10">
          <button
            onClick={() => setLang('th')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              lang === 'th' ? 'bg-[#172238] text-white border border-white/10' : 'text-gray-400 hover:text-white'
            }`}
          >
            TH
          </button>
          <button
            onClick={() => setLang('en')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              lang === 'en' ? 'bg-[#172238] text-white border border-white/10' : 'text-gray-400 hover:text-white'
            }`}
          >
            EN
          </button>
        </div>

      </div>
    </nav>
  );
}
