import type { Locale } from "./dictionaries";

export interface AboutValue {
  step: string;
  title: string;
  description: string;
}

export interface AboutCapability {
  title: string;
  description: string;
  tag: string;
}

export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutDictionary {
  badge: string;
  title1: string;
  title2: string;
  subtitle: string;
  story: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
  };
  vision: {
    eyebrow: string;
    title: string;
    description: string;
    missionTitle: string;
    missionDescription: string;
  };
  values: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: AboutValue[];
  };
  capabilities: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: AboutCapability[];
  };
  stats: AboutStat[];
  office: {
    eyebrow: string;
    title: string;
    description: string;
    locationTitle: string;
    address: string;
    emailTitle: string;
    email: string;
    hoursTitle: string;
    hours: string;
  };
  cta: {
    title1: string;
    title2: string;
    subtitle: string;
    button: string;
  };
}

const en: AboutDictionary = {
  badge: "About Lumentis",
  title1: "We Bring Possibilities",
  title2: "to Light.",
  subtitle:
    "Lumentis is a creative technology company based in Bangkok. We transform emerging technologies into tangible digital experiences, creative campaigns, and tools people can actually see, use, and feel.",
  story: {
    eyebrow: "Our Origin",
    title: "At the intersection of imagination and bleeding-edge technology.",
    p1: "Founded in Bangkok, Thailand, Lumentis was born from a clear conviction: emerging technology only truly matters when it transcends theory and becomes an unforgettable human experience.",
    p2: "In a world overwhelmed with buzzwords and fast-moving tech cycles, we act as the bridge between raw engineering capability and bold creative expression. We don't just speculate about the future—we prototype it, test it, and build it.",
    p3: "From immersive AR/VR experiences and AI-augmented creative pipelines to next-generation interactive web platforms, our multidisciplinary team partners with visionary brands and enterprises across Southeast Asia and globally.",
  },
  vision: {
    eyebrow: "Vision & Mission",
    title: "To become Thailand's most distinctive creative technology brand.",
    description:
      "We envision a landscape where technology elevates human creativity rather than replacing it—creating new mediums for connection, storytelling, work, and cultural expression.",
    missionTitle: "Our Mission",
    missionDescription:
      "To discover latent possibilities in emerging tech through relentless experimentation, translating raw innovation into high-impact products, brand experiences, and proprietary tools.",
  },
  values: {
    eyebrow: "The Lumentis DNA",
    title: "How we think and build",
    subtitle: "Three core principles guide every project, prototype, and line of code we craft.",
    items: [
      {
        step: "01",
        title: "Experiment Fearlessly",
        description:
          "New breakthroughs happen daily. The most transformative ones are hidden beneath the surface. We dive deep into new tech hands-on to discover what others overlook.",
      },
      {
        step: "02",
        title: "Imagine with Rigor",
        description:
          "Technology without imagination is mechanical; creativity without tech execution is ethereal. We fuse both, shaping possibilities into vivid, actionable concepts.",
      },
      {
        step: "03",
        title: "Build with Craft",
        description:
          "Ideas only matter when shipped. We craft resilient, performant, and delightful digital experiences engineered to withstand real-world demands and scale gracefully.",
      },
    ],
  },
  capabilities: {
    eyebrow: "What We Do",
    title: "Our core capability domains",
    subtitle: "Where creative storytelling meets advanced technical architecture.",
    items: [
      {
        tag: "Immersive Tech",
        title: "Immersive & Spatial Experiences",
        description: "Augmented reality (AR), virtual reality (VR), mixed reality (XR), and interactive spatial installations that invite audiences inside your brand world.",
      },
      {
        tag: "Artificial Intelligence",
        title: "AI-Powered Creativity & Pipelines",
        description: "Generative AI engines, bespoke workflow accelerators, automated content pipelines, and interactive AI agents tailored for brands and creative teams.",
      },
      {
        tag: "Web & Apps",
        title: "Interactive Web & Digital Products",
        description: "High-performance websites, 3D WebGL experiences, microsites, and custom web applications designed to be fast, playful, and unforgettable.",
      },
      {
        tag: "Marketing & Strategy",
        title: "Creative Tech Brand Activations",
        description: "Technology-driven campaigns and interactive physical-digital activations that captivate audiences and establish brand differentiation.",
      },
      {
        tag: "R&D",
        title: "Emerging-Tech Prototyping",
        description: "Rapid proof-of-concept development testing new frameworks, hardware integrations, and APIs before market readiness.",
      },
      {
        tag: "Custom Solutions",
        title: "Custom Creative Tools & Systems",
        description: "Tailor-made software platforms and internal tools that turn new technological paradigms into a permanent competitive advantage.",
      },
    ],
  },
  stats: [
    { value: "50th Fl.", label: "State Tower HQ, Bangkok" },
    { value: "4+", label: "Supported Languages" },
    { value: "100%", label: "Custom Architecture & Design" },
    { value: "24h", label: "Project Inquiry Response Time" },
  ],
  office: {
    eyebrow: "Headquarters",
    title: "Crafted in the heart of Bangkok",
    description: "Located high above the vibrant skyline of Bangkok's Si Lom financial and creative district.",
    locationTitle: "Address",
    address: "1055/1369, 50th Floor, State Tower, Si Lom Rd, Si Lom, Bang Rak, Bangkok 10500, Thailand",
    emailTitle: "General Inquiries",
    email: "contact@lumentisth.com",
    hoursTitle: "Working Hours",
    hours: "Monday – Friday: 09:00 – 18:00 (GMT+7)",
  },
  cta: {
    title1: "Ready to build",
    title2: "what's next?",
    subtitle: "Share your vision with us. We'll collaborate to bring your technological roadmap to light with precision and passion.",
    button: "Get in Touch",
  },
};

