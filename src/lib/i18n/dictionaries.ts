export type Locale = "en" | "th" | "zh";

const en = {
  nav: {
    solutions: "Solutions",
    platform: "Platform",
    contact: "Contact",
    getStarted: "Contact",
  },
  hero: {
    subtitle:
      "To become Thailand's most distinctive creative technology brand turning emerging technology into experiences, ideas and solutions people can actually see, use and feel.",
    ctaPrimary: "Start a project",
    ctaSecondary: "Explore the platform",
    scrollHint: "Scroll to explore",
  },
  showcase: {
    eyebrow: "The Lumentis Way",
    scenes: [
      {
        title: "Experiment.",
        body: "New technology creates possibilities every day. Some are easy to see — the most exciting ones are not. We get hands-on with emerging tech to uncover what could be next.",
      },
      {
        title: "Imagine.",
        body: "We bring creativity and technology together, shaping raw possibility into ideas people can actually picture — new ways to engage, work, grow, and stand out.",
      },
      {
        title: "Build.",
        body: "We turn ideas into real experiences, content, tools, and solutions — because technology is only powerful when possibility becomes real.",
      },
    ],
  },
  features: {
    eyebrow: "What we do",
    title: "Possibility, made real.",
    subtitle:
      "We turn emerging technology into creative marketing experiences and solutions.",
    items: [
      {
        title: "Immersive Experiences",
        body: "AR, VR, and interactive installations that let audiences step inside your brand.",
      },
      {
        title: "AI-Powered Creativity",
        body: "Generative content, campaign tools, and AI experiences that put brands ahead of their time.",
      },
      {
        title: "Interactive Web & Apps",
        body: "Websites, microsites, and apps built as experiences — playful, fast, and memorable.",
      },
      {
        title: "Creative Campaigns",
        body: "Technology-driven marketing that creates new ways to engage and stand out.",
      },
      {
        title: "Emerging-Tech Prototyping",
        body: "We experiment early — rapid prototypes that reveal what new technology can make possible.",
      },
      {
        title: "Creative Tools & Solutions",
        body: "Custom tools that turn new technology into everyday advantage for your team.",
      },
    ],
  },
  cta: {
    title1: "Let's build",
    title2: "what's next.",
    subtitle:
      "Tell us about your roadmap — we'll reply within one business day with a concrete plan.",
    email: "contact@lumentisth.com",
    emailLabel: "Email us",
    emailHint: "Replies within one business day",
    facebookLabel: "Follow us",
    facebookName: "Facebook — Lumentis",
    facebookHint: "News, culture, and case studies",
    visitLabel: "Visit us",
  },
  footer: {
    company: "LUMENTIS (THAILAND) Co., Ltd.",
    address: "1055/1369, 50th Floor, State Tower, Silom, Bang Rak, Bangkok 10500, Thailand",
    tagline: "Bring possibilities to light.",
    rights: "All rights reserved.",
    columns: [
      {
        title: "Solutions",
        links: ["Immersive Experiences", "AI-Powered Creativity", "Interactive Web & Apps", "Creative Campaigns"],
      },
      {
        title: "Company",
        links: ["About", "Careers", "Newsroom", "Contact"],
      },
      {
        title: "Legal",
        links: ["Privacy Policy", "Terms of Service", "PDPA Notice"],
      },
    ],
  },
};

