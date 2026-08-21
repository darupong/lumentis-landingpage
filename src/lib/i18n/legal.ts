import type { Locale } from "./dictionaries";

export interface LegalSection {
  id?: string;
  title: string;
  content: string[];
  items?: string[];
}

export interface LegalDocument {
  title: string;
  subtitle?: string;
  lastUpdated: string;
  sections: LegalSection[];
  contactBox: {
    title: string;
    companyName: string;
    addressLabel: string;
    address: string;
    emailLabel: string;
    email: string;
    websiteLabel: string;
    website: string;
  };
}

export interface LegalDictionary {
  privacy: LegalDocument;
  terms: LegalDocument;
  pdpa: LegalDocument;
}

const en: LegalDictionary = {
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: August 21, 2026",
    sections: [
      {
        id: "intro",
        title: "1. Introduction",
        content: [
          "LUMENTIS (THAILAND) Co., Ltd. (\"Lumentis\", \"we\", \"our\", or \"us\") respects your privacy and is committed to protecting your personal data.",
          "This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website at lumentisth.com or interact with our creative technology services, tools, and digital experiences.",
        ],
      },
      {
        id: "collection",
        title: "2. Information We Collect",
        content: [
          "We collect information in two main ways: information you voluntarily provide directly to us, and technical data collected automatically when you browse our website.",
        ],
        items: [
          "Information provided directly: When you contact us via email, inquiry forms, or project discussions, we may collect your name, corporate email address, telephone number, organization name, job role, and project requirements.",
          "Automatically collected technical data: When you visit our website, our servers and analytical systems may automatically record your IP address, browser type, device information, operating system, pages visited, session duration, and referral source via cookies.",
        ],
      },
      {
        id: "use",
        title: "3. How We Use Your Information",
        content: [
          "We use the collected information for legitimate and transparent business purposes, including:",
        ],
        items: [
          "Responding promptly to project inquiries, proposals, and consultation requests.",
          "Delivering, maintaining, and improving our digital experiences and creative technology services.",
          "Analyzing website usage patterns and optimizing user interface performance.",
          "Sending periodic updates, case studies, and insights if you have subscribed or opted in.",
          "Complying with statutory obligations and protecting our legal rights under applicable Thai law.",
        ],
      },
      {
        id: "cookies",
        title: "4. Cookies & Tracking Technologies",
        content: [
          "We utilize essential and analytical cookies to provide smooth navigation, remember your preferences (such as theme and language selection), and understand audience engagement.",
          "You can configure your browser to reject all or some cookies. However, disabling certain cookies may affect the interactive functionality of our website.",
        ],
      },
      {
        id: "sharing",
        title: "5. Data Sharing & Disclosure",
        content: [
          "We do not sell, rent, or trade personal data. We only share information with trusted third parties under strict confidentiality terms:",
        ],
        items: [
          "Authorized service providers: Cloud hosting, security monitoring, analytics, and enterprise communication platforms that assist our operations.",
          "Legal and regulatory authorities: When compelled by court orders, lawful requests, or statutory obligations under the laws of Thailand.",
          "Business transfers: In the event of a merger, acquisition, or restructuring, subject to equivalent privacy safeguards.",
        ],
      },
      {
        id: "retention",
        title: "6. Data Retention",
        content: [
          "We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including satisfying any legal, accounting, or reporting requirements.",
          "Once data is no longer required, it is permanently deleted or irreversibly anonymized in accordance with our data retention schedule.",
        ],
      },
      {
        id: "rights",
        title: "7. Your Rights",
        content: [
          "Under applicable data protection legislation, you have rights concerning your personal information, including:",
        ],
        items: [
          "Right to access and request a copy of your personal data.",
          "Right to rectify inaccurate or incomplete records.",
          "Right to request erasure (\"right to be forgotten\") where retention is no longer justified.",
          "Right to restrict or object to certain processing activities.",
          "Right to withdraw consent at any time without affecting past lawful processing.",
        ],
      },
      {
        id: "pdpa",
        title: "8. Thailand PDPA Compliance",
        content: [
          "LUMENTIS (THAILAND) Co., Ltd. strictly adheres to Thailand's Personal Data Protection Act B.E. 2562 (2019) (PDPA).",
          "We maintain comprehensive technical and organizational measures to safeguard your personal data against unauthorized access, loss, or misuse.",
        ],
      },
      {
        id: "international",
        title: "9. International Data Transfers",
        content: [
          "Given our modern cloud infrastructure and global technology partnerships, personal data may be processed on secure servers located outside Thailand with equivalent security standards and contractual protections.",
        ],
      },
      {
        id: "changes",
        title: "10. Changes to This Policy",
        content: [
          "We may periodically revise this Privacy Policy. Any updates will be published on this page with an updated \"Last updated\" date. We recommend checking back regularly.",
        ],
      },
      {
        id: "contact",
        title: "11. Contact Us",
        content: [
          "If you have any questions or wish to exercise your data rights, please contact our team:",
        ],
      },
    ],
    contactBox: {
      title: "LUMENTIS (THAILAND) Co., Ltd.",
      companyName: "LUMENTIS (THAILAND) Co., Ltd.",
      addressLabel: "Address",
      address: "1055/1369, 50th Floor, State Tower, Si Lom Rd, Si Lom, Bang Rak, Bangkok 10500, Thailand",
      emailLabel: "Email",
      email: "contact@lumentisth.com",
      websiteLabel: "Website",
      website: "https://lumentisth.com",
    },
  },
  terms: {
    title: "Terms of Service",
    lastUpdated: "Last updated: August 21, 2026",
    sections: [
      {
        id: "acceptance",
        title: "1. Acceptance of Terms",
        content: [
          "By accessing or using the website lumentisth.com (the \"Site\") operated by LUMENTIS (THAILAND) Co., Ltd. (\"Lumentis\", \"we\", \"our\", or \"us\"), you agree to comply with and be bound by these Terms of Service.",
          "If you do not agree to these terms, you must refrain from using the Site and our digital services.",
        ],
      },
      {
        id: "services",
        title: "2. Description of Services",
        content: [
          "Lumentis is a creative technology company based in Bangkok, Thailand. We design and develop immersive experiences (AR/VR/XR), AI-driven applications, interactive websites, creative campaign tools, and emerging-technology prototypes.",
          "Content on this Site is provided for general informational, showcase, and portfolio purposes.",
        ],
      },
      {
        id: "ip",
        title: "3. Intellectual Property Rights",
        content: [
          "All materials on this Site—including graphics, logos, source code, artwork, audio-visual works, interactive designs, and trademarks—are the proprietary intellectual property of LUMENTIS (THAILAND) Co., Ltd. or its licensors.",
          "No content may be reproduced, modified, distributed, or repurposed without our explicit prior written consent.",
        ],
      },
      {
        id: "conduct",
        title: "4. User Conduct",
        content: [
          "When utilizing our Site, you agree not to:",
        ],
        items: [
          "Engage in any activity that damages, disrupts, or impairs server performance or site availability.",
          "Attempt unauthorized access to our infrastructure, user communications, or administrative systems.",
          "Deploy automated data scrapers, bots, or extraction scripts without express authorization.",
          "Transmit malicious code, viruses, or disruptive software payloads.",
        ],
      },
      {
        id: "links",
        title: "5. Third-Party Links & Services",
        content: [
          "Our Site may contain links to external third-party platforms, social networks, or partner websites. Lumentis does not control and is not liable for the content, privacy practices, or accuracy of third-party domains.",
        ],
      },
      {
        id: "disclaimer",
        title: "6. Disclaimer of Warranties",
        content: [
          "This Site and its contents are provided on an \"AS IS\" and \"AS AVAILABLE\" basis without warranties of any kind, whether express, implied, or statutory.",
          "We do not guarantee uninterrupted uptime, bug-free operation, or that all presented media will be completely error-free at all times.",
        ],
      },
      {
        id: "liability",
        title: "7. Limitation of Liability",
        content: [
          "To the maximum extent permitted by applicable Thai law, Lumentis and its directors, employees, or affiliates shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of or inability to access the Site.",
        ],
      },
      {
        id: "indemnity",
        title: "8. Indemnification",
        content: [
          "You agree to defend, indemnify, and hold harmless LUMENTIS (THAILAND) Co., Ltd. from any claims, damages, liabilities, and expenses arising from your violation of these Terms or misuse of the Site.",
        ],
      },
      {
        id: "governing-law",
        title: "9. Governing Law & Jurisdiction",
        content: [
          "These Terms of Service shall be governed by and interpreted in accordance with the laws of the Kingdom of Thailand.",
          "Any legal proceedings or disputes arising from these Terms shall be subject to the exclusive jurisdiction of the competent courts in Bangkok, Thailand.",
        ],
      },
      {
        id: "modifications",
        title: "10. Modifications to Terms",
        content: [
          "We reserve the right to revise or replace these Terms at our discretion. Significant changes will be noted by an updated \"Last updated\" date. Continued use of the Site constitutes acceptance of modified terms.",
        ],
      },
      {
        id: "severability",
        title: "11. Severability",
        content: [
          "If any provision of these Terms is deemed unlawful or unenforceable by a court of competent jurisdiction, the remaining provisions shall remain fully enforceable and effective.",
        ],
      },
      {
        id: "contact",
        title: "12. Contact Us",
        content: [
          "For inquiries regarding these Terms of Service, please reach out to us:",
        ],
      },
    ],
    contactBox: {
      title: "LUMENTIS (THAILAND) Co., Ltd.",
      companyName: "LUMENTIS (THAILAND) Co., Ltd.",
      addressLabel: "Address",
      address: "1055/1369, 50th Floor, State Tower, Si Lom Rd, Si Lom, Bang Rak, Bangkok 10500, Thailand",
      emailLabel: "Email",
      email: "contact@lumentisth.com",
      websiteLabel: "Website",
      website: "https://lumentisth.com",
    },
  },
  pdpa: {
    title: "PDPA Privacy Notice",
    subtitle: "Personal Data Protection Act B.E. 2562 (2019) Compliance Statement",
    lastUpdated: "Last updated: August 21, 2026",
    sections: [
      {
        id: "scope",
        title: "1. Purpose and Scope",
        content: [
          "LUMENTIS (THAILAND) Co., Ltd. (\"Lumentis\", \"we\", \"our\", or \"us\") issues this Personal Data Protection Notice in compliance with Thailand's Personal Data Protection Act B.E. 2562 (2019) (\"PDPA\").",
          "This notice informs you, as a data subject, about our policies regarding the collection, use, disclosure, storage, and cross-border transfer of your personal data when interacting with our website and services.",
        ],
      },
      {
        id: "controller",
        title: "2. Data Controller Information",
        content: [
          "LUMENTIS (THAILAND) Co., Ltd. acts as the Data Controller responsible for determining the purposes and means of processing your personal data.",
        ],
      },
      {
        id: "types",
        title: "3. Categories of Personal Data Collected",
        content: [
          "We may collect, use, and process the following categories of personal data:",
        ],
        items: [
          "Identity & Contact Data: Name, surname, company name, business email address, phone number, and project inquiry details.",
          "Technical & Usage Data: IP address, device identifier, browser type, operating system, geolocation, access logs, and browsing interaction metrics.",
          "Communication Records: Content of messages, emails, feedback, and inquiries submitted to us.",
        ],
      },
      {
        id: "bases",
        title: "4. Legal Bases for Processing",
        content: [
          "Under the PDPA, we process your personal data under the following lawful bases:",
        ],
        items: [
          "Consent (Section 19): Where you have expressly consented to receiving news, case studies, or marketing materials.",
          "Contractual Necessity (Section 24(3)): To take steps at your request prior to entering into a commercial project agreement.",
          "Legitimate Interests (Section 24(5)): For website cybersecurity, preventing fraudulent activities, and enhancing our creative technology services.",
          "Legal Obligation (Section 24(6)): To comply with applicable statutory laws, tax regulations, and lawful orders from authorities.",
        ],
      },
      {
        id: "sharing",
        title: "5. Disclosure & International Transfer of Data",
        content: [
          "We implement strict safeguards and only disclose personal data to:",
        ],
        items: [
          "Cloud service providers and cybersecurity vendors with robust data protection standards.",
          "Government, judicial, or law enforcement bodies when mandated by Thai legislation.",
          "When data is transferred to cloud servers outside Thailand, we ensure adequate data protection standards in compliance with Section 28 and Section 29 of the PDPA.",
        ],
      },
      {
        id: "retention",
        title: "6. Data Retention Period",
        content: [
          "We retain your personal data for the duration necessary to accomplish the purposes outlined in this notice, typically for up to 2 years from our last business interaction, or as required by applicable Thai statute of limitations.",
        ],
      },
      {
        id: "security",
        title: "7. Security Measures",
        content: [
          "We implement industry-standard administrative, physical, and technical safeguards (including TLS/SSL encryption, restricted access control, and network firewalls) to protect personal data against accidental loss, unauthorized access, destruction, or alteration.",
        ],
      },
      {
        id: "rights",
        title: "8. Data Subject Statutory Rights",
        content: [
          "Pursuant to Sections 30–36 of the PDPA, you are entitled to exercise the following rights:",
        ],
        items: [
          "Right to be informed (Section 23)",
          "Right of access and obtain a copy (Section 30)",
          "Right to data portability (Section 31)",
          "Right to object to processing (Section 32)",
          "Right to erasure / destruction / anonymization (Section 33)",
          "Right to restriction of processing (Section 34)",
          "Right to rectification (Section 35)",
          "Right to withdraw consent (Section 19)",
          "Right to lodge a complaint with the Personal Data Protection Committee (PDPC) (Section 73)",
        ],
      },
      {
        id: "dpo",
        title: "9. Data Protection Contact",
        content: [
          "To submit a Data Subject Access Request (DSAR) or inquire about our PDPA compliance, please contact us:",
        ],
      },
    ],
    contactBox: {
      title: "LUMENTIS (THAILAND) Co., Ltd.",
      companyName: "LUMENTIS (THAILAND) Co., Ltd.",
      addressLabel: "Address",
      address: "1055/1369, 50th Floor, State Tower, Si Lom Rd, Si Lom, Bang Rak, Bangkok 10500, Thailand",
      emailLabel: "Email",
      email: "contact@lumentisth.com",
      websiteLabel: "Website",
      website: "https://lumentisth.com",
    },
  },
};

