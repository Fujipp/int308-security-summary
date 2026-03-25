export const summaryData = [
  {
    id: 'slide-1',
    title: {
      th: 'Slide 1: ภาพรวมความมั่นคงปลอดภัย (Security Overview)',
      en: 'Slide 1: Security Overview & Cryptography Basics',
    },
    items: [
      {
        icon: 'ShieldCheck',
        th: '<strong class="text-sky-300">1. เป้าหมายหลัก (CIA Triad)</strong><br/><span class="text-gray-400">เป้าหมายสำคัญในการรักษาความปลอดภัย:</span><br/>• <b>Confidentiality (การรักษาความลับ):</b> ป้องกันข้อมูลจากการถูกเปิดเผยต่อผู้ไม่มีสิทธิ์<br/>• <b>Integrity (ความถูกต้อง):</b> รับรองว่าข้อมูลจะไม่ถูกแก้ไขหรือทำลาย<br/>• <b>Availability (ความพร้อมใช้):</b> ระบบและข้อมูลพร้อมใช้งานอย่างต่อเนื่อง',
        en: '<strong class="text-sky-300">1. CIA Triad</strong><br/><span class="text-gray-400">The core goals of security:</span><br/>• <b>Confidentiality:</b> Prevents unauthorized data disclosure.<br/>• <b>Integrity:</b> Ensures data is not altered or destroyed without authorization.<br/>• <b>Availability:</b> Ensures systems and data are continuously accessible.',
        imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
      },
      {
        icon: 'ShieldAlert',
        th: '<strong class="text-sky-300">2. ภัยคุกคาม (Security Threats)</strong><br/>• <b>Business Continuity:</b> <i>Disruptions</i> (ลดประสิทธิภาพ/ขัดข้อง), <i>Destructions</i> (ทำลายข้อมูล เช่น ไวรัส), <i>Disasters</i> (ภัยพิบัติทางธรรมชาติ/มนุษย์สร้าง)<br/>• <b>Intrusion:</b> การบุกรุกเข้าถึงข้อมูล ส่วนใหญ่เกี่ยวข้องกับพนักงานในองค์กร',
        en: '<strong class="text-sky-300">2. Security Threats</strong><br/>• <b>Business Continuity:</b> <i>Disruptions</i> (network downtime), <i>Destructions</i> (data loss via viruses), <i>Disasters</i> (natural/man-made).<br/>• <b>Intrusion:</b> Unauthorized access to resources, often involving insiders.'
      },
      {
        icon: 'LineChart',
        th: '<strong class="text-sky-300">3. การประเมินความเสี่ยง (Risk Assessment)</strong><br/>• ประเมินจาก <b>โอกาสที่จะเกิด (Probability)</b> และ <b>มูลค่าความเสียหาย (Likely cost)</b><br/>• ใช้ <b>Control Spreadsheet</b> เปรียบเทียบระหว่าง Assets กับ Threats เพื่อหา Controls ที่เหมาะสม',
        en: '<strong class="text-sky-300">3. Risk Assessment</strong><br/>• Evaluated by <b>Probability</b> and <b>Likely cost</b> of the incident.<br/>• Use a <b>Control Spreadsheet</b> to map Assets against Threats to determine the right Controls.'
      },
      {
        icon: 'BugOff',
        th: '<strong class="text-sky-300">4. ไวรัสและการโจมตีแบบ DoS</strong><br/>• <b>Worms & Viruses:</b> เวิร์มกระจายได้เองไม่ต้องอาศัยมนุษย์ ป้องกันโดยใช้ Antivirus<br/>• <b>DoS/DDoS:</b> ส่งข้อความมหาศาลให้เน็ตเวิร์กชะงัก แนวทางป้องกัน: ติดตั้งเซิร์ฟเวอร์หลายแห่ง, ใช้ระบบ IDS, ให้ ISP ตรวจสอบ IP',
        en: '<strong class="text-sky-300">4. Viruses & DoS Attacks</strong><br/>• <b>Worms & Viruses:</b> Worms self-replicate without human interaction. Blocked by Antivirus.<br/>• <b>DoS/DDoS:</b> Flooding networks to cause disruption. Mitigated via IDS, geographically distributed servers, and ISP-level IP validation.'
      },
      {
        icon: 'UserX',
        th: '<strong class="text-sky-300">5. การบุกรุกและการป้องกัน (Intrusion Prevention)</strong><br/>• <b>ประเภทผู้บุกรุก:</b> Casual (ลองสุ่ม), Script kiddies (ใช้ทูลส์), Hackers, Crackers, พนักงานองค์กร<br/>• <b>การป้องกัน:</b> เก็บข้อมูลแบบ Air-gapped (ไม่ออนไลน์), มี Security Policy ที่ชัดเจน, ฝึกอบรมพนักงานสม่ำเสมอ',
        en: '<strong class="text-sky-300">5. Intrusion Prevention</strong><br/>• <b>Threat Actors:</b> Casual intruders, Script kiddies, Hackers, Crackers, Insiders.<br/>• <b>Prevention:</b> Implement Air-gapped storage for critical data, enforce clear Security Policies, and conduct regular training.'
      },
      {
        icon: 'KeyRound',
        th: '<strong class="text-sky-300">6. การเข้ารหัสข้อมูล (Encryption/Cryptography)</strong><br/>• ประกอบด้วย: Plaintext, Algorithm, Key, Ciphertext<br/>• <b>Symmetric:</b> ใช้กุญแจดอกเดียวกัน (จุดอ่อน: จัดการแจกจ่ายยาก)<br/>• <b>Asymmetric (PKE):</b> ใช้คู่กุญแจ Public (เข้ารหัส) และ Private (ถอดรหัส) แก้ปัญหาการแจกจ่ายกุญแจ',
        en: '<strong class="text-sky-300">6. Encryption/Cryptography</strong><br/>• Components: Plaintext, Algorithm, Key, Ciphertext.<br/>• <b>Symmetric:</b> Same key for encryption and decryption (weakness: difficult key distribution).<br/>• <b>Asymmetric (PKE):</b> Uses Public key (encrypt) and Private key (decrypt) to solve key distribution issues.'
      },
      {
        icon: 'FileBadge',
        th: '<strong class="text-sky-300">7. ลายเซ็นดิจิทัลและ PKI</strong><br/>• <b>Digital Signatures:</b> ใช้กลับกันคือ "ส่ง Private รับ Public" เพื่อยืนยันตัวตนผู้ส่งและกันการปฏิเสธความรับผิดชอบ<br/>• <b>PKI:</b> ระบบที่ขับเคลื่อน PKE บนเน็ต<br/>• <b>CA:</b> องค์กรน่าเชื่อถือที่ออก <b>Certificate</b> เพื่อยืนยันลายเซ็นดิจิทัล',
        en: '<strong class="text-sky-300">7. Digital Signature & PKI</strong><br/>• <b>Digital Signatures:</b> Encrypted with the sender\'s Private key to verify identity and ensure non-repudiation.<br/>• <b>PKI:</b> The infrastructure enabling Internet-wide PKE.<br/>• <b>CA:</b> Trusted entity that issues digital <b>Certificates</b> to validate signatures.'
      }
    ]
  },
  {
    id: 'slide-2',
    title: {
      th: 'Slide 2: วิทยาการรหัสลับ (Cryptography)',
      en: 'Slide 2: Cryptography',
    },
    items: [
      {
        icon: 'BookOpen',
        th: '<strong class="text-sky-300">1. พื้นฐานและคำศัพท์สำคัญ (Basic Terminology)</strong><br/>• <b>Cryptography:</b> การใช้คณิตศาสตร์ปกป้องข้อความที่ส่งหรือจัดเก็บ<br/>• <b>Plaintext / Ciphertext:</b> ข้อความต้นฉบับ / ข้อความรหัส<br/>• <b>Cipher:</b> อัลกอริทึมหรือขั้นตอนในการเข้ารหัส<br/>• <b>Key:</b> ข้อมูลลับที่ใช้ใน Cipher (รู้เฉพาะผู้ส่งและผู้รับ)',
        en: '<strong class="text-sky-300">1. Basic Terminology</strong><br/>• <b>Cryptography:</b> Using mathematics to protect stored or transmitted information.<br/>• <b>Plaintext / Ciphertext:</b> Original message / Encrypted message.<br/>• <b>Cipher:</b> The algorithm for encryption/decryption.<br/>• <b>Key:</b> Secret info used in Cipher (known only to sender/receiver).',
        imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800'
      },
      {
        icon: 'Shield',
        th: '<strong class="text-sky-300">2. การปกป้องข้อมูล (Cryptographic Protection)</strong><br/>• <b>Confidentiality (การรักษาความลับ):</b> ป้องกันผู้ดักจับไม่ให้อ่านข้อความได้<br/>• <b>Authentication (การพิสูจน์ตัวตน):</b> ยืนยันตัวตนเพื่อให้เกิดความเชื่อใจ<br/>• <b>Integrity (ความถูกต้อง):</b> มั่นใจว่าข้อความไม่ถูกเปลี่ยนแปลง ถ้าเปลี่ยนจะตรวจพบได้',
        en: '<strong class="text-sky-300">2. Cryptographic Protection</strong><br/>• <b>Confidentiality:</b> Prevents interceptors from reading the message.<br/>• <b>Authentication:</b> Proving identity to establish mutual trust.<br/>• <b>Integrity:</b> Ensuring the message is not altered, or detecting if it has been.'
      },
      {
        icon: 'KeySquare',
        th: '<strong class="text-sky-300">3. การเข้ารหัสแบบสมมาตร (Symmetric Encryption)</strong><br/>• ผู้ส่งและผู้รับใช้ <b>กุญแจลับร่วมกัน (Single Key)</b><br/>• <b>DES:</b> กุญแจ 56 bits (ปัจจุบันถือว่าอ่อนแอ)<br/>• <b>3DES:</b> ใช้ DES 3 รอบ เพื่อความปลอดภัยที่สูงขึ้น<br/>• <b>AES:</b> มาตรฐานปัจจุบัน (128, 192, 256 bits) มีความปลอดภัยสูงและทำงานได้เร็ว',
        en: '<strong class="text-sky-300">3. Symmetric Encryption</strong><br/>• Sender and receiver share a <b>Single Secret Key</b>.<br/>• <b>DES:</b> 56-bit key (considered weak today).<br/>• <b>3DES:</b> Applies DES 3 times for higher security.<br/>• <b>AES:</b> Current standard (128, 192, 256 bits). Highly secure and fast.'
      },
      {
        icon: 'Hash',
        th: '<strong class="text-sky-300">4. การทำแฮช (Hashing)</strong><br/>• นำข้อมูลความยาวใดๆ มาคำนวณให้ได้ผลลัพธ์ที่มี <b>ขนาดสั้นและคงที่ (Fixed length)</b><br/>• <b>ไม่สามารถย้อนกลับได้ (Irreversible):</b> ไม่สามารถหาข้อความต้นฉบับจากค่าแฮชได้<br/>• อัลกอริทึม: MD5, SHA-1 (ไม่แนะนำ), และ <b>ตระกูล SHA-2 (เช่น SHA-256)</b> เป็นที่นิยมปัจจุบัน',
        en: '<strong class="text-sky-300">4. Hashing</strong><br/>• Converts data of any length into a <b>Fixed-length</b> output.<br/>• <b>Irreversible:</b> Cannot derive the original message from the hash value.<br/>• Algorithms: MD5, SHA-1 (deprecated), and <b>SHA-2 family (e.g., SHA-256)</b> are currently recommended.'
      },
      {
        icon: 'FileSearch',
        th: '<strong class="text-sky-300">5. การวิเคราะห์รหัสลับ (Cryptanalysis)</strong><br/>• การพยายามถอดรหัสโดยไม่ทราบกุญแจ<br/>• <b>Brute-Force Attack:</b> การสุ่มลองทุกกุญแจที่เป็นไปได้ ความยากขึ้นอยู่กับขนาดกุญแจ<br/>• <b>Cryptanalytic Attack:</b> การโจมตีเชิงสถิติหรืออาศัยช่องโหว่ของอัลกอริทึม',
        en: '<strong class="text-sky-300">5. Cryptanalysis</strong><br/>• Attempting to decrypt a message without knowing the key.<br/>• <b>Brute-Force Attack:</b> Trying every possible key. Difficulty depends on key size.<br/>• <b>Cryptanalytic Attack:</b> Statistical attacks or exploiting algorithm vulnerabilities.'
      },
      {
        icon: 'ScrollText',
        th: '<strong class="text-sky-300">6. เทคนิคการเข้ารหัสสมัยคลาสสิก (Classical Techniques)</strong><br/>• <b>Substitution:</b> แทนที่ตัวอักษร (เช่น Caesar, Vigenère, One-Time Pad)<br/>• <b>Transposition:</b> สลับตำแหน่งตัวอักษร (เช่น Rail Fence)<br/>• <b>Product Cipher:</b> นำทั้งสองแบบมาผสมกันให้ถอดรหัสยากขึ้น<br/>• <b>Steganography:</b> การซ่อนการมีอยู่ของข้อความ (เช่น ซ่อนในภาพ) ไม่ใช่การเข้ารหัสตัวข้อความ',
        en: '<strong class="text-sky-300">6. Classical Techniques</strong><br/>• <b>Substitution:</b> Replacing characters (e.g., Caesar, Vigenère, One-Time Pad).<br/>• <b>Transposition:</b> Rearranging characters (e.g., Rail Fence).<br/>• <b>Product Cipher:</b> Combining both methods to increase complexity.<br/>• <b>Steganography:</b> Hiding the existence of a message (e.g., inside an image), not encrypting the text itself.'
      }
    ]
  },
  {
    id: 'slide-3',
    title: {
      th: 'Slide 3: บล็อกไซเฟอร์สมัยใหม่ (Modern Block Ciphers)',
      en: 'Slide 3: Modern Block Ciphers',
    },
    items: [
      {
        icon: 'LockKeyhole',
        th: '<strong class="text-sky-300">1. บล็อกไซเฟอร์สมัยใหม่ (Modern Block Ciphers)</strong><br/>• ให้บริการทั้ง <b>การรักษาความลับ (Secrecy)</b> และ <b>พิสูจน์ตัวตน (Authentication)</b><br/>• เป็นอัลกอริทึมเข้ารหัสที่ใช้แพร่หลายที่สุด<br/>• ใช้ <b>DES (Data Encryption Standard)</b> เป็นต้นแบบในการศึกษาการออกแบบ',
        en: '<strong class="text-sky-300">1. Modern Block Ciphers</strong><br/>• Provides both <b>Secrecy</b> and <b>Authentication</b>.<br/>• The most widely used family of cryptographic algorithms.<br/>• Uses <b>DES (Data Encryption Standard)</b> as the primary study model for design.'
      },
      {
        icon: 'Network',
        th: '<strong class="text-sky-300">2. หลักการของบล็อกไซเฟอร์ (Block Cipher Principles)</strong><br/>• ไซเฟอร์ส่วนใหญ่ใช้โครงสร้าง <b>Feistel Cipher</b> เพื่อให้ถอดรหัสได้อย่างมีประสิทธิภาพ<br/>• ทำงานคล้ายการแทนที่ (Substitution) แบบบล็อกขนาดใหญ่<br/>• สร้างจากองค์ประกอบย่อยๆ ด้วยแนวคิดของ <b>Product Cipher</b>',
        en: '<strong class="text-sky-300">2. Block Cipher Principles</strong><br/>• Most ciphers use the <b>Feistel Cipher</b> structure for efficient decryption.<br/>• Functions similarly to a massive substitution process.<br/>• Built from smaller components using the <b>Product Cipher</b> concept.'
      },
      {
        icon: 'Shuffle',
        th: '<strong class="text-sky-300">3. เครือข่าย S-P (Substitution-Permutation Networks)</strong><br/>• นำเสนอโดย Claude Shannon (1949) เป็นพื้นฐานไซเฟอร์สมัยใหม่ ประกอบด้วย:<br/>• <b>Substitution (S-box):</b> การแทนที่ข้อมูล<br/>• <b>Permutation (P-box):</b> การสลับตำแหน่งข้อมูล',
        en: '<strong class="text-sky-300">3. Substitution-Permutation (S-P) Networks</strong><br/>• Proposed by Claude Shannon in 1949, forming the basis of modern ciphers:<br/>• <b>Substitution (S-box):</b> Replacing data elements.<br/>• <b>Permutation (P-box):</b> Rearranging data positions.'
      },
      {
        icon: 'Blend',
        th: '<strong class="text-sky-300">4. ความสับสนและการแพร่กระจาย (Confusion and Diffusion)</strong><br/>• <b>Diffusion:</b> กระจายโครงสร้างทางสถิติของ Plaintext ไปทั่ว Ciphertext เพื่อปิดบังข้อมูลเดิม<br/>• <b>Confusion:</b> ทำให้ความสัมพันธ์ระหว่าง Ciphertext กับ Key มีความซับซ้อนที่สุดเท่าที่จะเป็นไปได้',
        en: '<strong class="text-sky-300">4. Confusion and Diffusion</strong><br/>• <b>Diffusion:</b> Spreads the statistical structure of plaintext across the ciphertext to hide patterns.<br/>• <b>Confusion:</b> Makes the relationship between the ciphertext and the key as complex as possible.'
      },
      {
        icon: 'Binary',
        th: '<strong class="text-sky-300">5. การวิเคราะห์ความแข็งแกร่งของ DES (Strength & Cryptanalysis)</strong><br/>• <b>Timing Attacks:</b> โจมตีด้วยการจับเวลาคำนวณที่ต่างกันเพื่อหาข้อมูลกุญแจย่อย<br/>• <b>Differential Cryptanalysis:</b> โจมตีเชิงสถิติต่อ Feistel Ciphers โดยเทียบรูปแบบคู่ข้อมูล<br/>• <b>Linear Cryptanalysis:</b> ใช้วิธีหาค่าประมาณเชิงเส้น<br/><i>*แม้ DES จะทนทานต่อ Differential แต่การโจมตีเหล่านี้ยังใช้ได้ดีกับไซเฟอร์หลายตัวในปัจจุบัน</i>',
        en: '<strong class="text-sky-300">5. Strength & Cryptanalysis of DES</strong><br/>• <b>Timing Attacks:</b> Exploits computation time differences to derive subkeys.<br/>• <b>Differential Cryptanalysis:</b> A statistical attack comparing related encrypted pairs.<br/>• <b>Linear Cryptanalysis:</b> Relies on discovering linear approximations.<br/><i>*DES is quite resistant to Differential attacks, though these methods remain highly relevant today.</i>'
      }
    ]
  },
  {
    id: 'slide-4',
    title: {
      th: 'Slide 4: มาตรฐานการเข้ารหัสขั้นสูง (AES)',
      en: 'Slide 4: Advanced Encryption Standard (AES)',
    },
    items: [
      {
        icon: 'History',
        th: '<strong class="text-sky-300">1. ที่มาและความสำคัญของ AES</strong><br/>• ถูกสร้างมาแทน DES เนื่องจากช่องโหว่จาก Exhaustive key search<br/>• โครงการพิจารณาเลือก <b>Rijndael</b> เป็นมาตรฐานในปี 2000<br/>• ข้อกำหนด: ต้องเป็น <b>Symmetric block cipher</b> รองรับข้อมูล 128 บิต และกุญแจ 128, 192, 256 บิต',
        en: '<strong class="text-sky-300">1. Origin & Importance of AES</strong><br/>• Created to replace DES due to its vulnerability to exhaustive key searches.<br/>• NIST selected <b>Rijndael</b> as the standard in 2000.<br/>• Requirements: Must be a <b>Symmetric block cipher</b> supporting 128-bit blocks and keys of 128, 192, or 256 bits.'
      },
      {
        icon: 'ListChecks',
        th: '<strong class="text-sky-300">2. เกณฑ์การคัดเลือก (Evaluation Criteria)</strong><br/>• <b>ความปลอดภัย (Security):</b> ความต้านทานต่อการวิเคราะห์รหัสลับ<br/>• <b>ต้นทุน (Cost):</b> ความรวดเร็วและประสิทธิภาพในการประมวลผล<br/>• <b>ลักษณะแบบแผน:</b> ความยืดหยุ่นที่นำไปใช้งานได้ดีทั้ง Hardware และ Software',
        en: '<strong class="text-sky-300">2. Evaluation Criteria</strong><br/>• <b>Security:</b> Resistance to cryptanalysis.<br/>• <b>Cost:</b> Processing speed and efficiency.<br/>• <b>Algorithm Characteristics:</b> Flexibility and ease of implementation in hardware and software.'
      },
      {
        icon: 'Layers',
        th: '<strong class="text-sky-300">3. โครงสร้างของ Rijndael (AES)</strong><br/>• <b>ไม่ใช้โครงสร้าง Feistel</b> แต่เป็นการประมวลผลซ้อนทับข้อมูลทั้งหมด<br/>• ข้อมูลจัดอยู่ในรูปแบบตาราง 4x4 เรียกว่า <b>State</b><br/>• จำนวนรอบการทำงาน: <b>10 รอบ</b> (กุญแจ 128 บิต), <b>12 รอบ</b> (192 บิต), <b>14 รอบ</b> (256 บิต)',
        en: '<strong class="text-sky-300">3. AES Structure (Rijndael)</strong><br/>• <b>Not a Feistel cipher</b>; processes the entire data block in each round.<br/>• Data is organized into a 4x4 byte array called <b>State</b>.<br/>• Number of rounds: <b>10</b> (128-bit key), <b>12</b> (192-bit), or <b>14</b> (256-bit).'
      },
      {
        icon: 'RotateCw',
        th: '<strong class="text-sky-300">4. ขั้นตอนการทำงานในแต่ละรอบ (Round Steps)</strong><br/>ในทุกรอบ (เว้นรอบสุดท้าย) ประกอบด้วย:<br/>• <b>SubBytes:</b> แทนที่ไบต์แบบไม่เป็นเส้นตรงผ่าน S-box<br/>• <b>ShiftRows:</b> เลื่อนไบต์ในแนวนอนแบบวนรอบ<br/>• <b>MixColumns:</b> คำนวณข้ามคอลัมน์โดยใช้ Matrix multiplication ใน GF(2<sup>8</sup>)<br/>• <b>AddRoundKey:</b> นำ State มา XOR กับรอบกุญแจ',
        en: '<strong class="text-sky-300">4. Round Steps</strong><br/>Every full round consists of 4 steps:<br/>• <b>SubBytes:</b> Non-linear byte substitution using an S-box.<br/>• <b>ShiftRows:</b> Circular shifting of rows to scramble data.<br/>• <b>MixColumns:</b> Matrix multiplication over GF(2<sup>8</sup>) per column.<br/>• <b>AddRoundKey:</b> XORing the State with the current round key.'
      },
      {
        icon: 'Key',
        th: '<strong class="text-sky-300">5. การขยายกุญแจและการนำไปใช้</strong><br/>• <b>Key Expansion:</b> สร้างชุดกุญแจสำหรับทุกรอบจากกุญแจเริ่มต้น<br/>• <b>Decryption:</b> ทำกระบวนการย้อนหลังด้วยฟังก์ชันผกผัน (Inverses)<br/>• <b>ประสิทธิภาพ:</b> ทำงานได้เร็วมากด้วย <b>Table lookups</b> บน CPU 8 บิต และ 32 บิต',
        en: '<strong class="text-sky-300">5. Key Expansion & Usage</strong><br/>• <b>Key Expansion:</b> Derives individual round keys from the main key.<br/>• <b>Decryption:</b> Inverse steps applied in reverse order.<br/>• <b>Efficiency:</b> Optimized for high speed using <b>Table lookups</b> on 8-bit and 32-bit CPUs.'
      }
    ]
  },
  {
    id: 'slide-5',
    title: {
      th: 'Slide 5: การเข้ารหัสหลายชั้นและโหมดการทำงาน',
      en: 'Slide 5: Multiple Encryption & Modes of Operation',
    },
    items: [
      {
        icon: 'ShieldPlus',
        th: '<strong class="text-sky-300">1. การเข้ารหัสหลายชั้น (Multiple Encryption) และ 3DES</strong><br/>• DES เริ่มไม่ปลอดภัยจากการสุ่มกุญแจ (Exhaustive search)<br/>• <b>Double-DES:</b> ไม่นิยมเพราะมีช่องโหว่ <i>Meet-in-the-middle attack</i> ถอดรหัสง่ายเท่า DES ปกติ<br/>• <b>Triple-DES (3DES):</b> มาตรฐานแทน DES เข้ารหัส 3 รอบ (E-D-E) มีทั้งแบบ 2 กุญแจและ 3 กุญแจ (ปลอดภัยสูงสุด)',
        en: '<strong class="text-sky-300">1. Multiple Encryption & Triple-DES</strong><br/>• DES became unsafe due to exhaustive key search vulnerabilities.<br/>• <b>Double-DES:</b> Unpopular due to the <i>Meet-in-the-middle attack</i> (reduces security to single DES level).<br/>• <b>Triple-DES (3DES):</b> Standard DES replacement. Encrypts 3 times (E-D-E). Exists in two-key and three-key variants (max security).'
      },
      {
        icon: 'Blocks',
        th: '<strong class="text-sky-300">2. โหมดการทำงานของบล็อกไซเฟอร์ (Modes of Operation)</strong><br/>• <b>ECB:</b> เข้ารหัสแต่ละบล็อกแยกกันโดยอิสระ<br/>• <b>CBC:</b> นำ Ciphertext บล็อกก่อนหน้ามา XOR กับ Plaintext บล็อกปัจจุบัน<br/>• <b>CFB / OFB:</b> เปลี่ยน Block Cipher ให้ทำงานแบบ Stream Cipher<br/>• <b>CTR (Counter):</b> เข้ารหัสค่า Counter แล้ว XOR กับข้อมูล (ทำแบบ <b>Parallel</b> ได้)',
        en: '<strong class="text-sky-300">2. Block Cipher Modes of Operation</strong><br/>• <b>ECB:</b> Encrypts each block independently.<br/>• <b>CBC:</b> XORs previous Ciphertext block with current Plaintext before encryption.<br/>• <b>CFB / OFB:</b> Converts block ciphers into stream ciphers.<br/>• <b>CTR (Counter):</b> Encrypts a Counter value and XORs with data (advantage: supports <b>Parallel</b> processing).'
      },
      {
        icon: 'Zap',
        th: '<strong class="text-sky-300">3. สตรีมไซเฟอร์ (Stream Ciphers) และ RC4</strong><br/>• เข้ารหัสข้อมูลทีละบิต/ไบต์ ทำงานได้เร็วกว่าและใช้ทรัพยากรน้อยกว่า<br/>• <b>RC4:</b> สตรีมไซเฟอร์ที่เคยนิยมมากที่สุด (เช่นใน SSL/TLS, WEP)<br/>• <b>กระบวนการ RC4:</b> สร้างอาร์เรย์แบบสุ่ม (Key Schedule) สร้าง Stream key ออกมา แล้วนำไป XOR กับข้อมูลทีละไบต์',
        en: '<strong class="text-sky-300">3. Stream Ciphers & RC4</strong><br/>• Encrypts data bit-by-bit or byte-by-byte. Typically faster and uses fewer resources than block ciphers.<br/>• <b>RC4:</b> Historically the most popular stream cipher (used in SSL/TLS, WEP).<br/>• <b>RC4 Process:</b> Creates a randomized array (Key Schedule), generates a Stream Key, and XORs it with data byte-by-byte.'
      }
    ]
  },
  {
    id: 'slide-6',
    title: {
      th: 'Slide 6: กุญแจสาธารณะและ RSA',
      en: 'Slide 6: Public-Key Cryptography & RSA',
    },
    items: [
      {
        icon: 'Scale',
        th: '<strong class="text-sky-300">1. ความแตกต่างระหว่าง Private-Key และ Public-Key</strong><br/>• <b>Private-Key (ดั้งเดิม):</b> ใช้กุญแจร่วมกันดอกเดียว หากหลุดรอดข้อมูลถูกถอดรหัสได้ทันที ป้องกันการปลอมแปลงไม่ได้<br/>• <b>Public-Key (อสมมาตร):</b> ใช้กุญแจ 2 ดอก (Public และ Private) ถือเป็นความก้าวหน้าสำคัญทางวิทยาการรหัสลับ',
        en: '<strong class="text-sky-300">1. Private-Key vs. Public-Key Cryptography</strong><br/>• <b>Private-Key (Symmetric):</b> Uses a single shared key. If compromised, data is instantly decipherable; cannot prevent forgery.<br/>• <b>Public-Key (Asymmetric):</b> Uses two distinct keys (Public and Private). A major breakthrough in cryptography.'
      },
      {
        icon: 'Lightbulb',
        th: '<strong class="text-sky-300">2. ทำไมต้องมี Public-Key Cryptography?</strong><br/>พัฒนาขึ้นเพื่อแก้ 2 ปัญหาหลักระดับโลก:<br/>• <b>Key Distribution (แจกจ่ายกุญแจ):</b> แลกเปลี่ยนกุญแจอย่างปลอดภัยโดยไม่พึ่งพาตัวกลาง (KDC)<br/>• <b>Digital Signatures (ลายเซ็นดิจิทัล):</b> ยืนยันว่าใครคือผู้ส่ง และข้อความไม่ถูกแก้ไข',
        en: '<strong class="text-sky-300">2. Why Public-Key Cryptography?</strong><br/>Developed to solve two major challenges:<br/>• <b>Key Distribution:</b> Securely sharing keys without a centralized Key Distribution Center (KDC).<br/>• <b>Digital Signatures:</b> Proving sender identity and ensuring message integrity.'
      },
      {
        icon: 'UnlockKeyhole',
        th: '<strong class="text-sky-300">3. หลักการของกุญแจสาธารณะ (Asymmetric Cryptography)</strong><br/>• <b>Public-key:</b> เปิดเผยให้ทุกคนรู้ได้ ใช้สำหรับ <b>เข้ารหัสข้อความ</b> หรือ <b>ตรวจสอบลายเซ็น</b><br/>• <b>Private-key:</b> เก็บเป็นความลับส่วนตัว ใช้ <b>ถอดรหัสข้อความ</b> หรือ <b>สร้างลายเซ็น</b>',
        en: '<strong class="text-sky-300">3. Principles of Asymmetric Cryptography</strong><br/>• <b>Public-key:</b> Publicly broadcasted. Used to <b>encrypt messages</b> or <b>verify signatures</b>.<br/>• <b>Private-key:</b> Kept strictly secret. Used to <b>decrypt messages</b> or <b>create signatures</b>.'
      },
      {
        icon: 'Cpu',
        th: '<strong class="text-sky-300">4. อัลกอริทึม RSA</strong><br/>• พัฒนาโดย Rivest, Shamir และ Adleman (MIT) ในปี 1978<br/>• เป็นอัลกอริทึม Public-Key ที่ใช้งานแพร่หลายที่สุดในโลก<br/>• ความปลอดภัยอาศัย <b>ความยากในการแยกตัวประกอบของจำนวนเฉพาะขนาดใหญ่ (Factoring Problem)</b>',
        en: '<strong class="text-sky-300">4. RSA Algorithm</strong><br/>• Developed by Rivest, Shamir, and Adleman at MIT in 1978.<br/>• The most universally implemented public-key algorithm.<br/>• Security relies purely on the <b>mathematical difficulty of factoring large prime numbers</b>.'
      },
      {
        icon: 'ShieldAlert',
        th: '<strong class="text-sky-300">5. ความปลอดภัยและการโจมตี RSA</strong><br/>• <b>Brute-force:</b> ป้องกันได้ด้วยขนาดกุญแจที่ยาวพอ (ระดับ 1024-2048 บิต)<br/>• <b>Timing Attacks:</b> วัดเวลาถอดรหัสเพื่อเดากุญแจ (แก้ด้วยการหน่วงเวลาแบบสุ่ม)<br/>• <b>Chosen Ciphertext Attacks (CCA):</b> ผู้โจมตีส่งข้อความหลอกให้ถอดรหัสเพื่อวิเคราะห์หาข้อมูล (ป้องกันด้วย <b>Padding OAEP</b>)',
        en: '<strong class="text-sky-300">5. RSA Security & Cryptanalysis</strong><br/>• <b>Brute-force:</b> Defeated by using sufficiently large key sizes (1024-2048 bits).<br/>• <b>Timing Attacks:</b> Guessing keys via decryption timing (prevented by random calculation delays).<br/>• <b>Chosen Ciphertext Attacks (CCA):</b> Tricking systems into decrypting crafted data (prevented by <b>OAEP Padding</b>).'
      }
    ]
  },
  {
    id: 'slide-7',
    title: {
      th: 'Slide 7: การแจกจ่ายกุญแจสาธารณะและฟังก์ชันแฮช',
      en: 'Slide 7: Distribution of Public Keys & Hash Functions',
    },
    items: [
      {
        icon: 'Share2',
        th: '<strong class="text-sky-300">1. การแจกจ่ายกุญแจสาธารณะ (เรียงจากปลอดภัยน้อยไปมาก)</strong><br/>• <b>Public Announcement:</b> ประกาศสาธารณะ (เสี่ยงต่อการถูกปลอมแปลง)<br/>• <b>Publicly Available Directory:</b> ลงทะเบียนในไดเรกทอรี (ยังเสี่ยงถูกแก้ไขข้อมูล)<br/>• <b>Public-Key Authority:</b> ติดต่อกับหน่วยงานแบบ Real-time เพื่อขอรับกุญแจ<br/>• <b>Public-Key Certificates:</b> นิยมที่สุด ใช้ใบรับรองจาก Certificate Authority (CA) ยืนยันตัวตนเจ้าของกุญแจ',
        en: '<strong class="text-sky-300">1. Distribution of Public Keys (Least to Most Secure)</strong><br/>• <b>Public Announcement:</b> Broadcasting the key (highly vulnerable to forgery).<br/>• <b>Publicly Available Directory:</b> Registering keys in a trusted directory (still vulnerable to tampering).<br/>• <b>Public-Key Authority:</b> Real-time requests to an authority for keys.<br/>• <b>Public-Key Certificates:</b> Most popular method; uses certificates issued by a Certificate Authority (CA) to prove identity.'
      },
      {
        icon: 'Hash',
        th: '<strong class="text-sky-300">2. ความแข็งแกร่งของ Hash Functions และ MAC</strong><br/>• <b>Brute-force:</b> อาศัยการชนกันของข้อมูล (Collision) แฮชขนาด <i>m</i> บิตต้องลอง 2<sup>m/2</sup> ครั้ง (ปัจจุบันแนะนำ 160 บิตขึ้นไป)<br/>• <b>Birthday Attack:</b> ส่งข้อความจริงและปลอมจำนวนมากหาคู่ที่แฮชตรงกัน หลอกให้เซ็นข้อความแฝง<br/>• <b>Cryptanalytic Attacks:</b> มุ่งโจมตีโครงสร้างภายในของฟังก์ชันแฮชโดยตรง',
        en: '<strong class="text-sky-300">2. Hash Functions & MAC Security</strong><br/>• <b>Brute-force:</b> Targets collision resistance. An <i>m</i>-bit hash requires 2<sup>m/2</sup> attempts (160+ bits recommended today).<br/>• <b>Birthday Attack:</b> Generating many genuine and forged messages to find a matching hash, tricking the signer.<br/>• <b>Cryptanalytic Attacks:</b> Exploiting the internal structure of iterative hash functions.'
      },
      {
        icon: 'Link',
        th: '<strong class="text-sky-300">3. ใช้ Block Cipher สร้างค่าแฮช</strong><br/>• นำอัลกอริทึมเข้ารหัสแบบบล็อก (เช่น DES) มาสร้างฟังก์ชันแฮชคล้ายโหมด CBC แต่ไม่ใช้กุญแจลับ<br/>• <b>ข้อจำกัด:</b> ผลลัพธ์มักจะมีขนาดเล็กไป (เช่น 64 บิตใน DES) ทำให้ตกเป็นเป้าของ Birthday attack และ Meet-in-the-middle ได้ง่าย',
        en: '<strong class="text-sky-300">3. Using Block Ciphers as Hash Functions</strong><br/>• Utilizing block ciphers (like DES) to construct a hash function, similarly to CBC mode but without a secret key.<br/>• <b>Limitations:</b> Output size is usually too short (e.g., 64 bits for DES), leaving it highly vulnerable to Birthday and Meet-in-the-middle attacks.'
      }
    ]
  },
  {
    id: 'slide-8',
    title: {
      th: 'Slide 8: การยืนยันตัวตนและความปลอดภัยของอีเมล',
      en: 'Slide 8: Authentication & Email Security',
    },
    items: [
      {
        icon: 'Ticket',
        th: '<strong class="text-sky-300">1. Kerberos</strong><br/>• ระบบเซิร์ฟเวอร์ที่เชื่อถือได้ (พัฒนาโดย MIT) บริการพิสูจน์ตัวตนแบบรวมศูนย์ด้วย Private-key<br/>• <b>Authentication Server (AS):</b> ตรวจสอบตัวตนผู้ใช้และออกตั๋วตั้งต้น <i>Ticket Granting Ticket (TGT)</i><br/>• <b>Ticket Granting Server (TGS):</b> รับ TGT เพื่อออก "ตั๋วบริการ" ให้ผู้ใช้เข้าถึงระบบปลายทาง',
        en: '<strong class="text-sky-300">1. Kerberos</strong><br/>• A trusted key server system (MIT) providing centralized Private-key authentication.<br/>• <b>Authentication Server (AS):</b> Verifies users and issues a <i>Ticket Granting Ticket (TGT)</i>.<br/>• <b>Ticket Granting Server (TGS):</b> Accepts the TGT to issue "Service Tickets" for specific resources.'
      },
      {
        icon: 'FileBadge',
        th: '<strong class="text-sky-300">2. X.509</strong><br/>• บริการพิสูจน์ตัวตนแบบไดเรกทอรีที่ใช้ Public-key (ถือเป็นมาตรฐานสากล)<br/>• ใช้โครงสร้าง <b>ใบรับรอง (Certificates)</b> ที่ลงนามโดย Certificate Authority (CA)<br/>• เวอร์ชัน <i>X.509 v3</i> ถูกใช้แพร่หลายในแอปพลิเคชันอย่าง S/MIME และ IPsec',
        en: '<strong class="text-sky-300">2. X.509</strong><br/>• A universally accepted directory authentication service based on Public-key cryptography.<br/>• Relies on <b>Certificates</b> issued and signed by a trusted Certificate Authority (CA).<br/>• <i>X.509 v3</i> is widely implemented in protocols like S/MIME and IPsec.'
      },
      {
        icon: 'LockKeyhole',
        th: '<strong class="text-sky-300">3. PGP (Pretty Good Privacy)</strong><br/>• ซอฟต์แวร์ความปลอดภัยอีเมล ให้ทั้งการรักษาความลับและการพิสูจน์ตัวตน<br/>• <b>Key Identifier:</b> ใช้ Key ID (64 บิตสุดท้ายของกุญแจ) อ้างอิงถึงกุญแจที่ต้องใช้ ช่วยให้จัดการง่ายและลดพื้นที่จัดเก็บ',
        en: '<strong class="text-sky-300">3. PGP (Pretty Good Privacy)</strong><br/>• Email security software providing both confidentiality and authentication.<br/>• <b>Key Identifier:</b> Uses a Key ID (the trailing 64 bits of the key) to identify the required key, saving space and improving management.'
      },
      {
        icon: 'MailCheck',
        th: '<strong class="text-sky-300">4. S/MIME (Secure MIME)</strong><br/>• ส่วนขยายความปลอดภัยสำหรับอีเมล มีฟังก์ชันเช่น <i>Enveloped data</i> (ซ่อนข้อความ), <i>Signed data</i> (แนบลายเซ็น), <i>Clear-signed data</i> (ข้อความปกติ+ลายเซ็น)<br/>• <b>การจัดการใบรับรอง:</b> ใช้ X.509 v3 ผสมผสานลำดับชั้นแบบ CA เข้ากับโครงข่ายความเชื่อถือ (Web of Trust) แบบ PGP',
        en: '<strong class="text-sky-300">4. S/MIME (Secure MIME)</strong><br/>• A security enhancement for email including <i>Enveloped data</i>, <i>Signed data</i>, and <i>Clear-signed data</i>.<br/>• <b>Certificate Handling:</b> Uses X.509 v3, blending hierarchical CAs with PGP\'s Web of Trust model.'
      }
    ]
  },
  {
    id: 'slide-9',
    title: {
      th: 'Slide 9: มาตรฐานศูนย์ข้อมูลและการกู้คืนระบบ',
      en: 'Slide 9: Data Center Standards & Disaster Recovery',
    },
    items: [
      {
        icon: 'Server',
        th: '<strong class="text-sky-300">1. มาตรฐานศูนย์ข้อมูล (Data Center Standards)</strong><br/>• <b>TIA-942:</b> ควบคุมพื้นที่ สายสัญญาณ ไฟฟ้า แอร์ ดับเพลิง<br/>• <b>Uptime Institute:</b> วัดความพร้อมใช้งาน 4 ระดับ (Tier I ถึง Tier IV แบบ Fault Tolerant)<br/>• <b>NFPA:</b> มาตรฐานความปลอดภัยอัคคีภัยและไฟฟ้า (เช่น NFPA 2001)<br/>• <b>ASHRAE:</b> ผู้กำหนดอุณหภูมิและความชื้นที่เหมาะสมของแร็ค',
        en: '<strong class="text-sky-300">1. Data Center Standards</strong><br/>• <b>TIA-942:</b> Covers telecommunications, power, cooling, and fire safety.<br/>• <b>Uptime Institute:</b> Defines 4 availability Tiers (from Tier I up to Fault Tolerant Tier IV).<br/>• <b>NFPA:</b> Fire and electrical safety standards (e.g., NFPA 2001 for clean agents).<br/>• <b>ASHRAE:</b> Environmental guidelines defining optimal temperature and humidity.',
        imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800'
      },
      {
        icon: 'Snowflake',
        th: '<strong class="text-sky-300">2. ระบบระบายความร้อน (Cooling Systems)</strong><br/>• ใช้ระบบปรับอากาศเฉพาะตัวคือ <b>CRAC</b> และ <b>CRAH</b><br/>• <b>Hot Aisle / Cold Aisle:</b> การจัดวางตู้แร็คให้ด้านปล่อยความร้อนหันชนกัน (Hot) และด้านดูดความเย็นหันชนกัน (Cold) เพื่อแยกทางเดินอากาศและเพิ่มประสิทธิภาพ',
        en: '<strong class="text-sky-300">2. Cooling Systems</strong><br/>• Utilizing specialized <b>CRAC</b> or <b>CRAH</b> cooling units.<br/>• <b>Hot Aisle / Cold Aisle:</b> Arranging racks so cold air intakes face each other, isolating cold and hot airflows for maximum efficiency.'
      },
      {
        icon: 'BatteryCharging',
        th: '<strong class="text-sky-300">3. ระบบไฟฟ้าและพลังงาน (Power Infrastructure)</strong><br/>• <b>UPS (เครื่องสำรองไฟ):</b> ทำหน้าที่จ่ายไฟชั่วคราวแบบไร้รอยต่อระหว่างไฟดับจนกว่าเครื่องปั่นไฟจะทำงาน<br/>• <b>PUE (Power Usage Effectiveness):</b> ดัชนีวัดความคุ้มค่าพลังงาน (ไฟทั้งหมด / ไฟของอุปกรณ์ไอที) หากได้เข้าใกล้ <b>1.0</b> แปลว่าดีที่สุด',
        en: '<strong class="text-sky-300">3. Power Infrastructure</strong><br/>• <b>UPS (Uninterruptible Power Supply):</b> Provides immediate seamless backup power during outages before generators spin up.<br/>• <b>PUE (Power Usage Effectiveness):</b> Ratio of total facility energy to IT equipment energy. A value closer to <b>1.0</b> is considered optimal.'
      },
      {
        icon: 'LifeBuoy',
        th: '<strong class="text-sky-300">4. การกู้คืนระบบจากภัยพิบัติ (Disaster Recovery - DR)</strong><br/>• <b>BCP:</b> แผนความต่อเนื่องทางธุรกิจ<br/>• <b>RTO (Recovery Time Objective):</b> เวลาเป้าหมายของการกู้ระบบ (พังได้กี่ชั่วโมง)<br/>• <b>RPO (Recovery Point Objective):</b> ข้อมูลสูญหายได้สูงสุดแค่ไหน<br/>• <b>Data Replication:</b> มีทั้ง <i>Synchronous</i> (พร้อมกันเป๊ะแต่ต้องใกล้) และ <i>Asynchronous</i> (มีดีเลย์แต่ซิงค์ข้ามประเทศได้)',
        en: '<strong class="text-sky-300">4. Disaster Recovery (DR)</strong><br/>• <b>BCP (Business Continuity Plan):</b> Overall plan to keep operations running.<br/>• <b>RTO (Recovery Time Objective):</b> Maximum acceptable downtime.<br/>• <b>RPO (Recovery Point Objective):</b> Maximum acceptable data loss.<br/>• <b>Data Replication:</b> Consists of <i>Synchronous</i> (real-time, short distance) and <i>Asynchronous</i> (delayed, long distance) replication.'
      },
      {
        icon: 'Building2',
        th: '<strong class="text-sky-300">5. ประเภทของ DR Site</strong><br/>• <b>Hot Site:</b> พร้อมใช้งาน 100% กู้ระบบได้เร็วที่สุด แต่ต้นทุนสูงทะลุเพดาน<br/>• <b>Warm Site:</b> มีเซิร์ฟเวอร์บางส่วน ต้องใช้เวลาจัดเตรียมและกู้ฐานข้อมูลเล็กน้อย<br/>• <b>Cold Site:</b> ห้องเปล่าที่มีแอร์และไฟให้ ต้องหาอุปกรณ์มาลงเองทั้งหมดเมื่อเกิดเหตุ',
        en: '<strong class="text-sky-300">5. Types of DR Sites</strong><br/>• <b>Hot Site:</b> Fully equipped, synchronized data, fastest recovery but highest cost.<br/>• <b>Warm Site:</b> Partially equipped; requires configuration and some data restoration time.<br/>• <b>Cold Site:</b> Empty facility with base infrastructure; requires full hardware installation and complete data recovery.'
      }
    ]
  },
  {
    id: 'slide-10',
    title: {
      th: 'Slide 10: ความปลอดภัยของฐานข้อมูลและคลาวด์',
      en: 'Slide 10: Database & Cloud Security',
    },
    items: [
      {
        icon: 'Database',
        th: '<strong class="text-sky-300">1. องค์ประกอบพื้นฐานฐานข้อมูลเชิงสัมพันธ์</strong><br/>• <b>Relation/Table:</b> ตารางสำหรับเก็บข้อมูล<br/>• <b>Tuple/Row/Record:</b> แถวของข้อมูลแต่ละรายการ<br/>• <b>Attribute/Column/Field:</b> หัวข้อหรือประเภทของข้อมูลในแต่ละคอลัมน์<br/>• <b>SQL:</b> ภาษามาตรฐานที่ใช้จัดการและสอบถามข้อมูล',
        en: '<strong class="text-sky-300">1. Relational Database Elements</strong><br/>• <b>Relation/Table:</b> The table storing data.<br/>• <b>Tuple/Row/Record:</b> An individual row of data.<br/>• <b>Attribute/Column/Field:</b> A specific data category (column).<br/>• <b>SQL:</b> The standard language used to manage and query the database.'
      },
      {
        icon: 'TerminalSquare',
        th: '<strong class="text-sky-300">2. การโจมตีแบบ SQL Injection (SQLi)</strong><br/>• การส่งคำสั่งอันตรายผ่านหน้าเว็บเพื่อขโมยลบข้อมูล หรือรันคำสั่ง OS<br/>• <b>Inband Attacks:</b> โจมตีช่องทางตรง ข้อมูลลึกถูกพ่นออกมาแสดงบนหน้าเว็บทันที<br/>• <b>Inferential Attack:</b> แบบสุ่มเดา (Blind) โดยสังเกตการตอบสนองของระบบ (เช่น หน่วงเวลา) แทนการรับข้อมูลตรงๆ',
        en: '<strong class="text-sky-300">2. SQL Injection Attacks (SQLi)</strong><br/>• Injecting malicious commands via forms to steal/destroy data or run OS commands.<br/>• <b>Inband Attacks:</b> Direct channel; sensitive data is displayed openly on the webpage.<br/>• <b>Inferential Attack:</b> "Blind" attacks that infer answers by observing system behavior (e.g., delays) without direct output.',
        imageUrl: 'https://images.unsplash.com/photo-1526374865314-756eb950dc5e?auto=format&fit=crop&q=80&w=800'
      },
      {
        icon: 'ShieldCheck',
        th: '<strong class="text-sky-300">3. การควบคุมการเข้าถึงฐานข้อมูล (Access Control)</strong><br/>• <b>Cascading Authorizations:</b> การส่งต่อสิทธิ์จากระบบหนึ่งไปยังผู้ใช้อีกคนหนึ่ง<br/>• <b>RBAC (Role-Based Access Control):</b> กำหนดสิทธิ์การอ่านเขียนตามหน้าบทบาทของพนักงาน<br/>• <b>Database Encryption:</b> การเข้ารหัสข้อมูลที่เก็บในระดับฐานข้อมูล เพื่อกันถูกดึงข้อมูลหลังบ้านไปใช้',
        en: '<strong class="text-sky-300">3. Database Access Control</strong><br/>• <b>Cascading Authorizations:</b> Passing connection or access rights from one system/user to another.<br/>• <b>RBAC (Role-Based Access Control):</b> Granting access based strictly on users\' roles.<br/>• <b>Database Encryption:</b> Encrypting data at the storage level to safeguard against backend breaches.'
      },
      {
        icon: 'Cloud',
        th: '<strong class="text-sky-300">4. ความปลอดภัยบนระบบคลาวด์ (Cloud Security)</strong><br/>• <b>ความเสี่ยงหลัก:</b> (อ้างอิง CSA) ได้แก่ ข้อมูลรั่วไหล หรือการจัดการสิทธิ์เข้าถึงที่หละหลวม<br/>• <b>SecaaS (Security as a Service):</b> บริการความปลอดภัยผ่านคลาวด์ เช่น ตรวจจับการบุกรุกรุก<br/>• <b>Data Protection:</b> ต้องคุ้มครองข้อมูล 2 ส่วน คือตอนเก็บอยู่เฉยๆ (At rest) และตอนถูกส่งผ่านเครือข่าย (In transit)',
        en: '<strong class="text-sky-300">4. Cloud Security</strong><br/>• <b>Top Threats:</b> (Per CSA guidelines) Data breaches and mismanaged account privileges.<br/>• <b>SecaaS (Security as a Service):</b> Cloud-based security solutions (e.g., IDS).<br/>• <b>Data Protection in the Cloud:</b> Safeguarding data both while stored on disks (At rest) and while moving over networks (In transit).'
      }
    ]
  }
];