const th: typeof en = {
  nav: {
    solutions: "โซลูชัน",
    platform: "แพลตฟอร์ม",
    contact: "ติดต่อเรา",
    getStarted: "ติดต่อเรา",
  },
  hero: {
    subtitle:
      "มุ่งสู่การเป็นแบรนด์ creative technology ที่โดดเด่นที่สุดของประเทศไทย เปลี่ยนเทคโนโลยีใหม่ให้เป็นประสบการณ์ ไอเดีย และโซลูชันที่ผู้คนมองเห็น ใช้งาน และสัมผัสได้จริง",
    ctaPrimary: "เริ่มโปรเจกต์",
    ctaSecondary: "สำรวจแพลตฟอร์ม",
    scrollHint: "เลื่อนเพื่อสำรวจ",
  },
  showcase: {
    eyebrow: "วิถีของ Lumentis",
    scenes: [
      {
        title: "ทดลอง",
        body: "เทคโนโลยีใหม่สร้างความเป็นไปได้ทุกวัน บางอย่างมองเห็นง่าย แต่สิ่งที่น่าตื่นเต้นที่สุดมักซ่อนอยู่ เราลงมือทดลองกับเทคโนโลยีใหม่ล่าสุดเพื่อค้นหาสิ่งที่จะมาถึง",
      },
      {
        title: "จินตนาการ",
        body: "เราผสานความคิดสร้างสรรค์เข้ากับเทคโนโลยี ปั้นความเป็นไปได้ให้เป็นไอเดียที่มองเห็นภาพ — วิธีใหม่ในการเข้าถึงผู้คน ทำงาน เติบโต และโดดเด่น",
      },
      {
        title: "สร้างให้เป็นจริง",
        body: "เราเปลี่ยนไอเดียให้เป็นประสบการณ์ คอนเทนต์ เครื่องมือ และโซลูชันจริง เพราะเทคโนโลยีจะทรงพลังก็ต่อเมื่อความเป็นไปได้กลายเป็นของจริง",
      },
    ],
  },
  features: {
    eyebrow: "สิ่งที่เราทำ",
    title: "เปลี่ยนความเป็นไปได้ให้เป็นของจริง",
    subtitle:
      "เราเปลี่ยนเทคโนโลยีใหม่ให้เป็นประสบการณ์การตลาดเชิงสร้างสรรค์และโซลูชัน",
    items: [
      {
        title: "ประสบการณ์ Immersive",
        body: "AR, VR และ interactive installation ที่พาผู้ชมก้าวเข้าไปอยู่ในแบรนด์ของคุณ",
      },
      {
        title: "ความคิดสร้างสรรค์ด้วย AI",
        body: "Generative content เครื่องมือแคมเปญ และประสบการณ์ AI ที่พาแบรนด์ล้ำไปข้างหน้า",
      },
      {
        title: "เว็บและแอปเชิงประสบการณ์",
        body: "เว็บไซต์ microsite และแอปที่ออกแบบเป็นประสบการณ์ — สนุก เร็ว และน่าจดจำ",
      },
      {
        title: "แคมเปญสร้างสรรค์",
        body: "การตลาดที่ขับเคลื่อนด้วยเทคโนโลยี สร้างวิธีใหม่ในการเข้าถึงผู้คนและโดดเด่นเหนือใคร",
      },
      {
        title: "ต้นแบบเทคโนโลยีใหม่",
        body: "เราทดลองก่อนใคร — prototype ที่รวดเร็ว เผยให้เห็นว่าเทคโนโลยีใหม่ทำอะไรได้บ้าง",
      },
      {
        title: "เครื่องมือและโซลูชันสร้างสรรค์",
        body: "เครื่องมือเฉพาะทางที่เปลี่ยนเทคโนโลยีใหม่ให้เป็นความได้เปรียบในทุกวันของทีมคุณ",
      },
    ],
  },
  cta: {
    title1: "มาสร้างสิ่งต่อไป",
    title2: "ไปด้วยกัน",
    subtitle:
      "เล่าเป้าหมายของคุณให้เราฟัง — เราจะตอบกลับภายใน 1 วันทำการพร้อมแผนที่จับต้องได้",
    email: "contact@lumentisth.com",
    emailLabel: "อีเมลหาเรา",
    emailHint: "ตอบกลับภายใน 1 วันทำการ",
    facebookLabel: "ติดตามเรา",
    facebookName: "Facebook — Lumentis",
    facebookHint: "ข่าวสาร ผลงาน และเบื้องหลังทีม",
    visitLabel: "สำนักงาน",
  },
  footer: {
    company: "บริษัท ลูเมนทิส (ประเทศไทย) จำกัด",
    address: "1055/1369 ชั้น 50 อาคาร State Tower แขวงสีลม เขตบางรัก กรุงเทพมหานคร 10500",
    tagline: "Bring possibilities to light.",
    rights: "สงวนลิขสิทธิ์",
    columns: [
      {
        title: "โซลูชัน",
        links: ["ประสบการณ์ Immersive", "AI Creativity", "เว็บเชิงประสบการณ์", "แคมเปญสร้างสรรค์"],
      },
      {
        title: "บริษัท",
        links: ["เกี่ยวกับเรา", "ร่วมงานกับเรา", "ข่าวสาร", "ติดต่อเรา"],
      },
      {
        title: "กฎหมาย",
        links: ["นโยบายความเป็นส่วนตัว", "ข้อกำหนดการใช้งาน", "ประกาศ PDPA"],
      },
    ],
  },
};