const th: LegalDictionary = {
  privacy: {
    title: "นโยบายความเป็นส่วนตัว",
    lastUpdated: "ปรับปรุงล่าสุด: 21 สิงหาคม 2569",
    sections: [
      {
        id: "intro",
        title: "1. บทนำ",
        content: [
          "บริษัท ลูเมนทิส (ประเทศไทย) จำกัด (\"Lumentis\", \"เรา\", \"พวกเรา\" หรือ \"ของเรา\") ให้ความสำคัญและเคารพในสิทธิความเป็นส่วนตัวของท่าน และมุ่งมั่นที่จะปกป้องข้อมูลส่วนบุคคลของท่านอย่างปลอดภัยสูงสุด",
          "นโยบายความเป็นส่วนตัวฉบับนี้อธิบายถึงวิธีการที่เราเก็บรวบรวม ใช้ เปิดเผย และปกป้องข้อมูลส่วนบุคคลของท่านเมื่อท่านเข้าชมเว็บไซต์ lumentisth.com หรือใช้บริการโซลูชัน เทคโนโลยีสร้างสรรค์ และประสบการณ์ดิจิทัลของเรา",
        ],
      },
      {
        id: "collection",
        title: "2. ข้อมูลส่วนบุคคลที่เราเก็บรวบรวม",
        content: [
          "เราเก็บรวบรวมข้อมูลส่วนบุคคลผ่าน 2 ช่องทางหลัก ได้แก่ ข้อมูลที่ท่านให้ไว้แก่เราโดยตรง และข้อมูลทางเทคนิคที่เก็บรวบรวมโดยอัตโนมัติจากการใช้งานเว็บไซต์",
        ],
        items: [
          "ข้อมูลที่ท่านให้โดยตรง: เมื่อท่านติดต่อเราผ่านแบบฟอร์ม อีเมล หรือการปรึกษาโปรเจกต์ เช่น ชื่อ-นามสกุล, อีเมลสำหรับติดต่อธุรกิจ, หมายเลขโทรศัพท์, ชื่อบริษัท/องค์กร, ตำแหน่งงาน และรายละเอียดเกี่ยวกับโปรเจกต์ที่สนใจ",
          "ข้อมูลที่เก็บรวบรวมโดยอัตโนมัติ: ข้อมูลทางเทคนิคจากการเข้าใช้งานเว็บไซต์ เช่น ที่อยู่ IP Address, ประเภทและเวอร์ชันของเบราว์เซอร์, ข้อมูลอุปกรณ์, ระบบปฏิบัติการ, หน้าเว็บที่เข้าชม, ระยะเวลาการใช้งาน และสถิติการโต้ตอบผ่านคุกกี้ (Cookies)",
        ],
      },
      {
        id: "use",
        title: "3. วัตถุประสงค์ในการใช้ข้อมูล",
        content: [
          "เราใช้ข้อมูลส่วนบุคคลของท่านตามวัตถุประสงค์ที่ชอบด้วยกฎหมาย ดังต่อไปนี้:",
        ],
        items: [
          "เพื่อตอบสนองต่อข้อซักถาม ให้คำปรึกษา จัดทำข้อเสนอโครงการ และนำเสนอบริการที่ท่านร้องขอ",
          "เพื่อพัฒนา ดำเนินงาน ปรับปรุงประสิทธิภาพ และยกระดับประสบการณ์การใช้งานเว็บไซต์และเครื่องมือดิจิทัล",
          "เพื่อวิเคราะห์แนวโน้มและสถิติการใช้งาน เพื่อพัฒนาเทคโนโลยีสร้างสรรค์ให้ตรงกับความต้องการของลูกค้า",
          "เพื่อส่งข้อมูลข่าวสาร ผลงาน และบทความความรู้ (ในกรณีที่ท่านได้ให้ความยินยอมรับข่าวสาร)",
          "เพื่อปฏิบัติตามข้อกำหนดทางกฎหมาย และปกป้องสิทธิตามกฎหมายของบริษัทฯ",
        ],
      },
      {
        id: "cookies",
        title: "4. คุกกี้และเทคโนโลยีการติดตาม",
        content: [
          "เราใช้คุกกี้และเทคโนโลยีที่คล้ายคลึงกันเพื่อช่วยให้เว็บไซต์ทำงานได้อย่างมีประสิทธิภาพ จดจำการตั้งค่าของท่าน (เช่น ภาษาและธีมการแสดงผล) ตลอดจนวิเคราะห์การเข้าชมเพื่อปรับปรุงเนื้อหา",
          "ท่านสามารถตั้งค่าเบราว์เซอร์เพื่อปฏิเสธการใช้งานคุกกี้ได้ทุกเมื่อ อย่างไรก็ตาม การปิดการใช้งานคุกกี้บางประเภทอาจส่งผลกระทบต่อฟังก์ชันการทำงานบางส่วนของเว็บไซต์",
        ],
      },
      {
        id: "sharing",
        title: "5. การเปิดเผยและแบ่งปันข้อมูลส่วนบุคคล",
        content: [
          "เราไม่มีนโยบายจำหน่าย ขาย หรือแลกเปลี่ยนข้อมูลส่วนบุคคลของท่านให้แก่บุคคลภายนอก เราจะเปิดเผยข้อมูลเฉพาะกรณีที่จำเป็นภายใต้สัญญาการรักษาความลับอย่างเคร่งครัด ดังนี้:",
        ],
        items: [
          "ผู้ให้บริการภายนอก: ผู้ให้บริการคลาวด์โฮสติ้ง ระบบวิเคราะห์ข้อมูล ระบบความปลอดภัย และแพลตฟอร์มการสื่อสารที่สนับสนุนการดำเนินงานของเรา",
          "หน่วยงานภาครัฐหรือตามกฎหมาย: ในกรณีที่มีคำสั่งศาล หมายเรียก หรือข้อกำหนดทางกฎหมายที่ถูกต้องตามกฎหมายแห่งราชอาณาจักรไทย",
          "การปรับโครงสร้างธุรกิจ: ในกรณีที่มีการควบรวมกิจการ หรือโอนย้ายทรัพย์สิน โดยผู้รับโอนจะต้องปฏิบัติตามมาตรฐานการคุ้มครองข้อมูลเดียวกัน",
        ],
      },
      {
        id: "retention",
        title: "6. ระยะเวลาในการเก็บรักษาข้อมูล",
        content: [
          "เราจะเก็บรักษาข้อมูลส่วนบุคคลของท่านไว้ตามระยะเวลาที่จำเป็นต่อการบรรลุวัตถุประสงค์ที่ระบุไว้ในนโยบายนี้ หรือตามที่กฎหมายกำหนดไว้",
          "เมื่อข้อมูลหมดความจำเป็นหรือครบกำหนดระยะเวลา เราจะดำเนินการลบ ทำลาย หรือทำให้ข้อมูลนั้นไม่สามารถระบุตัวบุคคลได้ตามมาตรฐานความปลอดภัย",
        ],
      },
      {
        id: "rights",
        title: "7. สิทธิของเจ้าของข้อมูลส่วนบุคคล",
        content: [
          "ท่านมีสิทธิตามกฎหมายคุ้มครองข้อมูลส่วนบุคคลในการดำเนินการเกี่ยวกับข้อมูลส่วนบุคคลของท่าน ดังนี้:",
        ],
        items: [
          "สิทธิในการเข้าถึงและขอรับสำเนาข้อมูลส่วนบุคคลของท่าน",
          "สิทธิในการขอแก้ไขข้อมูลส่วนบุคคลให้ถูกต้อง เป็นปัจจุบัน และสมบูรณ์",
          "สิทธิในการขอลบ ทำลาย หรือระงับการใช้ข้อมูลส่วนบุคคล",
          "สิทธิในการคัดค้านการประมวลผลข้อมูลส่วนบุคคล",
          "สิทธิในการเพิกถอนความยินยอมที่เคยให้ไว้ได้ตลอดเวลา",
        ],
      },
      {
        id: "pdpa",
        title: "8. การปฏิบัติตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล (PDPA)",
        content: [
          "บริษัท ลูเมนทิส (ประเทศไทย) จำกัด ดำเนินการสอดคล้องกับพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA) อย่างเคร่งครัด",
          "เรากำหนดมาตรการรักษาความมั่นคงปลอดภัยทั้งทางเทคนิคและการบริหารจัดการ เพื่อป้องกันการเข้าถึง การใช้ หรือการเปิดเผยข้อมูลโดยมิชอบ",
        ],
      },
      {
        id: "international",
        title: "9. การถ่ายโอนข้อมูลไปยังต่างประเทศ",
        content: [
          "เนื่องจากเราใช้โครงสร้างพื้นฐานระบบคลาวด์มาตรฐานสากล ข้อมูลบางส่วนอาจถูกจัดเก็บหรือประมวลผลบนเซิร์ฟเวอร์ในต่างประเทศ โดยเรามีมาตรการคุ้มครองข้อมูลตามมาตรฐานที่กฎหมายกำหนด",
        ],
      },
      {
        id: "changes",
        title: "10. การเปลี่ยนแปลงนโยบายความเป็นส่วนตัว",
        content: [
          "เราอาจปรับปรุงนโยบายความเป็นส่วนตัวนี้เป็นระยะเพื่อให้สอดคล้องกับการเปลี่ยนแปลงทางกฎหมายและการดำเนินงาน โดยจะระบุวันที่แก้ไขล่าสุดไว้ที่ด้านบนของหน้านี้",
        ],
      },
      {
        id: "contact",
        title: "11. ช่องทางการติดต่อเรา",
        content: [
          "หากท่านมีข้อสงสัย ข้อเสนอแนะ หรือประสงค์จะใช้สิทธิเกี่ยวกับข้อมูลส่วนบุคคล โปรดติดต่อเราได้ที่:",
        ],
      },
    ],
    contactBox: {
      title: "บริษัท ลูเมนทิส (ประเทศไทย) จำกัด",
      companyName: "บริษัท ลูเมนทิส (ประเทศไทย) จำกัด",
      addressLabel: "ที่อยู่",
      address: "1055/1369 ชั้น 50 อาคาร State Tower ถนนสีลม แขวงสีลม เขตบางรัก กรุงเทพมหานคร 10500",
      emailLabel: "อีเมล",
      email: "contact@lumentisth.com",
      websiteLabel: "เว็บไซต์",
      website: "https://lumentisth.com",
    },
  },
  terms: {
    title: "ข้อกำหนดและเงื่อนไขการใช้งาน",
    lastUpdated: "ปรับปรุงล่าสุด: 21 สิงหาคม 2569",
    sections: [
      {
        id: "acceptance",
        title: "1. การยอมรับข้อกำหนด",
        content: [
          "การเข้าถึงหรือใช้งานเว็บไซต์ lumentisth.com (\"เว็บไซต์\") ของ บริษัท ลูเมนทิส (ประเทศไทย) จำกัด (\"Lumentis\", \"เรา\", \"พวกเรา\" หรือ \"ของเรา\") ถือว่าท่านได้อ่าน ทำความเข้าใจ และตกลงที่จะผูกพันตามข้อกำหนดและเงื่อนไขการใช้งานนี้",
          "หากท่านไม่ยอมรับข้อกำหนดเหล่านี้ โปรดยุติการเข้าถึงและใช้งานเว็บไซต์และบริการของเราทันที",
        ],
      },
      {
        id: "services",
        title: "2. ขอบเขตการให้บริการ",
        content: [
          "Lumentis เป็นบริษัท Creative Technology ในกรุงเทพมหานคร เรามุ่งเน้นการเปลี่ยนเทคโนโลยีใหม่ให้เป็นประสบการณ์ที่จับต้องได้ รวมถึงเทคโนโลยี Immersive (AR/VR/XR), โซลูชัน AI, เว็บไซต์และแอปพลิเคชันเชิงปฏิสัมพันธ์, เครื่องมือแคมเปญสร้างสรรค์ และต้นแบบเทคโนโลยีใหม่",
          "เนื้อหาทั้งหมดบนเว็บไซต์นี้จัดทำขึ้นเพื่อวัตถุประสงค์ในการให้ข้อมูล การนำเสนอผลงาน และการแสดงศักยภาพทางเทคโนโลยีเท่านั้น",
        ],
      },
      {
        id: "ip",
        title: "3. ทรัพย์สินทางปัญญา",
        content: [
          "ข้อมูล กราฟิก โลโก้ ซอร์สโค้ด งานภาพและเสียง การออกแบบเชิงปฏิสัมพันธ์ และเครื่องหมายการค้าทั้งหมดบนเว็บไซต์นี้ เป็นทรัพย์สินทางปัญญาของ บริษัท ลูเมนทิส (ประเทศไทย) จำกัด หรือผู้ให้อนุญาตแก่เรา",
          "ห้ามคัดลอก ดัดแปลง ทำซ้ำ แจกจ่าย หรือนำไปใช้ประโยชน์ในเชิงพาณิชย์โดยไม่ได้รับความยินยอมเป็นลายลักษณ์อักษรจากเราล่วงหน้า",
        ],
      },
      {
        id: "conduct",
        title: "4. ข้อปฏิบัติของผู้ใช้งาน",
        content: [
          "ในการเข้าใช้งานเว็บไซต์ ท่านตกลงที่จะปฏิบัติตามกฎหมายและข้อกำหนดอย่างเคร่งครัด โดยจะไม่กระทำการดังต่อไปนี้:",
        ],
        items: [
          "กระทำการใดๆ ที่สร้างความเสียหาย ขัดขวาง หรือส่งผลกระทบต่อประสิทธิภาพความปลอดภัยของเว็บไซต์และเซิร์ฟเวอร์",
          "พยายามเข้าถึงระบบ เครือข่าย หรือข้อมูลของผู้อื่นโดยไม่ได้รับอนุญาต",
          "ใช้งานโปรแกรมอัตโนมัติ (เช่น Bot, Spider, Scraper) ในการดึงข้อมูลจากเว็บไซต์โดยไม่ได้รับอนุญาต",
          "ส่งหรือเผยแพร่ไวรัส มัลแวร์ หรือโค้ดที่มีเจตนาร้าย",
        ],
      },
      {
        id: "links",
        title: "5. ลิงก์ไปยังเว็บไซต์บุคคลที่สาม",
        content: [
          "เว็บไซต์อาจมีลิงก์เชื่อมโยงไปยังเว็บไซต์หรือบริการของบุคคลภายนอก เราไม่มีอำนาจควบคุมและไม่รับผิดชอบต่อเนื้อหา นโยบายความเป็นส่วนตัว หรือการดำเนินการใดๆ ของเว็บไซต์เหล่านั้น",
        ],
      },
      {
        id: "disclaimer",
        title: "6. การปฏิเสธการรับประกัน",
        content: [
          "เว็บไซต์และเนื้อหาทั้งหมดจัดเตรียมไว้ \"ตามสภาพที่เป็นอยู่\" (As Is) และ \"ตามที่มีอยู่\" (As Available) โดยไม่มีการรับประกันใดๆ ไม่ว่าโดยชัดแจ้งหรือโดยปริยาย",
          "เราไม่รับประกันว่าการเข้าใช้งานเว็บไซต์จะไม่มีการหยุดชะงัก ปราศจากข้อผิดพลาด หรือปลอดภัยจากภัยคุกคามทางไซเบอร์ในทุกกรณี",
        ],
      },
      {
        id: "liability",
        title: "7. ข้อจำกัดความรับผิด",
        content: [
          "ภายใต้ขอบเขตสูงสุดที่กฎหมายไทยอนุญาต Lumentis กรรมการ พนักงาน และตัวแทนของบริษัท จะไม่รับผิดชอบต่อความเสียหายทางตรง ทางอ้อม หรือความเสียหายต่อเนื่องใดๆ ที่เกิดขึ้นจากการเข้าใช้หรือไม่สามารถเข้าใช้เว็บไซต์นี้ได้",
        ],
      },
      {
        id: "indemnity",
        title: "8. การชดใช้ค่าเสียหาย",
        content: [
          "ท่านตกลงที่จะปกป้อง ชดใช้ และระงับความเสียหายแก่ บริษัท ลูเมนทิส (ประเทศไทย) จำกัด กรรมการ และพนักงาน จากข้อเรียกร้อง ความสูญเสีย หรือค่าใช้จ่ายใดๆ ที่เกิดจากการที่ท่านละเมิดข้อกำหนดนี้",
        ],
      },
      {
        id: "governing-law",
        title: "9. กฎหมายที่ใช้บังคับและเขตอำนาจศาล",
        content: [
          "ข้อกำหนดการใช้งานนี้อยู่ภายใต้การบังคับใช้และตีความตามกฎหมายแห่งราชอาณาจักรไทย",
          "ข้อพิพาทใดๆ ที่เกิดขึ้นจะอยู่ภายใต้เขตอำนาจศาลที่มีอำนาจในกรุงเทพมหานคร ประเทศไทย เท่านั้น",
        ],
      },
      {
        id: "modifications",
        title: "10. การแก้ไขเปลี่ยนแปลงข้อกำหนด",
        content: [
          "เราขอสงวนสิทธิ์ในการแก้ไขหรือปรับปรุงข้อกำหนดนี้ได้ทุกเมื่อ การใช้งานเว็บไซต์อย่างต่อเนื่องหลังการประกาศแก้ไข ถือเป็นการยอมรับข้อกำหนดที่เปลี่ยนแปลงไป",
        ],
      },
      {
        id: "severability",
        title: "11. การแยกส่วนของข้อกำหนด",
        content: [
          "หากข้อกำหนดข้อใดข้อหนึ่งตกเป็นโมฆะหรือไม่สามารถบังคับใช้ได้ตามกฎหมาย ให้ถือว่าข้อกำหนดส่วนที่เหลือยังคงมีผลใช้บังคับได้อย่างสมบูรณ์",
        ],
      },
      {
        id: "contact",
        title: "12. ติดต่อเรา",
        content: [
          "หากท่านมีคำถามเกี่ยวกับข้อกำหนดและเงื่อนไขการใช้งาน สามารถติดต่อเราได้ที่:",
        ],
      },
    ],
    contactBox: {
      title: "บริษัท ลูเมนทิส (ประเทศไทย) จำกัด",
      companyName: "บริษัท ลูเมนทิส (ประเทศไทย) จำกัด",
      addressLabel: "ที่อยู่",
      address: "1055/1369 ชั้น 50 อาคาร State Tower ถนนสีลม แขวงสีลม เขตบางรัก กรุงเทพมหานคร 10500",
      emailLabel: "อีเมล",
      email: "contact@lumentisth.com",
      websiteLabel: "เว็บไซต์",
      website: "https://lumentisth.com",
    },
  },
  pdpa: {
    title: "ประกาศความเป็นส่วนตัว (PDPA Privacy Notice)",
    subtitle: "ประกาศการคุ้มครองข้อมูลส่วนบุคคลตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562",
    lastUpdated: "ปรับปรุงล่าสุด: 21 สิงหาคม 2569",
    sections: [
      {
        id: "scope",
        title: "1. วัตถุประสงค์และขอบเขต",
        content: [
          "บริษัท ลูเมนทิส (ประเทศไทย) จำกัด (\"Lumentis\", \"เรา\", \"พวกเรา\" หรือ \"ของเรา\") ได้จัดทำประกาศความเป็นส่วนตัวฉบับนี้ขึ้นตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (\"PDPA\")",
          "เพื่อแจ้งให้ท่านในฐานะเจ้าของข้อมูลส่วนบุคคลทราบถึงแนวทางปฏิบัติในการเก็บรวบรวม ใช้ เปิดเผย และคุ้มครองข้อมูลส่วนบุคคลของท่าน",
        ],
      },
      {
        id: "controller",
        title: "2. ข้อมูลเกี่ยวกับผู้ควบคุมข้อมูลส่วนบุคคล",
        content: [
          "บริษัท ลูเมนทิส (ประเทศไทย) จำกัด ทำหน้าที่เป็น \"ผู้ควบคุมข้อมูลส่วนบุคคล\" (Data Controller) ซึ่งมีหน้าที่และความรับผิดชอบในการกำหนดวัตถุประสงค์และมาตรการในการประมวลผลข้อมูลส่วนบุคคลของท่าน",
        ],
      },
      {
        id: "types",
        title: "3. ประเภทข้อมูลส่วนบุคคลที่เก็บรวบรวม",
        content: [
          "เราอาจเก็บรวบรวมและประมวลผลข้อมูลส่วนบุคคลของท่านเท่าที่จำเป็น ดังนี้:",
        ],
        items: [
          "ข้อมูลระบุตัวตนและการติดต่อ: ชื่อ-นามสกุล, ชื่อบริษัท/องค์กร, อีเมลสำหรับติดต่อ, หมายเลขโทรศัพท์ และข้อความติดต่อสอบถาม",
          "ข้อมูลทางเทคนิคและการใช้งาน: หมายเลข IP Address, ชนิดและเวอร์ชันของเบราว์เซอร์, ระบบปฏิบัติการ, ประวัติการเข้าชมหน้าเว็บ และบันทึกข้อมูลจราจรทางคอมพิวเตอร์ (Log files)",
          "ข้อมูลการสื่อสาร: บันทึกการติดต่อสื่อสาร ความคิดเห็น และข้อเสนอแนะที่ส่งถึงเรา",
        ],
      },
      {
        id: "bases",
        title: "4. ฐานทางกฎหมายในการประมวลผลข้อมูล",
        content: [
          "เราประมวลผลข้อมูลส่วนบุคคลของท่านภายใต้ฐานกฎหมายตามมาตรา 24 แห่ง พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 ดังนี้:",
        ],
        items: [
          "ฐานความยินยอม (Consent - มาตรา 19): สำหรับการส่งข่าวสารการตลาด บทความ และข้อเสนอพิเศษที่ท่านได้ให้ความยินยอมไว้",
          "ฐานความจำเป็นเพื่อการปฏิบัติตามสัญญา (Contract - มาตรา 24(3)): เพื่อการดำเนินขั้นตอนตามคำขอของท่านก่อนเข้าทำสัญญาหรือจัดทำโครงการ",
          "ฐานประโยชน์อันชอบธรรมด้วยกฎหมาย (Legitimate Interests - มาตรา 24(5)): เพื่อการรักษาความปลอดภัยของระบบ และการพัฒนาประสิทธิภาพการบริการ",
          "ฐานการปฏิบัติตามกฎหมาย (Legal Obligation - มาตรา 24(6)): เพื่อปฏิบัติตามหน้าที่ที่กฎหมายกำหนด",
        ],
      },
      {
        id: "sharing",
        title: "5. การเปิดเผยและการส่งหรือโอนข้อมูล",
        content: [
          "เราจะรักษาข้อมูลของท่านเป็นความลับและเปิดเผยเฉพาะที่จำเป็นแก่:",
        ],
        items: [
          "ผู้ประมวลผลข้อมูลส่วนบุคคลที่น่าเชื่อถือ เช่น ผู้ให้บริการคลาวด์เซิร์ฟเวอร์ และระบบความปลอดภัย",
          "หน่วยงานราชการหรือเจ้าหน้าที่ที่มีอำนาจตามกฎหมาย",
          "กรณีที่มีการโอนข้อมูลไปยังต่างประเทศ เราจะมั่นใจว่าประเทศปลายทางมีมาตรฐานการคุ้มครองข้อมูลส่วนบุคคลที่เทียบเท่าตามมาตรา 28 และมาตรา 29",
        ],
      },
      {
        id: "retention",
        title: "6. ระยะเวลาในการเก็บรักษาข้อมูล",
        content: [
          "เราจะเก็บรักษาข้อมูลส่วนบุคคลไว้ตลอดระยะเวลาที่จำเป็นต่อการดำเนินงานตามวัตถุประสงค์ หรือเป็นระยะเวลาสูงสุด 2 ปีนับจากการติดต่อครั้งล่าสุด เว้นแต่กฎหมายจะกำหนดไว้เป็นอย่างอื่น",
        ],
      },
      {
        id: "security",
        title: "7. มาตรการรักษาความมั่นคงปลอดภัย",
        content: [
          "เราจัดให้มีมาตรการรักษาความมั่นคงปลอดภัยทั้งทางเทคนิคและการบริหารจัดการ เช่น การเข้ารหัสข้อมูล (Encryption), การควบคุมสิทธิ์การเข้าถึง (Access Control) และระบบ Firewall เพื่อป้องกันการสูญหายหรือการเข้าถึงโดยมิชอบ",
        ],
      },
      {
        id: "rights",
        title: "8. สิทธิของเจ้าของข้อมูลส่วนบุคคลตาม PDPA",
        content: [
          "ตามมาตรา 30 ถึง 36 แห่ง พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 ท่านมีสิทธิทางกฎหมายดังต่อไปนี้:",
        ],
        items: [
          "สิทธิในการได้รับแจ้ง (Right to be informed)",
          "สิทธิในการเข้าถึงและขอรับสำเนาข้อมูลส่วนบุคคล (Right of access)",
          "สิทธิในการขอรับหรือโอนย้ายข้อมูลส่วนบุคคล (Right to data portability)",
          "สิทธิในการคัดค้านการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูล (Right to object)",
          "สิทธิในการขอลบ ทำลาย หรือทำให้ไม่สามารถระบุตัวตนได้ (Right to erasure)",
          "สิทธิในการขอให้ระงับการใช้ข้อมูลส่วนบุคคล (Right to restriction of processing)",
          "สิทธิในการขอแก้ไขข้อมูลส่วนบุคคลให้ถูกต้อง (Right to rectification)",
          "สิทธิในการเพิกถอนความยินยอม (Right to withdraw consent)",
          "สิทธิในการร้องเรียนต่อคณะกรรมการผู้เชี่ยวชาญ (Right to lodge a complaint)",
        ],
      },
      {
        id: "dpo",
        title: "9. ช่องทางการติดต่อเจ้าหน้าที่คุ้มครองข้อมูล",
        content: [
          "หากท่านประสงค์จะใช้สิทธิของเจ้าของข้อมูลส่วนบุคคล หรือมีข้อสงสัยเกี่ยวกับประกาศความเป็นส่วนตัวฉบับนี้ สามารถติดต่อเราได้ที่:",
        ],
      },
    ],
    contactBox: {
      title: "บริษัท ลูเมนทิส (ประเทศไทย) จำกัด",
      companyName: "บริษัท ลูเมนทิส (ประเทศไทย) จำกัด",
      addressLabel: "ที่อยู่",
      address: "1055/1369 ชั้น 50 อาคาร State Tower ถนนสีลม แขวงสีลม เขตบางรัก กรุงเทพมหานคร 10500",
      emailLabel: "อีเมล",
      email: "contact@lumentisth.com",
      websiteLabel: "เว็บไซต์",
      website: "https://lumentisth.com",
    },
  },
};

