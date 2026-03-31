# INT308 Security II - ชุดข้อสอบปรนัย 100 ข้อ

รูปแบบ:
- ทั้งหมด 100 ข้อ
- ข้อละ 5 ตัวเลือก
- เลือกคำตอบที่ถูกต้องที่สุดเพียง 1 ตัวเลือก
- สัดส่วนโดยประมาณ: ความจำพื้นฐาน 60% / วิเคราะห์ 40%
- แบ่งเป็น 8 บท

สัญลักษณ์:
- `[M]` = เน้นความจำ/ความเข้าใจพื้นฐาน
- `[A]` = เน้นการคิดวิเคราะห์/ประยุกต์

---

## บทที่ 1 Security Overview และ Risk Basics (ข้อ 1-12)

**1. [M]** ข้อใดอธิบาย CIA Triad ได้ถูกต้องที่สุด  
A) Confidentiality, Identification, Authorization  
B) Confidentiality, Integrity, Availability  
C) Control, Integrity, Auditability  
D) Cryptography, Inspection, Authentication  
E) Confidentiality, Isolation, Accountability  

**2. [M]** หากแฮกเกอร์แก้ไขยอดเงินในฐานข้อมูลจาก 1,000 เป็น 10,000 ประเด็น CIA ที่ถูกละเมิดโดยตรงที่สุดคือข้อใด  
A) Confidentiality  
B) Availability  
C) Integrity  
D) Accountability  
E) Privacy  

**3. [M]** การโจมตีแบบ DoS มุ่งกระทบเป้าหมายด้านใดมากที่สุด  
A) Confidentiality  
B) Availability  
C) Integrity  
D) Authentication  
E) Non-repudiation  

**4. [M]** ข้อใดเป็นตัวอย่างของ insider threat ชัดเจนที่สุด  
A) บอทเน็ตจากต่างประเทศยิงทราฟฟิกเข้าเว็บ  
B) พนักงานคัดลอกฐานข้อมูลลูกค้าออกไปขาย  
C) ฟ้าผ่าทำให้ดาต้าเซ็นเตอร์ไฟดับ  
D) ผู้ใช้ลืมรหัสผ่านของตนเอง  
E) สายสัญญาณอินเทอร์เน็ตขาด  

**5. [M]** Risk assessment ที่ดีควรเริ่มจากสิ่งใดก่อน  
A) ซื้ออุปกรณ์ป้องกันที่แพงที่สุด  
B) ติดตั้ง firewall ให้ทุกระบบเหมือนกัน  
C) ระบุ asset, threat, likelihood และ impact  
D) เขียนนโยบายโดยไม่ต้องดูระบบจริง  
E) ใช้ checklist เดิมของปีก่อนทั้งหมด  

**6. [M]** ข้อใดอธิบายความต่างระหว่าง worm และ virus ได้ถูกต้องที่สุด  
A) Worm ต้องอาศัยคนช่วยแพร่, virus ไม่ต้อง  
B) Virus แพร่ตัวเองได้เสมอ, worm ทำไม่ได้  
C) Worm แพร่ตัวเองได้โดยไม่ต้องพึ่งผู้ใช้มากนัก  
D) Worm โจมตีแต่ Linux, virus โจมตีแต่ Windows  
E) ทั้งสองอย่างไม่ต่างกันในเชิงแนวคิด  

**7. [A]** ระบบธนาคารออนไลน์กับเว็บไซต์เมนูอาหารมีโอกาสถูกโจมตีพอ ๆ กัน แต่ผลกระทบหากถูกแก้ไขข้อมูลต่างกันมาก ข้อสรุปใดถูกต้องที่สุด  
A) ควรใช้มาตรการเดียวกันเพราะเป็นเว็บเหมือนกัน  
B) ระบบธนาคารควรมี control เข้มกว่าตาม impact ที่สูงกว่า  
C) เว็บเมนูอาหารควรมีมาตรการสูงกว่าเพราะมีผู้ใช้มากกว่า  
D) ทั้งสองระบบไม่จำเป็นต้องประเมินความเสี่ยง  
E) ใช้ antivirus ก็เพียงพอกับทั้งสองระบบ  

**8. [A]** หากองค์กรมีงบจำกัดและพบว่า asset สำคัญที่สุดคือฐานข้อมูลลูกค้า แนวทางใดสอดคล้องกับ risk-based security มากที่สุด  
A) ลงทุนกระจายงบเท่ากันทุกระบบ  
B) ลงทุนที่ระบบตกแต่งหน้าเว็บก่อนเพราะผู้ใช้เห็นชัด  
C) จัดลำดับป้องกันฐานข้อมูลและระบบที่เชื่อมต่อฐานข้อมูลก่อน  
D) งดทำ risk assessment เพราะเสียเวลา  
E) ปิดระบบทั้งหมดชั่วคราวทุกวัน  

**9. [M]** Security policy มีบทบาทหลักอย่างไร  
A) ใช้แทน firewall  
B) เป็นเอกสารกำหนดกฎ สิทธิ์ และแนวปฏิบัติด้านความปลอดภัย  
C) ใช้เข้ารหัสข้อมูลแทน AES  
D) ใช้ตรวจจับ SQL injection แบบอัตโนมัติ  
E) ใช้สำรองข้อมูลเมื่อเกิดภัยพิบัติเท่านั้น  

**10. [A]** องค์กรหนึ่งลงทุนซื้อ IDS แต่ไม่เคยอบรมพนักงานเรื่อง phishing เลย ข้อใดวิเคราะห์ได้เหมาะสมที่สุด  
A) เพียงพอแล้วเพราะ IDS จับได้ทุกอย่าง  
B) ยังมีช่องโหว่ด้านคน เพราะ security control ควรครอบคลุม people, process, technology  
C) ไม่เป็นปัญหาเพราะ phishing เป็นเรื่องของอีเมลเท่านั้น  
D) ควรยกเลิก IDS ทันที  
E) การอบรมไม่เกี่ยวกับ security policy  