const zh: typeof en = {
  nav: {
    solutions: "解决方案",
    platform: "平台",
    contact: "联系我们",
    getStarted: "联系我们",
  },
  hero: {
    subtitle:
      "立志成为泰国最具辨识度的创意科技品牌——把新兴科技变成人们真正看得见、用得上、感受得到的体验、想法与解决方案。",
    ctaPrimary: "启动项目",
    ctaSecondary: "探索平台",
    scrollHint: "向下滚动探索",
  },
  showcase: {
    eyebrow: "Lumentis 之道",
    scenes: [
      {
        title: "实验。",
        body: "新科技每天都在创造可能。有些显而易见，最令人兴奋的往往藏在深处。我们亲手实验新兴科技，探索下一个可能。",
      },
      {
        title: "想象。",
        body: "我们让创意与科技相遇，把原始的可能性塑造成看得见的想法——全新的方式去触达、工作、成长、脱颖而出。",
      },
      {
        title: "构建。",
        body: "我们把想法变成真实的体验、内容、工具与解决方案——因为唯有可能成真，科技才真正有力量。",
      },
    ],
  },
  features: {
    eyebrow: "我们做什么",
    title: "让可能成为现实。",
    subtitle: "我们把新兴科技变成创意营销体验与解决方案。",
    items: [
      {
        title: "沉浸式体验",
        body: "AR、VR 与互动装置，让受众走进你的品牌。",
      },
      {
        title: "AI 创造力",
        body: "生成式内容、营销工具与 AI 体验，让品牌走在时代之前。",
      },
      {
        title: "体验型网站与应用",
        body: "把网站、微站与应用做成体验——好玩、快速、难忘。",
      },
      {
        title: "创意营销活动",
        body: "科技驱动的营销，创造全新的触达方式，让品牌脱颖而出。",
      },
      {
        title: "新科技原型",
        body: "我们先人一步实验——快速原型揭示新科技能带来的可能。",
      },
      {
        title: "创意工具与方案",
        body: "定制工具，把新科技变成团队每天的优势。",
      },
    ],
  },
  cta: {
    title1: "一起构建",
    title2: "下一个可能。",
    subtitle: "告诉我们你的路线图——我们将在一个工作日内回复一份切实可行的方案。",
    email: "contact@lumentisth.com",
    emailLabel: "邮件联系",
    emailHint: "一个工作日内回复",
    facebookLabel: "关注我们",
    facebookName: "Facebook — Lumentis",
    facebookHint: "动态、案例与团队日常",
    visitLabel: "拜访我们",
  },
  footer: {
    company: "LUMENTIS (THAILAND) Co., Ltd.",
    address: "泰国曼谷挽叻区是隆 State Tower 大厦 50 层 1055/1369，邮编 10500",
    tagline: "Bring possibilities to light.",
    rights: "版权所有。",
    columns: [
      {
        title: "解决方案",
        links: ["沉浸式体验", "AI 创造力", "体验型网站", "创意营销"],
      },
      {
        title: "公司",
        links: ["关于我们", "加入我们", "新闻中心", "联系我们"],
      },
      {
        title: "法律",
        links: ["隐私政策", "服务条款", "PDPA 声明"],
      },
    ],
  },
};

export const dictionaries = { en, th, zh } as const;
export type Dictionary = typeof en;