const th: AboutDictionary = {
  badge: "เกี่ยวกับ ลูเมนทิส",
  title1: "เราเปลี่ยนความเป็นไปได้",
  title2: "ให้กลายเป็นจริง",
  subtitle:
    "Lumentis คือบริษัท Creative Technology ในกรุงเทพฯ ที่มุ่งมั่นเปลี่ยนเทคโนโลยีใหม่ให้เป็นประสบการณ์ดิจิทัล แคมเปญสร้างสรรค์ และเครื่องมือที่ผู้คนสามารถมองเห็น ใช้งาน และสัมผัสได้จริง",
  story: {
    eyebrow: "จุดเริ่มต้นของเรา",
    title: "จุดบรรจบระหว่างจินตนาการและเทคโนโลยีล้ำสมัย",
    p1: "บริษัท ลูเมนทิส (ประเทศไทย) จำกัด ก่อตั้งขึ้นในกรุงเทพมหานคร ด้วยความเชื่อมั่นอันแรงกล้าว่า เทคโนโลยีใหม่จะทรงพลังอย่างแท้จริง ก็ต่อเมื่อมันก้าวข้ามกรอบทฤษฎีและกลายมาเป็นประสบการณ์ที่สร้างความประทับใจให้แก่ผู้คน",
    p2: "ในยุคสมัยที่เต็มไปด้วยคำศัพท์ทางเทคโนโลยีและการเปลี่ยนแปลงอย่างรวดเร็ว เราทำหน้าที่เป็นสะพานเชื่อมระหว่างขีดความสามารถทางวิศวกรรมขั้นสูงกับความคิดสร้างสรรค์อันไร้ขีดจำกัด เราไม่ได้เพียงคาดเดาอนาคต แต่เราลงมือสร้างต้นแบบ ทดสอบ และพัฒนาให้เกิดขึ้นจริง",
    p3: "ตั้งแต่ประสบการณ์ Immersive AR/VR, กระบวนการสร้างสรรค์ด้วย Generative AI ไปจนถึงแพลตฟอร์มเว็บไซต์เชิงปฏิสัมพันธ์ ทีมงานสหวิทยาการของเราพร้อมเป็นพันธมิตรกับแบรนด์และองค์กรชั้นนำทั่วภูมิภาค",
  },
  vision: {
    eyebrow: "วิสัยทัศน์และพันธกิจ",
    title: "มุ่งสู่การเป็นแบรนด์ Creative Technology ที่โดดเด่นที่สุดในประเทศไทย",
    description:
      "เรามุ่งสร้างสรรค์ระบบนิเวศที่เทคโนโลยีช่วยส่งเสริมศักยภาพความคิดสร้างสรรค์ของมนุษย์ เปิดประตูสู่รูปแบบใหม่ของการสื่อสาร การเล่าเรื่อง การทำงาน และการเติบโตของธุรกิจ",
    missionTitle: "พันธกิจของเรา",
    missionDescription:
      "ค้นหาความเป็นไปได้ที่ซ่อนอยู่ในเทคโนโลยีใหม่ผ่านการทดลองอย่างไม่หยุดยั้ง แปลงนวัตกรรมดิบให้กลายเป็นผลิตภัณฑ์ ประสบการณ์แบรนด์ และเครื่องมือที่สร้างผลลัพธ์จับต้องได้",
  },
  values: {
    eyebrow: "ดีเอ็นเอของ Lumentis",
    title: "วิธีคิดและวิธีการสร้างสรรค์งาน",
    subtitle: "3 หลักการสำคัญที่ขับเคลื่อนทุกโปรเจกต์ ต้นแบบ และทุกบรรทัดของโค้ดที่เราสร้างขึ้น",
    items: [
      {
        step: "01",
        title: "ทดลองอย่างกล้าหาญ (Experiment)",
        description:
          "เทคโนโลยีใหม่เกิดขึ้นทุกวัน และสิ่งที่มีพลังพลิกโฉมที่สุดมักซ่อนอยู่ เราลงมือทดลองกับเทคโนโลยีใหม่อย่างลึกซึ้งเพื่อค้นพบสิ่งที่คนอื่นมองข้าม",
      },
      {
        step: "02",
        title: "จินตนาการอย่างแม่นยำ (Imagine)",
        description:
          "เทคโนโลยีที่ไร้จินตนาการจะแข็งกระด้าง ส่วนความคิดสร้างสรรค์ที่ขาดการปฏิบัติจริงก็เป็นเพียงความฝัน เราผสานทั้งสองสิ่งเข้าด้วยกันเพื่อปั้นไอเดียให้เห็นภาพชัดเจน",
      },
      {
        step: "03",
        title: "สร้างสรรค์อย่างประณีต (Build)",
        description:
          "ไอเดียจะมีคุณค่าก็ต่อเมื่อถูกส่งมอบจริง เราพัฒนาประสบการณ์ดิจิทัลที่มีประสิทธิภาพสูง ปลอดภัย เสถียร และพร้อมรองรับการเติบโตในโลกความเป็นจริง",
      },
    ],
  },
  capabilities: {
    eyebrow: "สิ่งที่เราเชี่ยวชาญ",
    title: "ขอบเขตความเชี่ยวชาญหลัก",
    subtitle: "การผสานการเล่าเรื่องเชิงสร้างสรรค์เข้ากับสถาปัตยกรรมเทคโนโลยีระดับสูง",
    items: [
      {
        tag: "Immersive Tech",
        title: "ประสบการณ์ Immersive & Spatial",
        description: "เทคโนโลยี Augmented Reality (AR), Virtual Reality (VR), Mixed Reality (XR) และ Interactive Installation ที่พาผู้ชมก้าวเข้าสู่โลกของแบรนด์",
      },
      {
        tag: "Artificial Intelligence",
        title: "ความคิดสร้างสรรค์และระบบ AI",
        description: "การพัฒนา Generative AI, ระบบเร่งความเร็วการทำงาน, เครื่องมือสร้างสรรค์คอนเทนต์อัตโนมัติ และ AI Agent สำหรับแบรนด์",
      },
      {
        tag: "Web & Apps",
        title: "เว็บไซต์และผลิตภัณฑ์ดิจิทัลเชิงปฏิสัมพันธ์",
        description: "เว็บไซต์ประสิทธิภาพสูง, ประสบการณ์ 3D WebGL, ไมโครไซต์ และเว็บแอปพลิเคชันที่รวดเร็ว สนุก และน่าจดจำ",
      },
      {
        tag: "Marketing & Strategy",
        title: "แคมเปญสร้างสรรค์ขับเคลื่อนด้วยเทคโนโลยี",
        description: "แคมเปญการตลาดดิจิทัลและกิจกรรม Physical-Digital ที่ดึงดูดความสนใจและสร้างความแตกต่างที่ชัดเจนให้แก่แบรนด์",
      },
      {
        tag: "R&D",
        title: "การพัฒนาต้นแบบเทคโนโลยีใหม่",
        description: "การสร้าง Proof-of-Concept อย่างรวดเร็ว เพื่อทดสอบเทคโนโลยี API และฮาร์ดแวร์ใหม่ก่อนนำมาใช้งานจริงในตลาด",
      },
      {
        tag: "Custom Solutions",
        title: "เครื่องมือและโซลูชันเฉพาะทาง",
        description: "การพัฒนาระบบและเครื่องมือภายในเฉพาะองค์กร เพื่อเปลี่ยนเทคโนโลยีใหม่ให้กลายเป็นความได้เปรียบในการแข่งขันที่ยั่งยืน",
      },
    ],
  },
  stats: [
    { value: "ชั้น 50", label: "อาคาร State Tower สีลม กรุงเทพฯ" },
    { value: "4+", label: "ภาษารองรับบนแพลตฟอร์ม" },
    { value: "100%", label: "งานออกแบบและสถาปัตยกรรมเฉพาะ" },
    { value: "24 ชม.", label: "เวลาตอบกลับการติดต่อโปรเจกต์" },
  ],
  office: {
    eyebrow: "สำนักงานใหญ่",
    title: "สร้างสรรค์ใจกลางกรุงเทพมหานคร",
    description: "ตั้งอยู่บนชั้น 50 มองเห็นทิวทัศน์อันงดงามของย่านธุรกิจและการเงินสีลม กรุงเทพฯ",
    locationTitle: "ที่อยู่สำนักงาน",
    address: "1055/1369 ชั้น 50 อาคาร State Tower ถนนสีลม แขวงสีลม เขตบางรัก กรุงเทพมหานคร 10500",
    emailTitle: "อีเมลติดต่อทั่วไป",
    email: "contact@lumentisth.com",
    hoursTitle: "เวลาทำการ",
    hours: "จันทร์ – ศุกร์: 09:00 – 18:00 น. (เวลาประเทศไทย)",
  },
  cta: {
    title1: "พร้อมที่จะสร้างสิ่งใหม่",
    title2: "ไปด้วยกันหรือยัง?",
    subtitle: "เล่าเป้าหมายและวิสัยทัศน์ของคุณให้เราฟัง เราพร้อมร่วมมือเปลี่ยนทุกความเป็นไปได้ทางเทคโนโลยีให้สว่างไสว",
    button: "ติดต่อร่วมงานกับเรา",
  },
};