**11. [M]** ข้อใดเป็นมาตรการที่ช่วยลดความเสียหายจาก DDoS ได้เหมาะสมที่สุด  
A) ใช้ Caesar cipher เข้ารหัสแพ็กเกต  
B) มีหลายเซิร์ฟเวอร์และกระจายโหลด  
C) ปิดบัญชีพนักงานทุกคน  
D) ใช้ password ยาวขึ้นเท่านั้น  
E) เปลี่ยนชื่อโดเมนทุกวัน  

**12. [A]** หากบริษัทเก็บข้อมูลลับเชิงกลยุทธ์แบบ air-gapped เหตุผลที่สอดคล้องที่สุดคือข้อใด  
A) เพื่อให้ค้นหาข้อมูลเร็วขึ้น  
B) เพื่อลดความเสี่ยงจากการบุกรุกผ่านเครือข่าย  
C) เพื่อแทนที่การเข้ารหัสทุกชนิด  
D) เพื่อให้ไม่ต้องมี policy  
E) เพื่อให้ backup ทำได้ง่ายขึ้นเสมอ  

---

## บทที่ 2 Cryptography Fundamentals และ Classical Ciphers (ข้อ 13-24)

**13. [M]** Plaintext หมายถึงข้อใด  
A) กุญแจลับ  
B) ข้อความต้นฉบับก่อนเข้ารหัส  
C) ข้อความหลังเข้ารหัส  
D) อัลกอริทึมถอดรหัส  
E) ตาราง S-box  

**14. [M]** Cryptanalysis คืออะไร  
A) การออกแบบ cipher ใหม่  
B) การบริหารกุญแจ  
C) การพยายามวิเคราะห์หรือถอดรหัสโดยไม่ทราบกุญแจ  
D) การใช้ hash เก็บรหัสผ่าน  
E) การซ่อนข้อมูลในรูปภาพ  

**15. [M]** Code ต่างจาก cipher อย่างไร  
A) Code ทำงานระดับตัวอักษร ส่วน cipher ทำงานระดับคำ  
B) Cipher ทำงานด้วยกุญแจและอัลกอริทึม ส่วน code มักแทนคำ/วลีด้วยอีกคำหนึ่ง  
C) Code ปลอดภัยกว่า cipher เสมอ  
D) Cipher ไม่ต้องใช้กุญแจ  
E) ทั้งสองเหมือนกันทุกประการ  

**16. [M]** ข้อใดเป็นจุดอ่อนหลักของ symmetric encryption  
A) เข้ารหัสช้าเกินไปเสมอ  
B) ใช้กับข้อมูลจำนวนมากไม่ได้  
C) ปัญหาการแจกจ่ายกุญแจร่วมกัน  
D) ไม่สามารถถอดรหัสได้  
E) ใช้กับไฟล์ไม่ได้  

**17. [M]** Brute force attack กับ symmetric cipher คืออะไร  
A) พยายามเดาค่า plaintext จากความถี่ภาษาเพียงอย่างเดียว  
B) ลองทุกคีย์ที่เป็นไปได้จนเจอคีย์ที่ถูกต้อง  
C) ใช้ลายเซ็นดิจิทัลปลอม  
D) เปลี่ยน ciphertext ให้ระบบล่ม  
E) อาศัย certificate ปลอม  

**18. [M]** Caesar cipher เป็นตัวอย่างของอะไร  
A) Transposition cipher  
B) Monoalphabetic substitution แบบเลื่อนอักษรคงที่  
C) Stream cipher  
D) Public-key cipher  
E) Hash function  

**19. [M]** เหตุใด monoalphabetic substitution จึงยังถูกโจมตีได้  
A) เพราะใช้ XOR ตรง ๆ  
B) เพราะไม่มี key  
C) เพราะความถี่ของตัวอักษรในภาษาเดิมยังมีร่องรอยให้วิเคราะห์  
D) เพราะ block size สั้นเกินไป  
E) เพราะต้องใช้ certificate  

**20. [M]** One-Time Pad จะปลอดภัยเชิงทฤษฎีก็ต่อเมื่อข้อใดเป็นจริง  
A) ใช้กุญแจสั้นกว่าข้อความ  
B) ใช้กุญแจเดิมซ้ำได้ถ้าปกปิดดี  
C) กุญแจสุ่มจริง ยาวเท่าข้อความ และใช้ครั้งเดียว  
D) ใช้เฉพาะกับตัวอักษร A-Z  
E) ต้องพึ่ง CA  

**21. [A]** ผู้โจมตีพบว่า ciphertext ยังคงความถี่ตัวอักษรใกล้กับภาษาอังกฤษเดิมมากที่สุด ข้อสันนิษฐานใดสมเหตุสมผลที่สุด  
A) อาจเป็น monoalphabetic substitution  
B) ต้องเป็น one-time pad  
C) ต้องเป็น AES-CBC  
D) ต้องเป็น RSA  
E) ต้องเป็น MAC  

**22. [A]** หากใช้ Vigenere cipher ด้วย keyword สั้นมากซ้ำ ๆ จุดอ่อนหลักคืออะไร  
A) ไม่มีการใช้ key  
B) รูปแบบการซ้ำของกุญแจอาจถูกวิเคราะห์เพื่อหาช่วงคีย์ได้  
C) เข้ารหัสได้ช้ากว่า RSA มาก  
D) ใช้ได้เฉพาะตัวเลข  
E) ไม่สามารถถอดรหัสได้แม้มี key  

