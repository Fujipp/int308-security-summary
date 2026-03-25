export const quizCategories = [
  {
    id: 'basics',
    title: { th: '1. พื้นฐานความปลอดภัย (Security Basics)', en: '1. Security Basics' },
    icon: 'Shield',
    questions: [
      {
        question: { th: 'หลักการ CIA Triad ประกอบด้วยอะไรบ้าง?', en: 'What does the CIA Triad stand for?' },
        options: [
          { th: 'Control, Integrity, Authorization', en: 'Control, Integrity, Authorization' },
          { th: 'Confidentiality, Integrity, Availability', en: 'Confidentiality, Integrity, Availability' },
          { th: 'Confidentiality, Identification, Authentication', en: 'Confidentiality, Identification, Authentication' },
          { th: 'Cryptography, Integration, Availability', en: 'Cryptography, Integration, Availability' },
        ],
        answerIndex: 1,
        explanation: { th: 'C = Confidentiality (ความลับ) I = Integrity (ความถูกต้อง) A = Availability (ความพร้อมใช้)', en: 'C = Confidentiality, I = Integrity, A = Availability' }
      },
      {
        question: { th: 'อะไรคือการโจมตีแบบ Active Attack?', en: 'Which of the following describes an Active Attack?' },
        options: [
          { th: 'การดักจับข้อมูลเพื่อแอบดู', en: 'Eavesdropping to view data' },
          { th: 'การวิเคราะห์ Network Traffic', en: 'Traffic Analysis' },
          { th: 'การเปลี่ยนแปลงข้อมูล (Modification) และการปลอมแปลง (Fabrication)', en: 'Data modification and fabrication' },
          { th: 'การฟังพอร์ต (Port Sniffing)', en: 'Port Sniffing' },
        ],
        answerIndex: 2,
        explanation: { th: 'Active Attack จะเกี่ยวข้องกับการแก้ไขข้อมูล ปลอมแปลง หรือขัดขวางการทำงาน', en: 'Active attacks involve modifying system resources or affecting their operation.' }
      }
    ]
  },
  {
    id: 'crypto',
    title: { th: '2. วิทยาการรหัสลับ (Cryptography)', en: '2. Cryptography' },
    icon: 'Key',
    questions: [
      {
        question: { th: 'เทคนิคใดที่ใช้สำหรับป้องกันข้อมูลถูกแก้ไข (Integrity)?', en: 'Which technique is primarily used to ensure data integrity?' },
        options: [
          { th: 'Encryption', en: 'Encryption' },
          { th: 'Obfuscation', en: 'Obfuscation' },
          { th: 'Hash / MAC', en: 'Hash / MAC' },
          { th: 'Steganography', en: 'Steganography' },
        ],
        answerIndex: 2,
        explanation: { th: 'Encryption ใช้ปกปิดข้อมูล ส่วน Hash/MAC เอาไว้ตรวจสอบความถูกต้องของข้อมูลว่าไม่ได้ถูกเปลี่ยนแปลง', en: 'Encryption provides confidentiality, while Hash/MAC is used for integrity checking.' }
      },
      {
        question: { th: 'ทำไม Block Cipher โหมด ECB จึงไม่แนะนำให้ใช้ในปัจจุบัน?', en: 'Why is the ECB Block Cipher mode not recommended?' },
        options: [
          { th: 'เพราะต้องใช้เวลาในการประมวลผลนาน', en: 'Because it takes too long to process' },
          { th: 'เพราะต้องใช้ Initial Vector (IV)', en: 'Because it requires an Initial Vector (IV)' },
          { th: 'เพราะทำงานแบบขนาน (Parallel) ไม่ได้', en: 'Because it cannot run in parallel' },
          { th: 'เพราะบล็อกที่เนื้อหาเหมือนกันจะถูกเข้ารหัสได้ผลักลัพธ์เหมือนเดิม ทำให้เห็น pattern รูปแบบข้อมูล', en: 'Because identical plaintext blocks produce identical ciphertext blocks, revealing patterns' },
        ],
        answerIndex: 3,
        explanation: { th: 'ECB (Electronic Codebook) เข้ารหัสทีละบล็อกโดยอิสระ ทำให้ข้อมูลที่ซ้ำกัน ได้ผลลัพธ์ซ้ำกัน เกิด pattern เช่นกรณีรูปเพนกวิน Linux', en: 'ECB encrypts each block independently. Identical plaintext blocks produce identical ciphertext, which reveals data patterns.' }
      }
    ]
  },
  {
    id: 'datacenter',
    title: { th: '3. ศูนย์ข้อมูลและ DR (Data Center & DR)', en: '3. Data Center & DR' },
    icon: 'Server',
    questions: [
      {
        question: { th: 'สิ่งใดคือดัชนีชี้วัดประสิทธิภาพการใช้พลังงานของ Data Center (PUE)?', en: 'What is Power Usage Effectiveness (PUE) in a Data Center?' },
        options: [
          { th: 'จำนวนไฟฟ้าที่สูญเสียไปทั้งหมด', en: 'Total power lost' },
          { th: 'พลังงานรวมที่เข้า DC / พลังงานที่อุปกรณ์ไอทีใช้', en: 'Total Facility Energy / IT Equipment Energy' },
          { th: 'จำนวนชั่วโมงที่ UPS ทำงานได้', en: 'Total UPS operational hours' },
          { th: 'เปอร์เซ็นต์ความพร้อมใช้ของระบบ', en: 'System availability percentage' }
        ],
        answerIndex: 1,
        explanation: { th: 'PUE เป็นอัตราส่วนระหว่างพลังงานทั้งหมด หารด้วยพลังงานของ IT ค่าที่ใกล้ 1.0 คือดีที่สุด', en: 'PUE is the ratio of total facility energy to IT machinery energy. Values closer to 1.0 indicate high efficiency.' }
      },
      {
        question: { th: 'DR Site ชนิดใดที่พร้อมใช้งานได้เร็วที่สุด แต่มีค่าใช้จ่ายสูงสุด?', en: 'Which type of DR site offers the fastest recovery but at the highest cost?' },
        options: [
          { th: 'Cold Site', en: 'Cold Site' },
          { th: 'Warm Site', en: 'Warm Site' },
          { th: 'Hot Site', en: 'Hot Site' },
          { th: 'Cloud Site', en: 'Cloud Site' }
        ],
        answerIndex: 2,
        explanation: { th: 'Hot Site มีอุปกรณ์และฐานข้อมูลสำรองที่ซิงโครไนซ์พร้อมใช้งานเต็มรูปแบบ', en: 'A Hot Site is fully equipped and synchronized, allowing near-instantaneous recovery.' }
      }
    ]
  },
  {
    id: 'appsec',
    title: { th: '4. ความปลอดภัยคลาวด์และโปรแกรม (AppSec)', en: '4. Database & Cloud Security' },
    icon: 'Cloud',
    questions: [
      {
        question: { th: 'วิธีใดป้องกัน SQL Injection ได้ดีที่สุด?', en: 'Which is the best method to prevent SQL Injection?' },
        options: [
          { th: 'ใช้ WAF (Web Application Firewall)', en: 'Use a WAF (Web Application Firewall)' },
          { th: 'เข้ารหัส Database ทั้งระบบ', en: 'Encrypt the entire database' },
          { th: 'ใช้ Parameterized Query / Prepared Statements', en: 'Use Parameterized Queries / Prepared Statements' },
          { th: 'ซ่อน Error message ไม่ให้ User เห็น', en: 'Hide error messages from the user' },
        ],
        answerIndex: 2,
        explanation: { th: 'การใช้ Parameterized Query ทำให้ฐานข้อมูลแยกชัดเจนระหว่าง "คำสั่ง SQL" และ "ข้อมูลที่ผู้ใช้พิมพ์มา"', en: 'Parameterized queries securely separate the SQL code from the user-provided data, neutralizing injection attempts.' }
      },
      {
        question: { th: 'Kerberos ใช้สิ่งใดเป็นหัวใจหลักในการยืนยันตัวตนข้ามเครือข่าย?', en: 'What is the core component of Kerberos authentication?' },
        options: [
          { th: 'Tickets', en: 'Tickets' },
          { th: 'Biometrics', en: 'Biometrics' },
          { th: 'X.509 Certificates', en: 'X.509 Certificates' },
          { th: 'One-Time Passwords (OTP)', en: 'One-Time Passwords (OTP)' },
        ],
        answerIndex: 0,
        explanation: { th: 'Kerberos เป็นระบบที่ใช้ตั๋ว (Tickets) เช่น TGT และ Service Tickets เพื่อลดการส่งรหัสผ่าน', en: 'Kerberos is a ticket-based authentication system avoiding the transmission of passwords.' }
      }
    ]
  }
];