const zh: AboutDictionary = {
  badge: "关于 Lumentis",
  title1: "让新兴科技的可能",
  title2: "绽放成真",
  subtitle:
    "Lumentis 是一家位于曼谷的创意科技公司。我们致力于将前沿新兴科技转化为人们真正看得见、用得上、感受得到的数字化体验、创意营销活动与工具解决方案。",
  story: {
    eyebrow: "品牌渊源",
    title: "站在想象力与硬核科技的交汇点",
    p1: "Lumentis (Thailand) Co., Ltd. 创立于泰国曼谷，源于一个笃定的信念：唯有超越抽象理论、转化为深入人心的真实体验，新兴科技才拥有真正的生命力。",
    p2: "在科技概念层出不穷、技术更迭瞬息万变的时代，我们充当尖端工程实力与大胆创意表达之间的桥梁。我们不空谈未来，而是亲自动手实验、制作原型并将其打造成落地产品。",
    p3: "从沉浸式 AR/VR 互动体验、AI 赋能的创意生产力管线，到次世代交互式 Web 平台，我们的跨学科团队携手东南亚及全球的远见品牌共同开拓前沿。",
  },
  vision: {
    eyebrow: "愿景与使命",
    title: "立志成为泰国最具辨识度的创意科技品牌",
    description:
      "我们坚信科技应当赋能并升华人类的创造力，为品牌连接、视觉叙事、高效协作和文化表达开辟全新的可能维度。",
    missionTitle: "我们的使命",
    missionDescription:
      "通过不懈的实验与探索，发掘新技术中蕴藏的深层潜能，将原始创新转化为高影响力的产品、品牌体验和专属工具。",
  },
  values: {
    eyebrow: "Lumentis 之道",
    title: "我们的思维与构建哲学",
    subtitle: "三大核心原则指引着我们的每一个项目、每一个原型与每一行代码。",
    items: [
      {
        step: "01",
        title: "无畏实验 (Experiment)",
        description:
          "新突破每天都在涌现，最具颠覆性的往往藏于表象之下。我们亲手深入最新科技，发掘别人尚未察觉的机遇。",
      },
      {
        step: "02",
        title: "严谨想象 (Imagine)",
        description:
          "缺乏想象的科技冰冷机械，脱离技术的创意虚无缥缈。我们将两者深度融合，将可能性转化为清晰可行的概念。",
      },
      {
        step: "03",
        title: "匠心构建 (Build)",
        description:
          "想法唯有落地交付才具有价值。我们精心打造高性能、高可靠、富于美感的数字化体验，经得起严苛环境的检验。",
      },
    ],
  },
  capabilities: {
    eyebrow: "核心业务",
    title: "专业能力领域",
    subtitle: "当创意叙事遇见先进的技术架构。",
    items: [
      {
        tag: "沉浸式科技",
        title: "沉浸式与空间计算体验",
        description: "增强现实（AR）、虚拟现实（VR）、混合现实（XR）及线下互动装置，让受众身临其境走进品牌世界。",
      },
      {
        tag: "人工智能",
        title: "AI 创意与生产力管线",
        description: "生成式 AI 工作流、自动化内容生成工具及定制化 AI 智能体，让品牌走在时代前沿。",
      },
      {
        tag: "网站与应用",
        title: "交互式网站与数字产品",
        description: "高性能 Web 应用、3D WebGL 体验、创意微站与定制化产品，快速、好玩且令人难忘。",
      },
      {
        tag: "营销与策略",
        title: "科技驱动的品牌创意活动",
        description: "虚实结合的线上线下科技营销活动，打造极具辨识度的品牌影响力与互动触点。",
      },
      {
        tag: "研发与原型",
        title: "前沿科技快速原型开发",
        description: "快速构建概念验证（PoC），在技术走向主流之前验证新硬件、新框架与新 API 的可行性。",
      },
      {
        tag: "定制方案",
        title: "专属创意工具与系统",
        description: "为企业量身定制内部工具与软件系统，把新技术转化为团队日常的持久竞争优势。",
      },
    ],
  },
  stats: [
    { value: "50 层", label: "曼谷 State Tower 大厦总部" },
    { value: "4+", label: "多语言国际化支持" },
    { value: "100%", label: "量身定制架构与设计" },
    { value: "24 小时", label: "项目咨询响应时间" },
  ],
  office: {
    eyebrow: "公司总部",
    title: "诞生于曼谷的创意核心",
    description: "坐落于曼谷繁华的是隆金融与创意区高空，俯瞰城市天际线。",
    locationTitle: "办公地址",
    address: "泰国曼谷挽叻区是隆路 State Tower 大厦 50 层 1055/1369，邮编 10500",
    emailTitle: "业务咨询",
    email: "contact@lumentisth.com",
    hoursTitle: "工作时间",
    hours: "周一至周五：09:00 – 18:00（曼谷时间 GMT+7）",
  },
  cta: {
    title1: "准备好一起构建",
    title2: "下一个可能了吗？",
    subtitle: "告诉我们您的愿景与路线图，我们将以极致的专业与热情，助您的技术蓝图绽放成真。",
    button: "立即取得联系",
  },
};