**23. [A]** ข้อความถูกเข้ารหัสด้วย transposition cipher เพียงอย่างเดียว ผู้โจมตีคาดหวังใช้ประโยชน์จากสิ่งใดได้มากที่สุด  
A) ความยาวคีย์ RSA  
B) ความถี่ตัวอักษรที่ยังใกล้เคียงเดิม  
C) การที่ plaintext ถูก XOR กับ IV  
D) ตาราง certificate revocation  
E) ค่า hash 256 บิต  

**24. [A]** หากออกแบบ product cipher โดยผสม substitution และ transposition หลายรอบ เป้าหมายเชิงแนวคิดใกล้กับข้อใดที่สุด  
A) ลดผลของ key distribution  
B) สร้าง confusion และ diffusion ให้มากขึ้น  
C) ทำให้ไม่ต้องใช้ key  
D) ทำให้ข้อความสั้นลง  
E) ใช้แทน digital signature  

---

## บทที่ 3 Hash, Block Cipher, DES, 3DES, Modes และ RC4 (ข้อ 25-38)

**25. [M]** ฟังก์ชัน hash ที่ดีควรมีคุณสมบัติใด  
A) ถอดกลับ plaintext ได้ง่าย  
B) ให้ผลลัพธ์ยาวไม่คงที่  
C) เปลี่ยน input เล็กน้อย ผลลัพธ์ควรเปลี่ยนมาก  
D) ต้องใช้กุญแจลับเสมอ  
E) ต้องเข้ารหัสได้เร็วกว่า AES เท่านั้น  

**26. [M]** ข้อใดอธิบาย birthday attack ได้ถูกต้องที่สุด  
A) โจมตีด้วยการเดาวันเกิดของผู้ใช้  
B) การหาคู่ข้อมูลสองชุดที่มี hash ชนกันทำได้ง่ายกว่าการเดา preimage เต็มรูปแบบ  
C) เป็นการโจมตีเฉพาะ RSA  
D) ใช้กับ ECB เท่านั้น  
E) ต้องอาศัย insider threat เสมอ  

**27. [M]** DES มี block size และ key size เท่าใด  
A) 56 บิต และ 64 บิต  
B) 64 บิต และ 56 บิต  
C) 128 บิต และ 56 บิต  
D) 64 บิต และ 128 บิต  
E) 128 บิต และ 128 บิต  

**28. [M]** Feistel structure มีข้อดีสำคัญอะไร  
A) ใช้เฉพาะกับ public-key algorithm  
B) ถอดรหัสได้ด้วยโครงสร้างคล้ายเข้ารหัสโดยกลับลำดับ subkey  
C) ไม่ต้องมี round key  
D) ไม่ต้องใช้ permutation  
E) ไม่มีการ XOR  

**29. [M]** ข้อใดคือเหตุผลหลักที่ DES ไม่เพียงพอสำหรับการใช้งานสมัยใหม่  
A) ไม่มี S-box  
B) key สั้นเกินไปจน brute force ได้มากขึ้น  
C) ใช้ block size 1024 บิต  
D) เป็น stream cipher  
E) ถอดรหัสไม่ได้  

**30. [M]** Double DES ไม่ได้รับความนิยมเพราะเหตุใด  
A) ใช้ public key สองดอก  
B) ถูกลดความปลอดภัยด้วย meet-in-the-middle attack  
C) ไม่มี IV  
D) ช้ากว่า 3DES เพียงอย่างเดียว  
E) ใช้ได้เฉพาะภาพ  

**31. [M]** ใน 3DES แบบ EDE ข้อใดถูกต้อง  
A) Encrypt-Decrypt-Encrypt  
B) Encrypt-Encrypt-Decrypt  
C) Decrypt-Encrypt-Decrypt  
D) Encrypt-Hash-Encrypt  
E) XOR-XOR-XOR  

**32. [M]** โหมด ECB มีจุดอ่อนสำคัญอย่างไร  
A) ใช้ random access ไม่ได้  
B) plaintext block ที่เหมือนกันให้ ciphertext ต่างกันเสมอ  
C) plaintext block ที่เหมือนกันให้ ciphertext เหมือนกัน จึงเผย pattern  
D) ต้องมี TGT  
E) ต้องใช้ public key authority  

**33. [M]** CBC ต้องมีองค์ประกอบใดเพิ่มจากการเข้ารหัส block แยกอิสระ  
A) CA  
B) CRL  
C) IV  
D) MAC address  
E) OTP  

**34. [M]** โหมดใดเหมาะกับงานที่ต้องการประมวลผลแบบขนานและ random access ได้ดี  
A) ECB เท่านั้น  
B) CBC  
C) CFB  
D) CTR  
E) OFB  

**35. [M]** ข้อใดเป็นหลักการสำคัญของ stream cipher  
A) เข้ารหัสเป็น block 128 บิตเสมอ  
B) XOR plaintext กับ keystream  
C) ใช้ private key ของผู้ส่ง  
D) ต้องมี certificate  
E) ใช้ transpose ตัวอักษรเท่านั้น  

**36. [A]** หากผู้ดูแลระบบเลือก ECB เพื่อเข้ารหัสฐานข้อมูลบัตรประชาชนที่มีข้อมูลรูปแบบซ้ำ ๆ จำนวนมาก ความเสี่ยงเด่นที่สุดคืออะไร  
A) คีย์จะสั้นลงอัตโนมัติ  
B) ผู้โจมตีอาจมองเห็นรูปแบบข้อมูลซ้ำจาก ciphertext  
C) ระบบจะถอดรหัสไม่ได้  
D) จะเกิด chosen ciphertext attack กับ RSA  
E) จะทำให้ hash collision เพิ่มขึ้น  

