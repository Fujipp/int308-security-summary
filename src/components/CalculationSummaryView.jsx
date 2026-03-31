import React from 'react';
import { motion } from 'framer-motion';
import {
  BrainCircuit,
  Calculator,
  ChevronRight,
  KeyRound,
  LockKeyhole,
  Sigma,
  Split,
} from 'lucide-react';

const sections = [
  {
    id: 'caesar',
    icon: Calculator,
    title: {
      th: '1. Caesar Cipher',
      en: '1. Caesar Cipher',
    },
    intro: {
      th: 'ใช้การเลื่อนตัวอักษรไปข้างหน้า/ถอยหลังตามค่าคงที่ k',
      en: 'Shift each letter forward or backward by a fixed value k.',
    },
    steps: {
      th: [
        'กำหนดค่า shift เช่น k = 3',
        'เข้ารหัส: เลื่อนตัวอักษรไปข้างหน้า 3 ตำแหน่ง',
        'ถอดรหัส: เลื่อนกลับ 3 ตำแหน่ง',
      ],
      en: [
        'Choose the shift value, for example k = 3.',
        'Encryption: move each letter forward by 3 positions.',
        'Decryption: move each letter backward by 3 positions.',
      ],
    },
    example: {
      th: 'ตัวอย่าง: ATTACK + 3 = DWWDFN',
      en: 'Example: ATTACK + 3 = DWWDFN',
    },
    tip: {
      th: 'ถ้าโจทย์ให้ ciphertext สั้น ๆ ให้ลองไล่ shift ย้อนกลับทีละค่าได้เลย',
      en: 'For short ciphertext, you can often reverse it by testing shifts one by one.',
    },
  },
  {
    id: 'vigenere',
    icon: KeyRound,
    title: {
      th: '2. Vigenere Cipher',
      en: '2. Vigenere Cipher',
    },
    intro: {
      th: 'ใช้ key word มาสร้างชุดการเลื่อนหลายแบบแทนการเลื่อนค่าเดียว',
      en: 'Use a keyword to create multiple shifts instead of a single fixed shift.',
    },
    steps: {
      th: [
        'เขียน key ให้ยาวเท่าข้อความ เช่น HELLO กับ KEY จะกลายเป็น KEYKE',
        'แปลง A=0, B=1, ... Z=25',
        'เข้ารหัสโดยเอาค่าของ plaintext + key mod 26',
      ],
      en: [
        'Repeat the keyword to match the message length, e.g. HELLO with KEY becomes KEYKE.',
        'Map letters as A=0, B=1, ... Z=25.',
        'Encrypt using plaintext value + key value mod 26.',
      ],
    },
    example: {
      th: 'ตัวอย่าง: HELLO กับ KEY = RIJVS',
      en: 'Example: HELLO with KEY = RIJVS',
    },
    tip: {
      th: 'ถ้าโจทย์ถามย้อนกลับ ให้ทำ ciphertext - key mod 26',
      en: 'For decryption, compute ciphertext - key mod 26.',
    },
  },
  {
    id: 'xor-cbc',
    icon: Split,
    title: {
      th: '3. XOR และ CBC/CTR Logic',
      en: '3. XOR and CBC/CTR Logic',
    },
    intro: {
      th: 'หลายโจทย์ไม่ต้องคำนวณทั้ง algorithm แต่ให้เข้าใจ XOR และ flow ของ mode',
      en: 'Many questions do not require full encryption, only XOR logic and mode flow.',
    },
    steps: {
      th: [
        'XOR จำง่าย: เหมือนกันได้ 0, ต่างกันได้ 1',
        'CBC block แรก: P1 XOR IV ก่อนเข้า block cipher',
        'CTR: เอา encrypted counter ไป XOR กับ plaintext',
      ],
      en: [
        'XOR rule: same bits produce 0, different bits produce 1.',
        'CBC first block: P1 XOR IV before block encryption.',
        'CTR: XOR the encrypted counter with the plaintext.',
      ],
    },
    example: {
      th: 'ตัวอย่าง: 1010 XOR 1100 = 0110',
      en: 'Example: 1010 XOR 1100 = 0110',
    },
    tip: {
      th: 'โจทย์ชอบถามผลเสียของการ reuse IV/counter หรือ keystream มากกว่าคำนวณยาว',
      en: 'Exams often ask more about IV/counter reuse or keystream reuse than long calculations.',
    },
  },
  {
    id: 'aes',
    icon: LockKeyhole,
    title: {
      th: '4. AES Step Tracking',
      en: '4. AES Step Tracking',
    },
    intro: {
      th: 'ส่วนใหญ่จะถามลำดับขั้นและผลจาก step เดียว เช่น ShiftRows หรือ AddRoundKey',
      en: 'Most questions focus on the order of steps or the effect of one step such as ShiftRows or AddRoundKey.',
    },
    steps: {
      th: [
        'ลำดับหลัก: SubBytes → ShiftRows → MixColumns → AddRoundKey',
        'รอบสุดท้ายไม่มี MixColumns',
        'AddRoundKey คือ XOR ระหว่าง state กับ round key',
      ],
      en: [
        'Main order: SubBytes → ShiftRows → MixColumns → AddRoundKey.',
        'The final round omits MixColumns.',
        'AddRoundKey is XOR between the state and the round key.',
      ],
    },
    example: {
      th: 'ตัวอย่าง: 10101100 XOR 11000011 = 01101111',
      en: 'Example: 10101100 XOR 11000011 = 01101111',
    },
    tip: {
      th: 'จำให้แม่นว่าแถว 2 เลื่อน 1, แถว 3 เลื่อน 2, แถว 4 เลื่อน 3',
      en: 'Remember: row 2 shifts by 1, row 3 by 2, and row 4 by 3.',
    },
  },
  {
    id: 'rsa',
    icon: Sigma,
    title: {
      th: '5. RSA Calculation',
      en: '5. RSA Calculation',
    },
    intro: {
      th: 'โจทย์มักใช้เลขเล็กเพื่อให้คำนวณมือได้',
      en: 'Questions usually use small numbers so you can compute them by hand.',
    },
    steps: {
      th: [
        'หา n = p × q',
        'หา phi(n) = (p−1)(q−1)',
        'หา d ที่ทำให้ e×d ≡ 1 mod phi(n)',
        'เข้ารหัส: C = M^e mod n',
      ],
      en: [
        'Compute n = p × q.',
        'Compute phi(n) = (p−1)(q−1).',
        'Find d such that e×d ≡ 1 mod phi(n).',
        'Encrypt using C = M^e mod n.',
      ],
    },
    example: {
      th: 'ตัวอย่าง: p=5, q=11 จะได้ n=55 และ phi(n)=40',
      en: 'Example: with p=5 and q=11, n=55 and phi(n)=40.',
    },
    tip: {
      th: 'ถ้าเลขยกกำลังใหญ่ ให้ค่อย ๆ mod ไปทีละช่วง อย่าคูณยาวรวดเดียว',
      en: 'For large exponents, reduce modulo step by step instead of multiplying everything directly.',
    },
  },
  {
    id: 'dh',
    icon: BrainCircuit,
    title: {
      th: '6. Diffie-Hellman Shared Secret',
      en: '6. Diffie-Hellman Shared Secret',
    },
    intro: {
      th: 'โจทย์ชอบให้ q, a และ secret ของแต่ละฝ่าย แล้วถาม public value หรือ shared secret',
      en: 'Questions often provide q, a, and each party’s secret, then ask for the public value or shared secret.',
    },
    steps: {
      th: [
        'Alice ส่ง A = a^x mod q',
        'Bob ส่ง B = a^y mod q',
        'Shared secret = B^x mod q = A^y mod q',
      ],
      en: [
        'Alice sends A = a^x mod q.',
        'Bob sends B = a^y mod q.',
        'Shared secret = B^x mod q = A^y mod q.',
      ],
    },
    example: {
      th: 'ตัวอย่าง: q=23, a=5, x=6 จะได้ public ของ Alice = 8',
      en: 'Example: with q=23, a=5, x=6, Alice’s public value is 8.',
    },
    tip: {
      th: 'จำไว้ว่า DH อย่างเดียวไม่ยืนยันตัวตน จึงยังเสี่ยง MITM',
      en: 'Remember that Diffie-Hellman alone does not authenticate the parties and is still vulnerable to MITM.',
    },
  },
];

