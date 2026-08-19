export type Locale = "en" | "th" | "zh";

const en = {
  nav: {
    solutions: "Solutions",
    platform: "Platform",
    contact: "Contact",
    getStarted: "Contact",
  },
  hero: {
    eyebrow: "Lumentis (Thailand) Co., Ltd.",
    title1: "Technology that",
    title2: "illuminates business.",
    subtitle:
      "We design, build, and operate digital platforms for enterprises across Southeast Asia — from cloud infrastructure to AI-powered products.",
    ctaPrimary: "Start a project",
    ctaSecondary: "Explore the platform",
    scrollHint: "Scroll to explore",
  },
  showcase: {
    eyebrow: "The Lumentis Platform",
    scenes: [
      {
        title: "Cloud-native to the core.",
        body: "Kubernetes-first architecture on AWS, GCP, and on-prem — zero-downtime deploys, autoscaling, and observability built in from day one.",
      },
      {
        title: "AI where it matters.",
        body: "Production LLM pipelines, demand forecasting, and computer-vision QA — measured by business outcomes, not demos.",
      },
      {
        title: "Secure by design.",
        body: "ISO 27001-aligned practices, end-to-end encryption, and PDPA compliance baked into every layer of the stack.",
      },
    ],
  },
  features: {
    eyebrow: "Capabilities",
    title: "One partner. Full stack.",
    subtitle:
      "From first sketch to global scale, every discipline you need lives under one roof.",
    items: [
      {
        title: "Cloud Architecture",
        body: "Multi-cloud landing zones, IaC with Terraform, and FinOps that cut infra spend by up to 40%.",
      },
      {
        title: "AI & Data Engineering",
        body: "Lakehouse platforms, real-time pipelines, and custom ML models deployed to production.",
      },
      {
        title: "Product Engineering",
        body: "Web and mobile apps with design systems, CI/CD, and 99.95% uptime SLAs.",
      },
      {
        title: "Cybersecurity",
        body: "Pentesting, SOC monitoring, and zero-trust rollouts for regulated industries.",
      },
      {
        title: "Digital Transformation",
        body: "Legacy modernization and process automation with measurable ROI in the first quarter.",
      },
      {
        title: "Managed Operations",
        body: "24/7 NOC in Bangkok, SRE on-call, and proactive incident response under 15 minutes.",
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
    address: "1035/20 Ploenchit Road, Lumphini, Pathum Wan, Bangkok 10330, Thailand",
    tagline: "Technology that illuminates business.",
    rights: "All rights reserved.",
    columns: [
      {
        title: "Solutions",
        links: ["Cloud Architecture", "AI & Data", "Product Engineering", "Cybersecurity"],
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
    eyebrow: "บริษัท ลูเมนทิส (ประเทศไทย) จำกัด",
    title1: "เทคโนโลยีที่",
    title2: "ส่องสว่างธุรกิจคุณ",
    subtitle:
      "เราออกแบบ พัฒนา และดูแลแพลตฟอร์มดิจิทัลสำหรับองค์กรทั่วเอเชียตะวันออกเฉียงใต้ ตั้งแต่โครงสร้างพื้นฐานคลาวด์ไปจนถึงผลิตภัณฑ์ที่ขับเคลื่อนด้วย AI",
    ctaPrimary: "เริ่มโปรเจกต์",
    ctaSecondary: "สำรวจแพลตฟอร์ม",
    scrollHint: "เลื่อนเพื่อสำรวจ",
  },
  showcase: {
    eyebrow: "แพลตฟอร์ม Lumentis",
    scenes: [
      {
        title: "Cloud-native ตั้งแต่แกนกลาง",
        body: "สถาปัตยกรรม Kubernetes-first บน AWS, GCP และ on-prem — deploy แบบ zero-downtime, autoscaling และ observability ตั้งแต่วันแรก",
      },
      {
        title: "AI ในจุดที่สร้างมูลค่า",
        body: "LLM pipeline ระดับ production, การพยากรณ์ดีมานด์ และ computer-vision QA — วัดผลด้วยผลลัพธ์ทางธุรกิจ ไม่ใช่แค่เดโม",
      },
      {
        title: "ปลอดภัยตั้งแต่การออกแบบ",
        body: "แนวปฏิบัติตามมาตรฐาน ISO 27001 การเข้ารหัสแบบ end-to-end และการปฏิบัติตาม PDPA ในทุกชั้นของระบบ",
      },
    ],
  },
  features: {
    eyebrow: "ความเชี่ยวชาญ",
    title: "พาร์ทเนอร์เดียว ครบทุกสแต็ก",
    subtitle:
      "จากแบบร่างแรกจนถึงการขยายระดับโลก ทุกทีมที่คุณต้องการอยู่ภายใต้หลังคาเดียว",
    items: [
      {
        title: "สถาปัตยกรรมคลาวด์",
        body: "Multi-cloud landing zone, IaC ด้วย Terraform และ FinOps ที่ลดค่าใช้จ่ายโครงสร้างพื้นฐานได้ถึง 40%",
      },
      {
        title: "AI และวิศวกรรมข้อมูล",
        body: "แพลตฟอร์ม Lakehouse, real-time pipeline และโมเดล ML ที่ deploy ใช้งานจริง",
      },
      {
        title: "วิศวกรรมผลิตภัณฑ์",
        body: "เว็บและโมบายแอปพร้อม design system, CI/CD และ SLA uptime 99.95%",
      },
      {
        title: "ความมั่นคงปลอดภัยไซเบอร์",
        body: "Pentesting, SOC monitoring และ zero-trust สำหรับอุตสาหกรรมที่มีการกำกับดูแล",
      },
      {
        title: "การเปลี่ยนผ่านสู่ดิจิทัล",
        body: "ปรับปรุงระบบเดิมและ automation กระบวนการ พร้อม ROI ที่วัดได้ในไตรมาสแรก",
      },
      {
        title: "บริการดูแลระบบ",
        body: "NOC 24/7 ในกรุงเทพฯ, SRE on-call และตอบสนองเหตุการณ์เชิงรุกภายใน 15 นาที",
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
    address: "1035/20 ถนนเพลินจิต แขวงลุมพินี เขตปทุมวัน กรุงเทพฯ 10330 ประเทศไทย",
    tagline: "เทคโนโลยีที่ส่องสว่างธุรกิจคุณ",
    rights: "สงวนลิขสิทธิ์",
    columns: [
      {
        title: "โซลูชัน",
        links: ["สถาปัตยกรรมคลาวด์", "AI และข้อมูล", "วิศวกรรมผลิตภัณฑ์", "ความปลอดภัยไซเบอร์"],
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
    eyebrow: "Lumentis (Thailand) Co., Ltd.",
    title1: "以科技",
    title2: "点亮商业。",
    subtitle:
      "我们为东南亚企业设计、构建并运营数字平台——从云基础设施到 AI 驱动的产品。",
    ctaPrimary: "启动项目",
    ctaSecondary: "探索平台",
    scrollHint: "向下滚动探索",
  },
  showcase: {
    eyebrow: "Lumentis 平台",
    scenes: [
      {
        title: "云原生，深入核心。",
        body: "基于 AWS、GCP 与本地部署的 Kubernetes 优先架构——零停机发布、自动扩缩容，可观测性开箱即用。",
      },
      {
        title: "AI 用在刀刃上。",
        body: "生产级 LLM 流水线、需求预测与计算机视觉质检——以业务成果衡量，而非演示。",
      },
      {
        title: "安全始于设计。",
        body: "对齐 ISO 27001 的实践、端到端加密，以及贯穿技术栈每一层的 PDPA 合规。",
      },
    ],
  },
  features: {
    eyebrow: "核心能力",
    title: "一个伙伴，全栈交付。",
    subtitle: "从最初的草图到全球规模，你需要的每一种专业能力都在这里。",
    items: [
      {
        title: "云架构",
        body: "多云着陆区、Terraform 基础设施即代码，以及最高可削减 40% 开支的 FinOps。",
      },
      {
        title: "AI 与数据工程",
        body: "湖仓平台、实时数据管道，以及部署到生产环境的定制机器学习模型。",
      },
      {
        title: "产品工程",
        body: "配备设计系统、CI/CD 与 99.95% 可用性 SLA 的 Web 与移动应用。",
      },
      {
        title: "网络安全",
        body: "渗透测试、SOC 监控，以及面向受监管行业的零信任落地。",
      },
      {
        title: "数字化转型",
        body: "遗留系统现代化与流程自动化，首个季度即可衡量投资回报。",
      },
      {
        title: "托管运维",
        body: "曼谷 24/7 NOC、SRE 值班，以及 15 分钟内的主动事件响应。",
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
    address: "泰国曼谷巴吞旺区隆披尼 奔集路 1035/20，邮编 10330",
    tagline: "以科技点亮商业。",
    rights: "版权所有。",
    columns: [
      {
        title: "解决方案",
        links: ["云架构", "AI 与数据", "产品工程", "网络安全"],
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