**37. [A]** ทีมพัฒนานำ OFB ไปใช้กับอุปกรณ์จำนวนมากแต่เผลอใช้ key+IV ซ้ำกันในหลายข้อความ ผลกระทบหลักคืออะไร  
A) ไม่มีผลเพราะ OFB แก้การใช้ซ้ำได้เอง  
B) ทำให้เกิดการ reuse keystream ซึ่งเปิดโอกาสให้วิเคราะห์ข้อมูลได้  
C) ทำให้ block size ลดลงเหลือ 64 บิต  
D) ทำให้เกิด certificate revocation  
E) ทำให้ message มี non-repudiation  

**38. [A]** RC4 ถูกเลิกแนะนำในงานสมัยใหม่ เหตุผลที่สอดคล้องที่สุดคือข้อใด  
A) เพราะเป็น public-key algorithm  
B) เพราะใช้กับ software ไม่ได้  
C) เพราะมีปัญหาด้าน keystream/การจัดการ key และมีจุดอ่อนเชิงปฏิบัติหลายกรณี  
D) เพราะไม่มีความเร็ว  
E) เพราะต้องใช้ block size 256 ไบต์เสมอ  

---

## บทที่ 4 AES (ข้อ 39-48)

**39. [M]** AES ถูกเลือกให้มาแทนมาตรฐานใด  
A) RSA  
B) DES  
C) PGP  
D) Kerberos  
E) SHA-1  

**40. [M]** AES มี block size เท่าใด  
A) 56 บิต  
B) 64 บิต  
C) 96 บิต  
D) 128 บิต  
E) 256 บิต  

**41. [M]** AES รองรับ key size ใดบ้าง  
A) 40, 56, 64 บิต  
B) 64, 128, 256 บิต  
C) 128, 192, 256 บิต  
D) 256, 384, 512 บิต  
E) 56, 112, 168 บิต  

**42. [M]** ข้อใดถูกต้องเกี่ยวกับโครงสร้างของ AES  
A) เป็น Feistel cipher แบบตรงไปตรงมา  
B) เป็น substitution-permutation network  
C) เป็น stream cipher  
D) ไม่มีการใช้ round key  
E) ใช้แต่ transposition อย่างเดียว  

**43. [M]** ขั้นตอนใดใน AES ทำหน้าที่แทนที่ไบต์ด้วยค่าจาก S-box  
A) ShiftRows  
B) MixColumns  
C) AddRoundKey  
D) SubBytes  
E) RotateWords  

**44. [M]** ขั้นตอนใดใน AES เน้นการกระจายข้อมูลภายในคอลัมน์  
A) SubBytes  
B) ShiftRows  
C) MixColumns  
D) AddRoundKey  
E) Initial Permutation  

**45. [M]** รอบสุดท้ายของ AES แตกต่างจากรอบปกติอย่างไร  
A) ไม่มี SubBytes  
B) ไม่มี ShiftRows  
C) ไม่มี MixColumns  
D) ไม่มี AddRoundKey  
E) ไม่มี key expansion  

**46. [A]** หากอาจารย์ถามว่าใน AES ขั้นตอนใดช่วยเพิ่ม non-linearity มากที่สุด คำตอบที่เหมาะสมที่สุดคือข้อใด  
A) AddRoundKey  
B) SubBytes  
C) ShiftRows  
D) MixColumns  
E) Key length  

**47. [A]** หากนักศึกษาสลับลำดับเป็น AddRoundKey ก่อน MixColumns ในทุก round โดยอ้างว่า "แค่สลับที่กัน" ข้อวิเคราะห์ที่ถูกต้องที่สุดคืออะไร  
A) ไม่มีผล เพราะทุกขั้นเป็น XOR  
B) ทำให้ได้ AES เดิมทุกประการ  
C) เป็นการเปลี่ยนโครงสร้างอัลกอริทึมและความปลอดภัย ไม่ใช่ AES มาตรฐาน  
D) ทำให้ key size เพิ่มอัตโนมัติ  
E) ทำให้กลายเป็น RSA  

**48. [A]** เหตุผลที่ AES กลายเป็น gold standard ของ symmetric encryption ปัจจุบันคือข้อใดเหมาะสมที่สุด  
A) เพราะง่ายต่อการท่องจำเท่านั้น  
B) เพราะทั้งแข็งแรงและมีประสิทธิภาพดีใน software/hardware  
C) เพราะไม่ต้องใช้ key management  
D) เพราะใช้ทำ digital signature ได้โดยตรง  
E) เพราะ block size ไม่จำกัด  

---

## บทที่ 5 Public-Key Cryptography และ RSA (ข้อ 49-60)

**49. [M]** Public-key cryptography ถูกพัฒนาขึ้นมาเพื่อแก้ปัญหาหลักใดของ symmetric cryptography  
A) ความเร็วสูงเกินไป  
B) การแจกจ่ายกุญแจ  
C) การใช้หน่วยความจำน้อยเกินไป  
D) การคำนวณ hash ไม่ได้  
E) การใช้ไฟฟ้ามากเกินไป  

**50. [M]** ในระบบอสมมาตร หากต้องการให้ "เฉพาะผู้รับ" อ่านข้อความได้ทั่วไปควรทำอย่างไร  
A) เข้ารหัสด้วย private key ของผู้รับ  
B) เข้ารหัสด้วย public key ของผู้รับ  
C) เข้ารหัสด้วย public key ของผู้ส่ง  
D) เข้ารหัสด้วย hash ของข้อความ  
E) เข้ารหัสด้วย MAC  

