import React from 'react';
import { motion } from 'framer-motion';
import { summaryData } from '../data/summary';
import { Sparkles, FileText, CheckCircle2 } from 'lucide-react';
import * as Icons from 'lucide-react';

export default function SummaryView({ lang }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 p-6 md:p-8 rounded-3xl bg-linear-to-br from-sky-400/10 to-indigo-400/10 border border-white/10 backdrop-blur-sm relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-sky-400 to-indigo-400"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-400/10 border border-sky-400/20 text-sky-400 text-xs font-bold mb-4">
          <Sparkles size={14} />
          INT308 · Summary
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
          {lang === 'th' ? 'สรุปอ่านง่ายจาก PDF ทั้ง 10 ไฟล์' : 'Easy-to-read summary from all 10 PDF files'}
        </h2>
        <p className="text-gray-400 max-w-2xl text-lg">
          {lang === 'th' 
            ? 'หน้าเดียวสำหรับทบทวนก่อนสอบ แยกเป็น 10 บทตามไฟล์ต้นฉบับ พร้อมคำอธิบายสั้น ๆ และปุ่มสลับภาษาไทย/อังกฤษ' 
            : 'A one-page review sheet organized into 10 chapters based on the original files, with short explanations and Thai/English switching.'}
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Sidebar Navigation */}
        <aside className="w-full lg:w-72 shrink-0 sticky top-20 md:top-24 z-40">
          <div className="bg-base-700/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <h3 className="text-gray-400 font-bold mb-4 px-2 uppercase text-xs tracking-wider">
              {lang === 'th' ? 'สารบัญ (Table of Contents)' : 'Table of Contents'}
            </h3>
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide">
              {summaryData.map((section, idx) => {
                const titleSegments = section.title[lang].split(':');
                const shortTitle = titleSegments.length > 1 ? titleSegments[1].trim() : section.title[lang];
                return (
                  <button
                    key={`nav-${section.id}`}
                    onClick={() => handleScrollTo(section.id)}
                    className="text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-gray-400 hover:bg-white/10 hover:text-white shrink-0 shadow-sm border border-transparent hover:border-white/5 flex items-center gap-3 lg:w-full"
                  >
                    <div className="w-7 h-7 rounded-sm bg-sky-500/10 text-sky-400 flex items-center justify-center text-xs font-bold shrink-0 shadow-inner border border-sky-400/20">
                      {idx + 1}
                    </div>
                    <span className="truncate">{shortTitle}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 min-w-0">
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 gap-8"
          >
            {summaryData.map((section, idx) => (
              <motion.article 
                key={section.id}
                id={section.id}
                variants={item}
                className="group relative bg-card/60 backdrop-blur-md border border-white/5 rounded-2xl p-6 md:p-8 hover:bg-card/90 hover:border-white/10 transition-colors shadow-lg scroll-mt-40 md:scroll-mt-44"
              >
                {/* Article Content */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-300 font-bold shrink-0 mt-1 border border-indigo-500/20">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                    {section.title[lang]}
                  </h3>
                </div>

                <ul className="space-y-6 mb-6">
                  {section.items.map((listItem, i) => {
                    const IconComponent = listItem.icon ? Icons[listItem.icon] : null;
                    return (
                      <li key={i} className="flex flex-col gap-4 p-4 md:p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all">
                        <div className="flex items-start gap-4">
                          {IconComponent ? (
                            <div className="shrink-0 p-2.5 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/20 shadow-lg mt-1">
                              <IconComponent size={24} />
                            </div>
                          ) : (
                            <span className="shrink-0 mt-3 w-2 h-2 rounded-full bg-sky-400"></span>
                          )}
                          <span 
                            className="text-gray-200 leading-relaxed text-base pt-1" 
                            dangerouslySetInnerHTML={{ __html: listItem[lang] }} 
                          />
                        </div>
                        {listItem.imageUrl && (
                          <div className="md:ml-16 rounded-xl overflow-hidden border border-white/10 shadow-2xl opacity-90 hover:opacity-100 transition-opacity">
                            <img 
                              src={listItem.imageUrl} 
                              alt="" 
                              className="w-full object-cover max-h-[400px]" 
                              loading="lazy"
                            />
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>

                {section.note && section.note[lang] && (
                  <div className="ml-14 mb-4 p-4 rounded-xl bg-base-700 border border-sky-400/20 text-sky-200/90 text-sm flex gap-3 items-start">
                    <FileText size={18} className="shrink-0 text-sky-400 mt-0.5" />
                    <p>{section.note[lang]}</p>
                  </div>
                )}

                {section.shortPhrase && section.shortPhrase[lang] && (
                  <div className="ml-14 p-4 rounded-xl bg-linear-to-r from-indigo-500/10 to-transparent border-l-2 border-indigo-500">
                    <p className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">
                      {section.shortPhrase.title ? section.shortPhrase.title[lang] || section.shortPhrase.title : 'QUICK TIP'}
                    </p>
                    <p className="text-gray-200">
                      {section.shortPhrase[lang]}
                    </p>
                  </div>
                )}
                
              </motion.article>
            ))}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