export default function CalculationSummaryView({ lang }) {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 p-6 md:p-8 rounded-3xl bg-linear-to-br from-amber-400/12 via-sky-400/10 to-cyan-400/10 border border-amber-300/20 backdrop-blur-sm relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-amber-300 via-sky-400 to-cyan-400"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-300/20 text-amber-300 text-xs font-bold mb-4">
          <Calculator size={14} />
          {lang === 'th' ? 'NEW · Calculation Summary' : 'NEW · Calculation Summary'}
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
          {lang === 'th' ? 'หน้าสรุปคำนวณก่อนทำโจทย์' : 'Calculation Summary Before the Quiz'}
        </h2>
        <p className="text-slate-300 max-w-3xl text-lg">
          {lang === 'th'
            ? 'สรุปสูตรสั้น วิธีคิดทีละขั้น และตัวอย่างคำนวณที่ออกสอบบ่อย เพื่อใช้ปูพื้นก่อนเข้า Calculation Drill หรือ Full Mock Exam'
            : 'A focused page of compact formulas, step-by-step methods, and common exam-style calculations to review before Calculation Drill or the full mock exam.'}
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <aside className="w-full lg:w-72 shrink-0 sticky top-20 md:top-24 z-40">
          <div className="bg-base-700/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-5 shadow-[0_8px_32px_rgba(0,0,0,0.32)]">
            <h3 className="text-slate-400 font-bold mb-4 px-2 uppercase text-xs tracking-wider">
              {lang === 'th' ? 'Calculation Topics' : 'Calculation Topics'}
            </h3>
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide">
              {sections.map((section, idx) => (
                <button
                  key={section.id}
                  onClick={() => handleScrollTo(section.id)}
                  className="text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-slate-300 hover:bg-white/10 hover:text-white shrink-0 border border-transparent hover:border-white/5 flex items-center gap-3 lg:w-full"
                >
                  <div className="w-7 h-7 rounded-sm bg-amber-500/10 text-amber-300 flex items-center justify-center text-xs font-bold shrink-0 border border-amber-300/20">
                    {idx + 1}
                  </div>
                  <span className="truncate">{section.title[lang]}</span>
                </button>
              ))}
            </div>
          </div>
        </aside>

        <main className="flex-1 min-w-0 space-y-8">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <motion.article
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card/60 backdrop-blur-md border border-white/8 rounded-3xl p-6 md:p-8 shadow-lg scroll-mt-40 md:scroll-mt-44"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="shrink-0 p-3 rounded-2xl bg-amber-500/12 text-amber-300 border border-amber-300/20">
                    <Icon size={26} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{section.title[lang]}</h3>
                    <p className="text-slate-300">{section.intro[lang]}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-6">
                  <div className="rounded-2xl bg-white/5 border border-white/8 p-5">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-300 mb-4">
                      {lang === 'th' ? 'Process' : 'Process'}
                    </p>
                    <div className="space-y-3">
                      {section.steps[lang].map((step, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-7 h-7 rounded-full bg-sky-500/12 text-sky-300 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                            {index + 1}
                          </div>
                          <p className="text-slate-200 leading-relaxed">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-2xl bg-emerald-500/8 border border-emerald-400/14 p-5">
                      <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300 mb-3">
                        {lang === 'th' ? 'Example' : 'Example'}
                      </p>
                      <p className="text-slate-100 font-medium">{section.example[lang]}</p>
                    </div>

                    <div className="rounded-2xl bg-amber-500/8 border border-amber-300/16 p-5">
                      <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-300 mb-3">
                        {lang === 'th' ? 'Exam Tip' : 'Exam Tip'}
                      </p>
                      <p className="text-slate-200">{section.tip[lang]}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 inline-flex items-center gap-2 text-sm text-slate-400">
                  <ChevronRight size={16} className="text-sky-300" />
                  <span>
                    {lang === 'th'
                      ? 'แนะนำให้อ่านหน้านี้ก่อน แล้วค่อยไปทำ Calculation Drill'
                      : 'Read this page first, then move to Calculation Drill.'}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </main>
      </div>
    </div>
  );
}