const ja: AboutDictionary = {
  badge: "Lumentis について",
  title1: "テクノロジーの可能性を、",
  title2: "光ある現実へ。",
  subtitle:
    "Lumentis はバンコクを拠点とするクリエイティブ・テクノロジー企業です。最先端技術を、人が実際に見て、使って、心で感じられるデジタル体験、クリエイティブキャンペーン、ツールへと昇華させます。",
  story: {
    eyebrow: "私たちの原点",
    title: "想像力と先端テクノロジーの交差点に立つ",
    p1: "LUMENTIS (THAILAND) Co., Ltd. はタイ・バンコクにて設立されました。「新しいテクノロジーは、理論を超えて人の心に残る体験となってこそ真の力を発揮する」という強い信念が出発点です。",
    p2: "バズワードが溢れテクノロジーが急速に移り変わる現代において、私たちは高度なエンジニアリング力と大胆なクリエイティビティをつなぐ架け橋となります。未来を語るだけでなく、プロトタイプを作り、実験し、形にします。",
    p3: "没入型 AR/VR 体験から生成 AI を活用した制作ワークフロー、次世代のインタラクティブ Web プラットフォームまで、東南アジアおよび世界の先進ブランドとともに新たな可能性を切り拓いています。",
  },
  vision: {
    eyebrow: "ビジョン＆ミッション",
    title: "タイで最も個性的なクリエイティブ・テクノロジー・ブランドへ",
    description:
      "テクノロジーが人間の創造性を奪うのではなく、さらに高める未来を信じています。人とつながり、ストーリーを伝え、働き、文化を表現するための新たな表現媒体を創出します。",
    missionTitle: "私たちのミッション",
    missionDescription:
      "絶え間ない実験を通じて先端技術に眠る可能性を掘り起こし、生きたイノベーションを圧倒的なインパクトを持つプロダクト、ブランド体験、独自ツールへと具現化すること。",
  },
  values: {
    eyebrow: "Lumentis の DNA",
    title: "思考とものづくりの哲学",
    subtitle: "すべてのプロジェクト、プロトタイプ、コードに息づく 3 つの基本原則。",
    items: [
      {
        step: "01",
        title: "恐れずに実験する (Experiment)",
        description:
          "毎日のように新たな技術が登場します。最も革新的なものは表面には現れません。私たちは先端技術に直接触れ、他が見落とす可能性を掘り起こします。",
      },
      {
        step: "02",
        title: "緻密に想像する (Imagine)",
        description:
          "想像力のない技術は無機質であり、実装力を欠くクリエイティブはただの夢に過ぎません。両者を高い次元で融合させ、可能性を確かな形へと導きます。",
      },
      {
        step: "03",
        title: "職人技で形にする (Build)",
        description:
          "アイデアは届けてはじめて意味を持ちます。堅牢で高速、美しく心地よいデジタル体験を、実環境での高い要求に耐えうる精度で作り上げます。",
      },
    ],
  },
  capabilities: {
    eyebrow: "事業内容",
    title: "コアとなる専門領域",
    subtitle: "クリエイティブなストーリーテリングと高度な技術アーキテクチャの融合。",
    items: [
      {
        tag: "没入型技術",
        title: "没入型・空間コンピューティング体験",
        description: "AR（拡張現実）、VR（仮想現実）、XR（複合現実）、空間インスタレーションにより、ブランドの世界へ深く没入する体験を設計します。",
      },
      {
        tag: "人工知能",
        title: "AI × クリエイティブパイプライン",
        description: "生成 AI パイプライン、業務アクセラレーター、自動コンテンツ生成、ブランド専用 AI エージェントの設計・開発。",
      },
      {
        tag: "Web & アプリ",
        title: "インタラクティブ Web & デジタルプロダクト",
        description: "高速・美麗な Web アプリケーション、3D WebGL 演出、キャンペーンマイクロサイトなど、記憶に残る体験を提供します。",
      },
      {
        tag: "マーケティング",
        title: "テクノロジー主導のブランド体験",
        description: "デジタルとリアルを融合したインタラクティブなブランドアクティベーションで、際立つ存在感を生み出します。",
      },
      {
        tag: "研究開発",
        title: "先端技術プロトタイピング",
        description: "新技術、ハードウェア連携、最新 API の実現可能性を早期に検証する高速プロトタイプ開発（PoC）。",
      },
      {
        tag: "カスタム開発",
        title: "独自クリエイティブツール・システム",
        description: "最新技術をチームの日々の強みと持続的な競争優位に変える専用ソフトウェアの開発。",
      },
    ],
  },
  stats: [
    { value: "50階", label: "バンコク State Tower 本社" },
    { value: "4+", label: "対応言語" },
    { value: "100%", label: "完全オーダーメイド設計・実装" },
    { value: "24h以内", label: "プロジェクト相談への返信" },
  ],
  office: {
    eyebrow: "オフィス",
    title: "バンコクの中心から発信",
    description: "バンコク・シーロム地区のランドマーク「State Tower」50階に位置し、活気ある街並みを一望できます。",
    locationTitle: "所在地",
    address: "タイ王国 バンコク バンラック区 シーロム通り ステートタワー50階 1055/1369（郵便番号 10500）",
    emailTitle: "お問い合わせ",
    email: "contact@lumentisth.com",
    hoursTitle: "営業時間",
    hours: "月曜〜金曜：09:00 – 18:00（タイ時間 GMT+7）",
  },
  cta: {
    title1: "次の可能性を、",
    title2: "一緒に創りませんか？",
    subtitle: "構想やビジョンをお聞かせください。情熱と確かな技術力で、あなたのプロジェクトに光を灯します。",
    button: "お問い合わせはこちら",
  },
};

export const aboutDictionaries: Record<Locale, AboutDictionary> = {
  en,
  th,
  zh,
  ja,
};