**51. [M]** หากต้องการสร้าง digital signature ด้วย RSA ผู้ส่งควรใช้อะไร  
A) Public key ของผู้ส่ง  
B) Public key ของผู้รับ  
C) Private key ของผู้ส่ง  
D) Session key ของผู้รับ  
E) IV ของ CBC  

**52. [M]** ความปลอดภัยของ RSA อาศัยความยากของปัญหาใด  
A) Discrete logarithm  
B) Factoring large integers  
C) Collision search  
D) Meet-in-the-middle  
E) Traffic analysis  

**53. [M]** ขั้นตอนใดเป็นส่วนหนึ่งของการสร้างกุญแจ RSA  
A) เลือก prime สองตัว p และ q  
B) สร้าง IV แบบสุ่ม  
C) สร้าง TGT  
D) คำนวณ hash ของอีเมล  
E) สร้าง CTR counter  

**54. [M]** ใน RSA ค่า public key คือข้อใด  
A) {d, p}  
B) {e, n}  
C) {p, q}  
D) {phi(n), d}  
E) {M, C}  

**55. [M]** เหตุใดในการใช้งานจริงมักไม่ใช้ RSA เข้ารหัสข้อมูลปริมาณมากโดยตรง  
A) เพราะ RSA ถอดรหัสไม่ได้  
B) เพราะ RSA ไม่มีความปลอดภัย  
C) เพราะ RSA ช้ากว่า symmetric encryption มาก  
D) เพราะ RSA ใช้กับข้อความสั้นไม่ได้  
E) เพราะ RSA ไม่มี public key  

**56. [M]** แนวทางที่ใช้จริงในระบบสื่อสารสมัยใหม่มักเป็นแบบใด  
A) ใช้ RSA เข้ารหัสทุกบิตของข้อมูลจริง  
B) ใช้ Caesar แลกคีย์ แล้วใช้ DES เข้ารหัสข้อมูล  
C) ใช้ public key แลก session key แล้วใช้ symmetric key เข้ารหัสข้อมูลจริง  
D) ใช้ hash แทนการเข้ารหัส  
E) ใช้ transposition ล้วน  

**57. [A]** หากผู้โจมตีส่ง ciphertext ที่ออกแบบมาเป็นพิเศษไปให้ระบบถอด แล้วสังเกตผลลัพธ์เพื่อนำไปวิเคราะห์กุญแจ การโจมตีนี้ใกล้เคียงข้อใด  
A) Brute force  
B) Chosen ciphertext attack  
C) Frequency analysis  
D) Birthday attack  
E) Replay attack  

**58. [A]** ทำไม RSA จึงควรใช้ร่วมกับ padding ที่ปลอดภัย เช่น OAEP  
A) เพื่อเพิ่มขนาด block ของ AES  
B) เพื่อช่วยป้องกันการโจมตีเชิงโครงสร้างรวมถึง chosen ciphertext บางรูปแบบ  
C) เพื่อให้ใช้แทน certificate ได้  
D) เพื่อให้ private key เปิดเผยได้  
E) เพื่อให้เข้ารหัสเร็วกว่า DES เสมอ  

**59. [A]** หากมีผู้บอกว่า "ถ้าเซ็นข้อความด้วย public key แล้วใครก็ตรวจด้วย private key ได้" ข้อใดคือการโต้แย้งที่ถูกต้องที่สุด  
A) ถูกต้อง เพราะ public key ต้องเป็นความลับ  
B) ผิด เพราะ signature ต้องสร้างด้วย private key และตรวจด้วย public key  
C) ถูกต้องเมื่อใช้ AES  
D) ผิดเพราะ RSA ใช้เซ็นไม่ได้  
E) ไม่มีคำตอบถูก  

**60. [A]** หากบริษัทต้องการทั้ง confidentiality และ non-repudiation สำหรับเอกสารสำคัญ วิธีที่เหมาะสมที่สุดคือข้อใด  
A) Hash อย่างเดียว  
B) MAC อย่างเดียว  
C) เข้ารหัสด้วย public key ของผู้รับและเซ็นด้วย private key ของผู้ส่ง  
D) ใช้ ECB อย่างเดียว  
E) ใช้ Caesar cipher สองรอบ  

---

## บทที่ 6 Key Management, Diffie-Hellman และ MAC (ข้อ 61-72)

**61. [M]** วิธีแจกจ่าย public key แบบใดเสี่ยงต่อการถูกปลอมแปลงมากที่สุด  
A) Public-key certificate  
B) Public-key authority  
C) Public directory  
D) Public announcement  
E) CA hierarchy  

**62. [M]** Public-key certificate มีหน้าที่หลักอะไร  
A) เก็บ session key ของทุกผู้ใช้  
B) ผูกตัวตนกับ public key และมีลายเซ็นจาก CA  
C) ใช้แทน hash function  
D) ใช้เข้ารหัส database โดยตรง  
E) สร้าง CTR counter  

**63. [M]** ข้อใดเป็นข้อมูลที่มักอยู่ใน certificate  
A) Password plaintext ของเจ้าของ  
B) Subject, issuer, validity period, public key  
C) เฉพาะ serial number อย่างเดียว  
D) private key ของ CA  
E) ค่า OTP รายวัน  

**64. [M]** จุดประสงค์หลักของ Diffie-Hellman key exchange คืออะไร  
A) เซ็นอีเมล  
B) แลก shared secret ผ่านช่องทางไม่ปลอดภัย  
C) สร้าง hash ให้ข้อความ  
D) แทนที่ database access control  
E) ยกเลิก certificate  

**65. [M]** ความปลอดภัยของ Diffie-Hellman อิงกับปัญหาใด  
A) Integer factorization  
B) Discrete logarithm  
C) Collision resistance  
D) SQL parsing  
E) Exhaustive IV search  