const zh: LegalDictionary = {
  privacy: {
    title: "隐私政策",
    lastUpdated: "最后更新日期：2026年8月21日",
    sections: [
      {
        id: "intro",
        title: "1. 引言",
        content: [
          "LUMENTIS (THAILAND) Co., Ltd.（以下简称“Lumentis”、“我们”或“我们的”）尊重您的隐私权，并致力于保护您的个人数据安全。",
          "本隐私政策阐明了当您访问我们的网站 lumentisth.com 或使用我们的创意科技服务、数字工具与体验时，我们如何收集、使用、披露及保护您的个人信息。",
        ],
      },
      {
        id: "collection",
        title: "2. 我们收集的信息",
        content: [
          "我们主要通过两种方式收集信息：您主动向我们提供的信息，以及您在浏览网站时系统自动收集的技术数据。",
        ],
        items: [
          "您直接提供的信息：当您通过网站表单、电子邮件或项目洽谈联系我们时，我们可能会收集您的姓名、企业邮箱、电话号码、公司/组织名称、职位及项目需求描述。",
          "自动收集的技术数据：当您访问我们的网站时，系统可能自动记录您的 IP 地址、浏览器类型与版本、设备信息、操作系统、访问页面、停留时间及通过 Cookie 收集的交互数据。",
        ],
      },
      {
        id: "use",
        title: "3. 我们如何使用您的信息",
        content: [
          "我们将收集的信息用于合法且正当的商业目的，包括：",
        ],
        items: [
          "及时响应您的咨询、提供专业建议、制定项目方案及交付相关服务。",
          "运营、维护、优化网站性能，提升数字化体验与用户界面交互。",
          "分析网站使用趋势，持续改进我们的创意技术解决方案。",
          "发送行业动态、案例洞察及精选内容（仅限您已选择订阅或明确同意的情况）。",
          "履行泰国现行法律法规要求的法定义务，维护公司的合法权益。",
        ],
      },
      {
        id: "cookies",
        title: "4. Cookie 及追踪技术",
        content: [
          "我们使用必要的和分析型 Cookie 来保障网站顺畅运行、保存您的个性化偏好（如主题风格与语言选择），并分析访客行为以便优化内容。",
          "您可以通过浏览器设置拒绝或管理 Cookie。请注意，禁用某些 Cookie 可能会影响网站部分交互功能的正常使用。",
        ],
      },
      {
        id: "sharing",
        title: "5. 数据共享与披露",
        content: [
          "我们绝不出售、出租或交易您的个人数据。我们仅在以下严格保密的前提下向第三方披露必要信息：",
        ],
        items: [
          "授权服务提供商：协助我们运营的云托管平台、网络安全监测、数据分析及企业通讯服务商。",
          "法律与监管机构：当依据泰国法律法规、法院传票或政府主管机关的合法指令要求时。",
          "业务重组：在发生企业合并、收购或资产转让时，接收方须遵守同等严格的数据保护标准。",
        ],
      },
      {
        id: "retention",
        title: "6. 数据保留期限",
        content: [
          "我们仅在实现本政策所述目的所必需的期限内保留您的个人数据，或依据法律法规、财务审计的要求保留。",
          "当数据不再需要时，我们将按照安全标准进行彻底删除或进行不可逆的匿名化处理。",
        ],
      },
      {
        id: "rights",
        title: "7. 您的权利",
        content: [
          "依据适用的数据保护法律，您享有以下法定权利：",
        ],
        items: [
          "查阅并要求获取我们持有的您的个人数据副本。",
          "要求更正不准确或不完整的个人数据。",
          "在法定情形下要求删除您的个人数据（“被遗忘权”）。",
          "限制或反对特定数据处理活动。",
          "随时撤回先前作出的同意，且不影响撤回前基于同意进行的合法处理。",
        ],
      },
      {
        id: "pdpa",
        title: "8. 泰国 PDPA 合规声明",
        content: [
          "LUMENTIS (THAILAND) Co., Ltd. 严格遵守泰国《佛历2562年个人数据保护法》（PDPA）。",
          "我们部署了全面的技术与管理安全措施，防止个人数据遭到未经授权的访问、泄露、篡改或损毁。",
        ],
      },
      {
        id: "international",
        title: "9. 跨境数据传输",
        content: [
          "鉴于我们采用全球领先的云技术架构与合作伙伴网络，您的部分数据可能会传输至泰国境外的服务器存储与处理。我们确保此类跨境传输符合法定数据保护标准。",
        ],
      },
      {
        id: "changes",
        title: "10. 隐私政策的更新",
        content: [
          "我们可能会适时更新本隐私政策。所有修订将在本页面发布，并更新顶部的“最后更新日期”。建议您定期查阅以了解最新政策。",
        ],
      },
      {
        id: "contact",
        title: "11. 联系我们",
        content: [
          "如您对本隐私政策有任何疑问或希望行使您的个人数据权利，请通过以下方式联系我们：",
        ],
      },
    ],
    contactBox: {
      title: "LUMENTIS (THAILAND) Co., Ltd.",
      companyName: "LUMENTIS (THAILAND) Co., Ltd.",
      addressLabel: "办公地址",
      address: "泰国曼谷挽叻区是隆路 State Tower 大厦 50 层 1055/1369，邮编 10500",
      emailLabel: "电子邮箱",
      email: "contact@lumentisth.com",
      websiteLabel: "官方网站",
      website: "https://lumentisth.com",
    },
  },
  terms: {
    title: "服务条款",
    lastUpdated: "最后更新日期：2026年8月21日",
    sections: [
      {
        id: "acceptance",
        title: "1. 条款的接受",
        content: [
          "欢迎访问由 LUMENTIS (THAILAND) Co., Ltd.（以下简称“Lumentis”、“我们”或“我们的”）运营的网站 lumentisth.com（以下简称“本网站”）。访问或使用本网站即表示您确认已阅读、理解并同意受本服务条款的约束。",
          "如果您不同意这些条款，请立即停止访问和使用本网站及相关服务。",
        ],
      },
      {
        id: "services",
        title: "2. 服务描述",
        content: [
          "Lumentis 是一家位于泰国曼谷的创意科技公司。我们专注于将前沿新兴技术转化为触手可及的体验与解决方案，涵盖沉浸式体验（AR/VR/XR）、AI 赋能方案、交互式网站与应用、创意营销工具及前沿科技原型开发。",
          "本网站所呈现的所有内容仅供一般信息展示、作品集参考及技术能力说明之用。",
        ],
      },
      {
        id: "ip",
        title: "3. 知识产权",
        content: [
          "本网站上的所有内容，包括但不限于图形、徽标、源代码、视听作品、交互设计、文字及商标，均为 LUMENTIS (THAILAND) Co., Ltd. 或其许可方的知识产权，受相关法律保护。",
          "未经我们事先书面明确许可，严禁复制、修改、分发、传播或用于商业目的。",
        ],
      },
      {
        id: "conduct",
        title: "4. 用户行为规范",
        content: [
          "在使用本网站时，您同意遵守所有适用的法律法规，并承诺不得：",
        ],
        items: [
          "从事任何破坏、干扰或损害网站正常运行及服务器安全的行为。",
          "试图未经授权访问我们的基础设施、网络系统或其他用户的信息。",
          "未经书面许可，使用自动化脚本、网络爬虫或抓取工具提取网站数据。",
          "上传或传播病毒、恶意木马或任何具有破坏性的程序代码。",
        ],
      },
      {
        id: "links",
        title: "5. 第三方链接与服务",
        content: [
          "本网站可能包含指向第三方网站或服务的链接。Lumentis 无法控制第三方的内容、隐私政策或运营行为，对此不承担任何责任。建议您访问第三方站点时查阅其专属条款。",
        ],
      },
      {
        id: "disclaimer",
        title: "6. 免责声明",
        content: [
          "本网站及其全部内容均按“现状”（As Is）和“可获得性”（As Available）提供，不包含任何形式的明示或暗示保证。",
          "我们不保证网站服务绝对不会中断、完全无误，亦不保证网站绝对免受恶意攻击或网络病毒侵害。",
        ],
      },
      {
        id: "liability",
        title: "7. 责任限制",
        content: [
          "在泰国法律允许的最大范围内，Lumentis 及其董事、员工、合作伙伴对因使用或无法使用本网站而引起的任何间接、附带、特殊或后果性损失概不负责。",
        ],
      },
      {
        id: "indemnity",
        title: "8. 赔偿条款",
        content: [
          "因您违反本服务条款或不当使用本网站而导致任何第三方提出索赔或诉求，您同意向 LUMENTIS (THAILAND) Co., Ltd. 及其团队作出全额赔偿并使其免受损害。",
        ],
      },
      {
        id: "governing-law",
        title: "9. 适用法律与司法管辖",
        content: [
          "本服务条款受泰王国法律管辖并据其解释。",
          "因本条款引起的或与之相关的任何争议，均应提交至泰王国曼谷市有管辖权的法院专属审理。",
        ],
      },
      {
        id: "modifications",
        title: "10. 条款修改",
        content: [
          "我们保留随时自行决定修改或替换本服务条款的权利。修改后的条款一经在本网站发布即刻生效。您在条款更新后继续使用本网站，即视为接受修改后的条款。",
        ],
      },
      {
        id: "severability",
        title: "11. 可分割性",
        content: [
          "若本条款中的任何条款被依法裁定为无效或不可执行，该条款应在必要限度内被修改或分割，其余条款仍具有完整的法律效力。",
        ],
      },
      {
        id: "contact",
        title: "12. 联系我们",
        content: [
          "如对本服务条款有任何疑问，请与我们取得联系：",
        ],
      },
    ],
    contactBox: {
      title: "LUMENTIS (THAILAND) Co., Ltd.",
      companyName: "LUMENTIS (THAILAND) Co., Ltd.",
      addressLabel: "办公地址",
      address: "泰国曼谷挽叻区是隆路 State Tower 大厦 50 层 1055/1369，邮编 10500",
      emailLabel: "电子邮箱",
      email: "contact@lumentisth.com",
      websiteLabel: "官方网站",
      website: "https://lumentisth.com",
    },
  },
  pdpa: {
    title: "PDPA 个人数据保护声明",
    subtitle: "依据泰国《佛历2562年个人数据保护法》（PDPA）的个人数据处理声明",
    lastUpdated: "最后更新日期：2026年8月21日",
    sections: [
      {
        id: "scope",
        title: "1. 目的与适用范围",
        content: [
          "LUMENTIS (THAILAND) Co., Ltd.（以下简称“Lumentis”或“我们”）根据泰王国《佛历2562年个人数据保护法》（“PDPA”）制定本个人数据保护声明。",
          "本声明旨在向您（作为数据主体）说明我们在您访问本网站及互动过程中，收集、使用、存储、跨境传输及保护您个人数据的准则与合规措施。",
        ],
      },
      {
        id: "controller",
        title: "2. 数据控制者信息",
        content: [
          "LUMENTIS (THAILAND) Co., Ltd. 担任“数据控制者”（Data Controller），负责确定您个人数据的处理目的与处理方式。",
        ],
      },
      {
        id: "types",
        title: "3. 收集的个人数据类型",
        content: [
          "我们可能会出于正当业务需求收集并处理以下类别的个人数据：",
        ],
        items: [
          "身份与联系信息：姓名、企业/机构名称、商务电子邮箱、联系电话及项目咨询详情。",
          "技术与访问数据：IP 地址、设备标识符、浏览器类型、操作系统、地理位置及系统访问日志。",
          "沟通记录：您通过邮件或表单发送给我们的互动消息、反馈与需求描述。",
        ],
      },
      {
        id: "bases",
        title: "4. 数据处理的法律依据",
        content: [
          "根据 PDPA 第24条规定，我们在以下法定依据下处理您的个人数据：",
        ],
        items: [
          "同意原则（第19条）：在您主动同意接收市场资讯、案例分析或订阅内容时。",
          "合同履行必要性（第24条第3款）：在签订商业合作合同前，应您的要求采取初步洽谈与评估步骤。",
          "合法权益（第24条第5款）：用于保障网络系统安全、防范欺诈及优化创意科技服务质量。",
          "法定义务（第24条第6款）：履行泰国税法、商业法规及主管机关的强制性法律要求。",
        ],
      },
      {
        id: "sharing",
        title: "5. 数据的披露与跨境传输",
        content: [
          "我们对您的个人数据严格保密，仅在必要时向以下对象披露：",
        ],
        items: [
          "具有高标准数据安全资质的受托服务商（如云服务器、网络安全与分析系统）。",
          "依据泰国法律法规享有合法调取权限的政府主管机关或司法机构。",
          "若涉及向泰国境外传输数据，我们确保接收方所在国家或机构具备符合 PDPA 第28条及第29条规定的同等数据保护水平。",
        ],
      },
      {
        id: "retention",
        title: "6. 数据保留期限",
        content: [
          "我们仅在实现本声明所述目的所需期限内保存您的个人数据，通常自最后一次业务互动起最长保留2年，或依泰国法定诉效要求保留。",
        ],
      },
      {
        id: "security",
        title: "7. 数据安全保障措施",
        content: [
          "我们采用业界标准的管理、物理与技术安全防护措施（包括 SSL/TLS 加密传输、严格的访问权限控制及网络防火墙），防止数据遗失、泄露或遭到非法访问。",
        ],
      },
      {
        id: "rights",
        title: "8. PDPA 赋予的数据主体权利",
        content: [
          "依据 PDPA 第30条至第36条，您享有以下法定权利：",
        ],
        items: [
          "知情权（第23条）",
          "查阅及获取数据副本权（第30条）",
          "数据可携带权（第31条）",
          "反对数据处理权（第32条）",
          "要求删除、销毁或匿名化权（第33条）",
          "限制数据处理权（第34条）",
          "更正个人数据权（第35条）",
          "撤回同意权（第19条）",
          "向泰国个人数据保护委员会（PDPC）投诉权（第73条）",
        ],
      },
      {
        id: "dpo",
        title: "9. 个人数据保护联系方式",
        content: [
          "如需行使数据主体权利或咨询 PDPA 合规事宜，请随时联系我们的团队：",
        ],
      },
    ],
    contactBox: {
      title: "LUMENTIS (THAILAND) Co., Ltd.",
      companyName: "LUMENTIS (THAILAND) Co., Ltd.",
      addressLabel: "办公地址",
      address: "泰国曼谷挽叻区是隆路 State Tower 大厦 50 层 1055/1369，邮编 10500",
      emailLabel: "电子邮箱",
      email: "contact@lumentisth.com",
      websiteLabel: "官方网站",
      website: "https://lumentisth.com",
    },
  },
};

