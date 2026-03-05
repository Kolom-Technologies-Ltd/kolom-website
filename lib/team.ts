export interface TeamMember {
  name: string;
  role: string;
  yearsOfExperience: number;
  highlights: string[];
  techStack: string[];
  image: string;
}

export const team: TeamMember[] = [
  {
    name: "Asif Shariar Likhon",
    role: "CEO",
    yearsOfExperience: 4,
    highlights: [
      "Secured Shark Tank investment for Stickon.xyz, reducing CAC by 45%",
      "Scaled Quran Touch to over 1 million international users",
      "Generated $80K+ in client revenue via scalable B2B sales funnels",
    ],
    techStack: ["HubSpot", "Google Ads", "Klaviyo", "CRM", "Scikit-learn", "Data Analytics"],
    image: "/team/likhon.webp",
  },
  {
    name: "Md. Hashibul Islam",
    role: "CTO",
    yearsOfExperience: 4,
    highlights: [
      "Built logistics platforms for Daraz (Alibaba Group)",
      "Engineered real-time ride-sharing systems at scale",
      "Developed mission-critical software for NASA's Astrobee on the ISS",
    ],
    techStack: ["Java", "Spring", "Microservices", "Python", "PostgreSQL", "AWS", "Docker", "K8s"],
    image: "/team/hasib.webp",
  },
  {
    name: "Shitab Mir",
    role: "Head of Mobile & Integration",
    yearsOfExperience: 8,
    highlights: [
      "Engineered apps scaling to 10M+ users for Daraz",
      "Built multi-layered logistics & fintech platforms for HungryNaki & bKash",
      "Drove enterprise digital transformation through robust MSME solutions",
    ],
    techStack: ["Android", "iOS", "Flutter", "Kotlin Multiplatform", "API Integration"],
    image: "/team/shitab.webp",
  },
  {
    name: "Md. Raihan Rahman",
    role: "COO",
    yearsOfExperience: 4,
    highlights: [
      "Spearheaded IoT project management at Aqualink",
      "Ensured strict HIPAA compliance for Therap's Oracle-backed systems",
      "End-to-end lifecycle leadership for secure, scalable enterprise solutions",
    ],
    techStack: ["E2E Testing", "Product Strategy", "Oracle SQL", "HIPAA Security", "IoT", "JIRA"],
    image: "/team/raihan.webp",
  },
  {
    name: "Touhidul Islam Chayan",
    role: "Head of Design & Web",
    yearsOfExperience: 5,
    highlights: [
      "Led ADIQ MVP, securing a $23M CAD investment",
      "Architected Canada's first instant tenant verification platform",
      "IEEE-published ML medical imaging solution",
    ],
    techStack: ["React/Next.js", "TypeScript", "React Native", "Node.js", "Go", ".NET Core", "Python", "AWS"],
    image: "/team/chayan.webp",
  },
  {
    name: "A. A. Noman Ansary",
    role: "Head of AI & Data Security",
    yearsOfExperience: 6,
    highlights: [
      "Maintained DHL's OCR engine and built AI training platforms",
      "Engineered secure infrastructure for 200+ enterprise systems",
      "Created interactive 3D educational web games",
    ],
    techStack: ["Django", "FastAPI", ".NET", "Three.js", "PyTorch", "vLLM", "Redis", "Docker"],
    image: "/team/ansary.webp",
  },
];