**66. [M]** ข้อใดคือข้อจำกัดสำคัญของ Diffie-Hellman แบบพื้นฐาน  
A) ใช้สร้าง shared key ไม่ได้  
B) ให้ authentication ในตัวสมบูรณ์แล้ว  
C) เสี่ยงต่อ man-in-the-middle ถ้าไม่มีการยืนยันตัวตนเพิ่ม  
D) ใช้กับเลขจำนวนเฉพาะไม่ได้  
E) ช้ากว่า RSA จนใช้ไม่ได้จริง  

**67. [M]** MAC (Message Authentication Code) ให้คุณสมบัติใดเด่นที่สุด  
A) Confidentiality และ anonymity  
B) Integrity และการยืนยันว่าผู้ส่งรู้ secret key ร่วม  
C) Non-repudiation อย่างสมบูรณ์  
D) Certificate issuance  
E) Key exchange  

**68. [M]** เหตุใด MAC จึงไม่เทียบเท่า digital signature  
A) เพราะ MAC ไม่มีความยาวคงที่  
B) เพราะ MAC ใช้ secret key ร่วมกัน ทำให้ทั้งผู้ส่งและผู้รับสร้างค่าได้  
C) เพราะ MAC ใช้ได้เฉพาะภาพ  
D) เพราะ MAC ต้องอาศัย public key ของ CA  
E) เพราะ MAC เข้ารหัสไม่ได้  

**69. [A]** หาก Alice และ Bob ต้องการยืนยันตัวตนกันด้วย Diffie-Hellman แบบปลอดภัยขึ้น ควรเสริมสิ่งใดมากที่สุด  
A) ใช้ ECB  
B) ใช้ certificate หรือ digital signature ยืนยันคู่สนทนา  
C) เปลี่ยนจาก prime เป็นเลขคู่  
D) ลดขนาดคีย์ให้เล็กลง  
E) ใช้ CRL แทนทุกอย่าง  

**70. [A]** ผู้พัฒนาระบบประกาศว่า "เราใช้ MAC แล้ว จึงพิสูจน์ต่อศาลได้แน่นอนว่าอีกฝ่ายเป็นคนส่งข้อความ" ข้อวิเคราะห์ใดถูกต้องที่สุด  
A) ถูกต้อง เพราะ MAC ให้ non-repudiation  
B) ผิด เพราะคู่สื่อสารที่มี secret key ร่วมกันต่างก็สร้าง MAC เดียวกันได้  
C) ถูกต้องถ้า MAC ยาวเกิน 128 บิต  
D) ถูกต้องเมื่อใช้ CBC-MAC เท่านั้น  
E) ผิดเพราะ MAC ใช้ตรวจ integrity ไม่ได้  

**71. [A]** หากองค์กรใช้ public directory โดยไม่มีการป้องกันการแก้ไขข้อมูล ผู้โจมตีทำอะไรได้สมเหตุสมผลที่สุด  
A) ปลอม public key ของเหยื่อให้คนอื่นใช้  
B) บังคับให้ AES กลายเป็น DES  
C) ยกเลิก certificate ของ CA ได้ทันที  
D) ทำให้ hash collision หายไป  
E) สร้าง TGT อัตโนมัติ  

**72. [A]** ข้อใดอธิบาย hybrid key distribution ได้ถูกต้องที่สุด  
A) ใช้ symmetric key แจก public key  
B) ใช้ public-key mechanism เพื่อแลก secret key แล้วค่อยใช้ symmetric encryption กับข้อมูลจริง  
C) ใช้ hash อย่างเดียวแทนการแลกคีย์  
D) ใช้ MAC กับทุกข้อมูลแทนการเข้ารหัส  
E) ใช้ DH เพื่อเซ็นเอกสารโดยตรง  

---

## บทที่ 7 Authentication Applications, X.509, PGP และ S/MIME (ข้อ 73-86)

**73. [M]** Kerberos เป็นระบบ authentication ที่อาศัยแนวคิดใดเป็นหลัก  
A) Public-key certificates เป็นหลัก  
B) Symmetric key กับ trusted third party  
C) One-time pad  
D) Blockchain  
E) Steganography  

**74. [M]** ใน Kerberos หน่วยงานใดออก Ticket Granting Ticket (TGT) ให้ผู้ใช้  
A) TGS  
B) CA  
C) AS  
D) DBMS  
E) SMTP server  

**75. [M]** ผู้ใช้จะนำ TGT ไปใช้ทำอะไรต่อ  
A) ขอ service ticket จาก TGS  
B) ถอดรหัส private key ของ CA  
C) สร้าง CRL  
D) เปลี่ยนเป็น hash ของรหัสผ่าน  
E) เข้ารหัสอีเมลด้วย PGP ทันที  

**76. [M]** Realm ใน Kerberos หมายถึงอะไร  
A) ขนาดกุญแจ  
B) โดเมนการบริหาร/ขอบเขตการจัดการของระบบ Kerberos  
C) ค่า IV ของ session  
D) ใบรับรองหมดอายุ  
E) ตาราง role ของฐานข้อมูล  

**77. [M]** X.509 คือมาตรฐานของอะไร  
A) Stream cipher  
B) Certificate สำหรับ PKI  
C) Hash function  
D) MAC algorithm  
E) SQL access control  

**78. [M]** หาก private key ของเจ้าของ certificate รั่ว แม้ certificate ยังไม่หมดอายุ ควรอ้างอิงกลไกใด  
A) CTR  
B) CRL  
C) TGT  
D) P-box  
E) OTP  