const ja: LegalDictionary = {
  privacy: {
    title: "プライバシーポリシー",
    lastUpdated: "最終更新日：2026年8月21日",
    sections: [
      {
        id: "intro",
        title: "1. はじめに",
        content: [
          "LUMENTIS (THAILAND) Co., Ltd.（以下「Lumentis」「当社」といいます）は、お客様のプライバシーを尊重し、個人情報の適切な保護に努めます。",
          "本プライバシーポリシーは、当社ウェブサイト（lumentisth.com）のご利用や当社のクリエイティブテクノロジーサービスをご利用いただくにあたり、当社が個人情報をどのように収集、利用、管理、保護するかについて説明するものです。",
        ],
      },
      {
        id: "collection",
        title: "2. 収集する情報",
        content: [
          "当社は、お客様から直接ご提供いただく情報と、ウェブサイト閲覧時に自動的に収集される技術情報の2つの方法で情報を収集します。",
        ],
        items: [
          "直接ご提供いただく情報：お問い合わせフォーム、メール、またはプロジェクトのご相談時に入力される氏名、ビジネスメールアドレス、電話番号、会社・組織名、役職、ご相談内容など。",
          "自動的に収集される技術情報：ウェブサイトへのアクセス時に自動記録されるIPアドレス、ブラウザの種類・バージョン、端末情報、OS、閲覧ページ、滞在時間、Cookie等の追跡技術によるアクセスログ。",
        ],
      },
      {
        id: "use",
        title: "3. 情報の利用目的",
        content: [
          "当社は、収集した情報を以下の正当な事業目的のために利用します：",
        ],
        items: [
          "お問い合わせへの迅速な回答、ご提案の作成、各種サービスのご案内および提供のため。",
          "ウェブサイトの運用、保守、パフォーマンス向上およびUXの最適化のため。",
          "クリエイティブテクノロジーソリューションの改善および利用動向の分析のため。",
          "ニュースレター、導入事例、最新情報の配信のため（お客様が同意された場合に限ります）。",
          "タイ王国の法令に基づく義務の履行および当社の法的権利保護のため。",
        ],
      },
      {
        id: "cookies",
        title: "4. クッキー（Cookie）および追跡技術",
        content: [
          "当社は、サイトの正常な動作、設定（言語や表示テーマ）の保持、アクセス解析によるサービス向上のためにCookieを利用しています。",
          "ブラウザの設定によりCookieの受け入れを拒否することも可能ですが、一部の機能やインタラクティブな体験が正常に動作しない場合があります。",
        ],
      },
      {
        id: "sharing",
        title: "5. 情報の第三者への開示・共有",
        content: [
          "当社は、お客様の個人情報を販売、貸与、または不当に取引することはありません。以下の場合に限り、厳格な守秘義務のもとで情報を共有することがあります：",
        ],
        items: [
          "業務委託先：クラウドインフラ、セキュリティ監視、アクセス解析等を提供する信頼できるパートナー企業。",
          "法的要請：タイ王国の法令、裁判所の命令、または政府機関からの法的に有効な要請に基づく場合。",
          "事業承継：企業の合併、買収、または事業譲渡等に伴い、同等の保護基準を維持した上で承継される場合。",
        ],
      },
      {
        id: "retention",
        title: "6. データの保管期間",
        content: [
          "当社は、本ポリシーに定める利用目的の達成に必要な期間、または法令で定められた保管期間に限り、個人情報を保持します。",
          "不要となったデータは、安全な方法で速やかに消去または匿名化処理を行います。",
        ],
      },
      {
        id: "rights",
        title: "7. お客様の権利",
        content: [
          "適用される個人情報保護法令に基づき、お客様には以下の権利が認められています：",
        ],
        items: [
          "保有個人データの開示および写しの交付を請求する権利",
          "不正確または不完全なデータの訂正を請求する権利",
          "正当な理由がある場合のデータ消去（忘れられる権利）を請求する権利",
          "データ処理の制限または異議を申し立てる権利",
          "過去に行った同意をいつでも撤回する権利",
        ],
      },
      {
        id: "pdpa",
        title: "8. タイPDPA法（個人データ保護法）への準拠",
        content: [
          "LUMENTIS (THAILAND) Co., Ltd. は、タイ王国の個人データ保護法（PDPA B.E. 2562）を厳格に遵守して事業を運営しています。",
          "不正アクセス、紛失、改ざんを防止するため、技術的および組織的な安全管理措置を継続的に講じています。",
        ],
      },
      {
        id: "international",
        title: "9. 国外へのデータ転送",
        content: [
          "当社のクラウドシステムおよびグローバルインフラの運用に伴い、タイ国外のセキュアなサーバーにお客様のデータが転送・保管される場合があります。当社は適切な保護措置を講じて移転を行います。",
        ],
      },
      {
        id: "changes",
        title: "10. ポリシーの変更",
        content: [
          "当社は、法令の改正や事業内容の変更に応じて本ポリシーを改定することがあります。改定時は本ページ上の「最終更新日」を更新します。",
        ],
      },
      {
        id: "contact",
        title: "11. お問い合わせ窓口",
        content: [
          "本ポリシーに関するご質問や権利行使のご請求は、下記までお問い合わせください：",
        ],
      },
    ],
    contactBox: {
      title: "LUMENTIS (THAILAND) Co., Ltd.",
      companyName: "LUMENTIS (THAILAND) Co., Ltd.",
      addressLabel: "所在地",
      address: "タイ王国 バンコク バンラック区 シーロム通り ステートタワー50階 1055/1369（郵便番号 10500）",
      emailLabel: "メール",
      email: "contact@lumentisth.com",
      websiteLabel: "公式サイト",
      website: "https://lumentisth.com",
    },
  },
  terms: {
    title: "利用規約",
    lastUpdated: "最終更新日：2026年8月21日",
    sections: [
      {
        id: "acceptance",
        title: "1. 規約への同意",
        content: [
          "LUMENTIS (THAILAND) Co., Ltd.（以下「当社」といいます）が運営するウェブサイト lumentisth.com（以下「本サイト」）をご利用いただくにあたり、本利用規約への同意が必要です。",
          "本規約に同意いただけない場合は、本サイトのご利用をお控えください。",
        ],
      },
      {
        id: "services",
        title: "2. サービス内容",
        content: [
          "当社はバンコクを拠点とするクリエイティブテクノロジー企業です。没入型体験（AR/VR/XR）、AIソリューション、インタラクティブWeb・アプリ、クリエイティブキャンペーン、先端技術プロトタイプなどを提供しています。",
          "本サイトに掲載されている情報は、当社の事業および制作実績の紹介を目的としています。",
        ],
      },
      {
        id: "ip",
        title: "3. 知的財産権",
        content: [
          "本サイト上のすべてのコンテンツ（画像、ロゴ、ソースコード、テキスト、デザイン、商標等）は、当社または正当な権利者に帰属する知的財産です。",
          "当社の事前の書面による承諾なく、これらを複製、改変、転載、再配布することを禁じます。",
        ],
      },
      {
        id: "conduct",
        title: "4. 禁止事項",
        content: [
          "利用者は本サイトの利用にあたり、以下の行為を行ってはなりません：",
        ],
        items: [
          "本サイトの運営やサーバーのセキュリティを妨害または侵害する行為。",
          "不正アクセスや他の利用者・システムの情報を不正に取得しようとする行為。",
          "自動化スクリプトやスクレイピングツールを用いて無断でデータを収集する行為。",
          "ウイルスやマルウェア等の有害なプログラムを送信・拡散する行為。",
        ],
      },
      {
        id: "links",
        title: "5. サードパーティへのリンク",
        content: [
          "本サイトには第三者のウェブサイトへのリンクが含まれる場合があります。当社はリンク先サイトのコンテンツやプライバシー取扱について一切の責任を負いません。",
        ],
      },
      {
        id: "disclaimer",
        title: "6. 免責事項",
        content: [
          "本サイトおよび掲載コンテンツは「現状有姿」かつ「提供可能な範囲」で提供され、明示または黙示を問わずいかなる保証も行いません。",
          "当社は、本サイトの稼働の中断、エラーの不存在、またはサイバー攻撃に対する完全な安全性を保証するものではありません。",
        ],
      },
      {
        id: "liability",
        title: "7. 責任の制限",
        content: [
          "タイ王国の法令が許容する最大限の範囲において、当社およびその役員・従業員は、本サイトの利用または利用不能から生じるいかなる損害についても責任を負いません。",
        ],
      },
      {
        id: "indemnity",
        title: "8. 補償",
        content: [
          "利用者が本規約に違反したことにより当社に損害が生じた場合、利用者は当社に対してその損害を賠償するものとします。",
        ],
      },
      {
        id: "governing-law",
        title: "9. 準拠法および管轄裁判所",
        content: [
          "本規約はタイ王国の法律に準拠し、同法に従って解釈されます。",
          "本規約に関連して生じる一切の紛争については、バンコクの管轄裁判所を第一審の専属的合意管轄裁判所とします。",
        ],
      },
      {
        id: "modifications",
        title: "10. 規約の変更",
        content: [
          "当社は必要に応じて本規約を変更できるものとします。変更後の規約は本サイトに掲載された時点で効力を生じ、継続利用をもって同意したものとみなされます。",
        ],
      },
      {
        id: "severability",
        title: "11. 分離可能性",
        content: [
          "本規約のいずれかの条項が無効または執行不能と判断された場合でも、その他の条項は有効に存続するものとします。",
        ],
      },
      {
        id: "contact",
        title: "12. お問い合わせ",
        content: [
          "本利用規約に関するお問い合わせは、下記までご連絡ください：",
        ],
      },
    ],
    contactBox: {
      title: "LUMENTIS (THAILAND) Co., Ltd.",
      companyName: "LUMENTIS (THAILAND) Co., Ltd.",
      addressLabel: "所在地",
      address: "タイ王国 バンコク バンラック区 シーロム通り ステートタワー50階 1055/1369（郵便番号 10500）",
      emailLabel: "メール",
      email: "contact@lumentisth.com",
      websiteLabel: "公式サイト",
      website: "https://lumentisth.com",
    },
  },
  pdpa: {
    title: "PDPAプライバシー通知",
    subtitle: "タイ王国「仏滅紀元2562年 個人データ保護法（PDPA）」に基づくプライバシー通知",
    lastUpdated: "最終更新日：2026年8月21日",
    sections: [
      {
        id: "scope",
        title: "1. 目的および適用範囲",
        content: [
          "LUMENTIS (THAILAND) Co., Ltd.（以下「当社」といいます）は、タイ王国の個人データ保護法 B.E. 2562（2019）（以下「PDPA」といいます）に基づき、本プライバシー通知を発行します。",
          "本通知は、データ主体であるお客様に対し、当社が個人情報を収集、利用、開示、保管、および越境移転する際の基準と保護方針をお知らせするものです。",
        ],
      },
      {
        id: "controller",
        title: "2. データ管理者について",
        content: [
          "LUMENTIS (THAILAND) Co., Ltd. は、お客様の個人情報の処理目的および処理手段を決定する「データ管理者（Data Controller）」として機能します。",
        ],
      },
      {
        id: "types",
        title: "3. 収集する個人データ項目",
        content: [
          "当社は、事業遂行に必要な範囲で以下の個人データを収集・処理する場合があります：",
        ],
        items: [
          "本人識別・連絡先情報：氏名、会社名/所属組織、ビジネスメールアドレス、電話番号、お問い合わせ内容。",
          "技術的データおよび利用状況：IPアドレス、端末識別子、ブラウザの種類、OS、アクセス日時、ログデータ。",
          "コミュニケーション記録：メールやお問い合わせフォームを通じたやり取りの履歴。",
        ],
      },
      {
        id: "bases",
        title: "4. データ処理の法的根拠",
        content: [
          "当社は、PDPA第24条に定める以下の法的根拠に基づき個人データを処理します：",
        ],
        items: [
          "同意（第19条）：マーケティング情報や事例ニュースレターの配信にお客様が同意された場合。",
          "契約の締結・履行（第24条第3号）：プロジェクトの提案や契約締結に向けた事前手続きを行う場合。",
          "正当な利益（第24条第5号）：システムセキュリティの維持、不正防止、サービスの品質向上のため。",
          "法的義務の遵守（第24条第6号）：税務関連法規や行政機関の適法な命令に基づく場合。",
        ],
      },
      {
        id: "sharing",
        title: "5. データの開示および越境移転",
        content: [
          "当社はお客様の個人データを厳重に管理し、以下の場合を除き第三者に開示しません：",
        ],
        items: [
          "厳格なセキュリティ基準を満たす委託先（クラウドサーバー、セキュリティ事業者等）。",
          "法令に基づく開示命令を有する裁判所や公的機関。",
          "タイ国外へデータを移転する場合、PDPA第28条および第29条に従い、適切な保護水準を確保します。",
        ],
      },
      {
        id: "retention",
        title: "6. 個人データの保管期間",
        content: [
          "当社は利用目的の達成に必要な期間、原則として最終のご連絡から最大2年間、または法令で定められた期間保管します。",
        ],
      },
      {
        id: "security",
        title: "7. 安全管理措置",
        content: [
          "当社は、TLS/SSLによる暗号化通信、厳格なアクセス権限管理、ファイアウォール等の最新の安全管理措置を講じ、個人データの不正アクセスや漏洩を防止します。",
        ],
      },
      {
        id: "rights",
        title: "8. PDPAに基づくデータ主体の権利",
        content: [
          "PDPA第30条から第36条に基づき、お客様は以下の権利を行使することができます：",
        ],
        items: [
          "通知を受ける権利（第23条）",
          "アクセスおよび写しを請求する権利（第30条）",
          "データポータビリティの権利（第31条）",
          "処理に異議を申し立てる権利（第32条）",
          "消去・破棄・匿名化を請求する権利（第33条）",
          "処理の停止を請求する権利（第34条）",
          "訂正を請求する権利（第35条）",
          "同意を撤回する権利（第19条）",
          "個人データ保護委員会（PDPC）に苦情を申し立てる権利（第73条）",
        ],
      },
      {
        id: "dpo",
        title: "9. お問い合わせ窓口",
        content: [
          "PDPAに関する権利行使のご請求やご質問は、下記までご連絡ください：",
        ],
      },
    ],
    contactBox: {
      title: "LUMENTIS (THAILAND) Co., Ltd.",
      companyName: "LUMENTIS (THAILAND) Co., Ltd.",
      addressLabel: "所在地",
      address: "タイ王国 バンコク バンラック区 シーロム通り ステートタワー50階 1055/1369（郵便番号 10500）",
      emailLabel: "メール",
      email: "contact@lumentisth.com",
      websiteLabel: "公式サイト",
      website: "https://lumentisth.com",
    },
  },
};

export const legalDictionaries: Record<Locale, LegalDictionary> = {
  en,
  th,
  zh,
  ja,
};