**79. [M]** ข้อใดเป็นประโยชน์หลักของ PGP  
A) ใช้แทน database firewall  
B) ให้ความลับและการพิสูจน์ตัวตนสำหรับอีเมล  
C) ใช้จัดการ role ของผู้ใช้  
D) ใช้ป้องกัน DDoS โดยตรง  
E) ใช้แทน certificate authority  

**80. [M]** ใน PGP การรักษาความลับของข้อความเกิดขึ้นอย่างไรโดยทั่วไป  
A) เซ็นข้อความด้วย private key อย่างเดียว  
B) ใช้ symmetric key เข้ารหัสข้อความ และเข้ารหัส session key ด้วย public key ของผู้รับ  
C) ใช้ hash อย่างเดียว  
D) ใช้ MAC อย่างเดียว  
E) ใช้ transposition cipher  

**81. [M]** S/MIME โดยทั่วไปอาศัยโครงสร้างความน่าเชื่อถือแบบใด  
A) Web of trust เท่านั้น  
B) X.509 certificates  
C) Caesar key chain  
D) Air-gapped mailing  
E) GRANT/REVOKE  

**82. [A]** หากผู้โจมตีขโมย service ticket ของผู้ใช้ใน Kerberos ได้ แต่ไม่มีข้อมูลลับที่เกี่ยวข้อง ข้อวิเคราะห์ใดเหมาะสมที่สุด  
A) ระบบ Kerberos ไม่มีความเสี่ยงใดเลย  
B) ยังอาจเสี่ยงการนำ ticket ไปใช้ซ้ำได้ จึงต้องอาศัยอายุ ticket, timestamp และการป้องกัน replay  
C) ticket ใช้แทน private key ของผู้ใช้ได้ตลอดไป  
D) service ticket ใช้ยกเลิก CRL ได้  
E) ticket ไม่มีความเกี่ยวข้องกับ authentication  

**83. [A]** One-way, two-way, three-way authentication ใน X.509 ต่างกันหลัก ๆ ที่อะไร  
A) ขนาดของ certificate  
B) จำนวนข้อความที่แลกเปลี่ยนและระดับการยืนยันตัวตนของสองฝั่ง  
C) ชนิดของ hash เท่านั้น  
D) block size ของ AES  
E) จำนวน role ในระบบ  

**84. [A]** หากอีเมลต้องการทั้ง "เห็นข้อความเป็นตัวอักษรอ่านได้" และ "ตรวจสอบลายเซ็นได้" รูปแบบใดของ S/MIME สอดคล้องที่สุด  
A) Enveloped data  
B) Signed data  
C) Clear-signed data  
D) Signed and enveloped data  
E) Revoked data  

**85. [A]** ใน PGP เหตุใดจึงนิยมบีบอัดข้อมูลก่อนเข้ารหัส  
A) เพื่อทำให้ private key สั้นลง  
B) เพื่อลดขนาดข้อมูลและช่วยลดรูปแบบซ้ำบางส่วนก่อนส่ง  
C) เพื่อใช้แทน hash function  
D) เพื่อออก certificate ใหม่  
E) เพื่อป้องกัน SQL injection  

**86. [A]** หากองค์กรต้องการโครงสร้างที่อาศัย CA กลางและการออกใบรับรองมาตรฐานมากกว่า web-of-trust ระบบใดเหมาะกว่า  
A) PGP แบบดั้งเดิม  
B) S/MIME  
C) Caesar cipher  
D) Rail fence  
E) RC4  

---

## บทที่ 8 Database Security, RBAC และ Cloud Security (ข้อ 87-100)

**87. [M]** ภัยคุกคามสำคัญของ web application ที่มุ่งโจมตีฐานข้อมูลโดยใส่คำสั่งผ่านช่อง input คือข้อใด  
A) Buffer overflow  
B) SQL Injection  
C) DDoS  
D) ARP spoofing  
E) Birthday attack  

**88. [M]** ข้อใดเป็นแนวทางป้องกัน SQL Injection ที่ดีที่สุด  
A) ใช้ prepared statements / parameterized queries  
B) ซ่อนข้อความ error อย่างเดียว  
C) เปลี่ยนชื่อ table บ่อย ๆ  
D) ใช้ ECB เข้ารหัสฐานข้อมูล  
E) เพิ่ม RAM ให้เซิร์ฟเวอร์  

**89. [M]** SQL injection แบบใดที่ผู้โจมตีใช้ช่องทางเดียวกันทั้งส่ง payload และรับผลลัพธ์กลับ  
A) Inferential  
B) Blind  
C) Inband  
D) Out-of-band  
E) Role-based  

**90. [M]** หากโจมตีแบบ blind SQL injection ผู้โจมตีมักอาศัยสิ่งใด  
A) การอ่านข้อมูลตรง ๆ จากหน้าเว็บเสมอ  
B) การเดาข้อมูลจากพฤติกรรมหรือข้อความ error ของระบบ  
C) การใช้ CA ปลอม  
D) การใช้ TGT  
E) การคำนวณ discrete log  

**91. [M]** คำสั่งใดใช้ "ให้สิทธิ์" ในระบบฐานข้อมูล  
A) ASSIGN  
B) PERMIT  
C) GRANT  
D) ALLOW  
E) AUTHORIZE  

**92. [M]** ข้อใดคือแนวคิดหลักของ RBAC  
A) ให้สิทธิ์กับ user ทีละคนอย่างละเอียดเสมอ  
B) ให้สิทธิ์กับ role ก่อน แล้วจึงผูก user เข้ากับ role  
C) ใช้ public key แทน password  
D) ใช้ hash แทน access control  
E) ใช้ certificate เป็น role  

**93. [M]** เหตุใด database encryption จึงมักถูกเรียกว่า last line of defense  
A) เพราะทำให้ SQL เร็วที่สุด  
B) เพราะต่อให้ control อื่นพลาด ข้อมูลที่ถูกขโมยไปยังอาจอ่านไม่ได้หากไม่มี key  
C) เพราะใช้แทน authentication ได้หมด  
D) เพราะไม่ต้องบริหารกุญแจ  
E) เพราะ authorized user จะมองไม่เห็นข้อมูลเสมอ  

**94. [M]** ข้อใดเป็นข้อเสียสำคัญของ database encryption  
A) ไม่มีผลต่อ performance และ query เลย  
B) ทำให้ key management และการค้นหาข้อมูลซับซ้อนขึ้น  
C) ทำให้ SQL injection เป็นไปไม่ได้ 100%  
D) ทำให้ไม่ต้องมี RBAC  
E) ใช้ได้เฉพาะฐานข้อมูลขนาดเล็กกว่า 1 GB  

**95. [M]** ตามแนวคิด cloud computing ของ NIST ลักษณะใดสอดคล้องที่สุด  
A) ทรัพยากรถูกจัดสรรได้แบบ on-demand ผ่านเครือข่าย  
B) ผู้ใช้ต้องซื้อ hardware เองทั้งหมด  
C) ใช้ได้เฉพาะ private network ภายใน  
D) ห้ามแชร์ทรัพยากร  
E) ต้องใช้ symmetric key ทุกบริการ  

**96. [A]** เว็บแอปหนึ่งมีโค้ด `SELECT * FROM users WHERE username = '` + input + `'` โดยไม่ทำ parameterization ข้อใดเป็นความเสี่ยงตรงที่สุด  
A) ผู้ใช้เปลี่ยนสีหน้าเว็บได้  
B) ผู้โจมตีอาจ inject คำสั่ง SQL เพิ่มและเข้าถึงข้อมูลเกินสิทธิ์  
C) ระบบจะเกิด hash collision  
D) certificate ของเซิร์ฟเวอร์จะหมดอายุเร็วขึ้น  
E) Kerberos จะล้มเหลวทันที  

**97. [A]** องค์กรให้สิทธิ์ `SELECT, UPDATE, DELETE` กับบัญชีแอปทั้งหมดแม้บางบริการต้องอ่านอย่างเดียว ข้อวิเคราะห์ใดเหมาะสมที่สุด  
A) ถูกต้องเพราะลดความซับซ้อน  
B) ขัดกับหลัก least privilege และเพิ่มผลกระทบเมื่อบัญชีรั่ว  
C) ไม่เกี่ยวกับ security  
D) ช่วยป้องกัน SQL injection  
E) ทำให้ encryption แข็งแรงขึ้น  

**98. [A]** หากระบบใช้ RBAC ดีอยู่แล้ว แต่บัญชี DB user ของแอปยังมีสิทธิ์ระดับ admin ทั้งหมด ข้อสรุปใดถูกต้องที่สุด  
A) RBAC ชั้นแอปเพียงพอ ไม่ต้องสนใจสิทธิ์ใน DB  
B) ยังเสี่ยง เพราะ DB access control ต้องสอดคล้องกับ least privilege เช่นกัน  
C) สิทธิ์ใน DB ไม่มีผลถ้าใช้ HTTPS  
D) ปัญหานี้แก้ได้ด้วย ECB  
E) ควรเพิ่ม role ใน Kerberos แทน  

**99. [A]** บริษัทต้องเก็บข้อมูลบัตรประชาชนบน cloud และกังวลทั้งเรื่องผู้บุกรุกภายนอกกับผู้ดูแลระบบที่ไม่เกี่ยวข้อง แนวทางใดเหมาะสมที่สุด  
A) พึ่ง firewall อย่างเดียว  
B) ใช้ encryption, strong access control และ key management ที่แยกหน้าที่ชัดเจน  
C) ซ่อนชื่อไฟล์อย่างเดียว  
D) ใช้ RC4 เพื่อความเร็ว  
E) ใช้ public announcement แจก key  

**100. [A]** หากฐานข้อมูลถูกขโมยออกไปทั้งก้อน แต่คนร้ายไม่มี key ถอดข้อมูล ข้อใดสะท้อนประโยชน์ของ database encryption ได้ดีที่สุด  
A) ป้องกันไม่ให้ฐานข้อมูลถูกลบ  
B) ลดโอกาสที่ข้อมูลที่ถูกขโมยจะถูกอ่านได้ทันที  
C) ทำให้ SQL injection ย้อนหลังหายไป  
D) ทำให้ระบบ online ต่อเนื่องเสมอ  
E) ยืนยันตัวตนผู้ใช้แทน Kerberos ได้  

---

## เฉลย

1.B 2.C 3.B 4.B 5.C 6.C 7.B 8.C 9.B 10.B  
11.B 12.B 13.B 14.C 15.B 16.C 17.B 18.B 19.C 20.C  
21.A 22.B 23.B 24.B 25.C 26.B 27.B 28.B 29.B 30.B  
31.A 32.C 33.C 34.D 35.B 36.B 37.B 38.C 39.B 40.D  
41.C 42.B 43.D 44.C 45.C 46.B 47.C 48.B 49.B 50.B  
51.C 52.B 53.A 54.B 55.C 56.C 57.B 58.B 59.B 60.C  
61.D 62.B 63.B 64.B 65.B 66.C 67.B 68.B 69.B 70.B  
71.A 72.B 73.B 74.C 75.A 76.B 77.B 78.B 79.B 80.B  
81.B 82.B 83.B 84.C 85.B 86.B 87.B 88.A 89.C 90.B  
91.C 92.B 93.B 94.B 95.A 96.B 97.B 98.B 99.B 100.B

