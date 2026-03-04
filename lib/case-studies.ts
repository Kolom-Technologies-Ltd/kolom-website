export interface CaseStudyStat {
  label: string;
  value: string;
}

export interface CaseStudyFeature {
  title: string;
  description: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  url: string;
  image: string;
  iconName: string;
  tags: string[];
  stats: CaseStudyStat[];
  objectPosition: string;
  challenge: string;
  solution: string;
  features: CaseStudyFeature[];
  techStack: string[];
  results: { value: string; label: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "who-works-when",
    title: "Who Works When",
    tagline: "Workforce Scheduling, Reimagined",
    description:
      "A digital solution that streamlines workforce scheduling, automates shift management, and optimizes employee availability for businesses. Built to handle complex rotation patterns, real-time availability tracking, and seamless team coordination at scale.",
    url: "https://www.whoworkswhen.com",
    image: "/projects/whoworkswhen.png",
    iconName: "Calendar",
    tags: ["SaaS", "Workforce Management", "Automation"],
    stats: [
      { label: "Platform", value: "Web App" },
      { label: "Focus", value: "Shift Automation" },
      { label: "Status", value: "Live" },
    ],
    objectPosition: "bottom",
    challenge:
      "Businesses with shift-based teams were drowning in spreadsheets and manual scheduling. Managers spent hours each week juggling availability, handling swap requests, and ensuring coverage — leading to scheduling conflicts, employee frustration, and lost productivity.",
    solution:
      "We built an intelligent scheduling platform that automates shift creation based on employee availability, handles swap requests with approval workflows, and provides real-time visibility into team coverage. The system learns from historical patterns to suggest optimal schedules.",
    features: [
      {
        title: "Smart Shift Generation",
        description:
          "Automatically generates conflict-free schedules based on employee availability, skills, and labor rules.",
      },
      {
        title: "Real-Time Availability",
        description:
          "Employees update their availability from any device, and managers see coverage gaps instantly.",
      },
      {
        title: "Swap & Cover Requests",
        description:
          "Built-in shift swap workflows with manager approval, ensuring seamless coverage changes.",
      },
      {
        title: "Team Dashboard",
        description:
          "A centralized view showing who's working when, upcoming shifts, and overtime tracking at a glance.",
      },
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "NextAuth.js",
    ],
    results: [
      { value: "80%", label: "Reduction in scheduling time" },
      { value: "3x", label: "Faster shift swaps" },
      { value: "95%", label: "Employee adoption rate" },
    ],
  },
  {
    slug: "lienzo",
    title: "Lienzo",
    tagline: "License Management, Simplified",
    description:
      "A software license management platform that simplifies licensing workflows and centralizes compliance, keeping your scaling startup lean and professional. From seat tracking to renewal alerts, Lienzo handles the complexity so teams can focus on building.",
    url: "https://lienzoapp.vercel.app",
    image: "/projects/lienzo.png",
    iconName: "Layers",
    tags: ["SaaS", "License Management", "Compliance"],
    stats: [
      { label: "Platform", value: "Web App" },
      { label: "Focus", value: "Compliance" },
      { label: "Status", value: "Live" },
    ],
    objectPosition: "left top",
    challenge:
      "Growing startups were losing track of their software licenses across dozens of tools. Expired licenses caused service disruptions, unused seats wasted budget, and audits became nightmares without a centralized system to manage it all.",
    solution:
      "Lienzo provides a single dashboard to track every software license across the organization. It automates renewal reminders, highlights underutilized seats for cost savings, and generates audit-ready compliance reports — all without the overhead of enterprise tools.",
    features: [
      {
        title: "Centralized License Tracking",
        description:
          "View all software licenses, seat allocations, and renewal dates in one unified dashboard.",
      },
      {
        title: "Automated Renewal Alerts",
        description:
          "Never miss a renewal — get notified before licenses expire with configurable lead times.",
      },
      {
        title: "Seat Optimization",
        description:
          "Identify unused or underutilized licenses and reallocate seats to reduce software spend.",
      },
      {
        title: "Compliance Reports",
        description:
          "Generate audit-ready reports showing license usage, allocation history, and compliance status.",
      },
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Prisma",
      "Clerk Auth",
    ],
    results: [
      { value: "40%", label: "Savings on software spend" },
      { value: "Zero", label: "Missed renewals" },
      { value: "100%", label: "Audit readiness" },
    ],
  },
  {
    slug: "kolomai",
    title: "Kolom.ai",
    tagline: "AI-Powered News Intelligence",
    description:
      "Kolom.ai delivers AI-powered byte-sized news summaries — each between 52 and 71 words — keeping you informed with clarity, speed, and substance. Multi-perspective analysis ensures balanced, transparent reporting powered by advanced language models.",
    url: "https://www.kolom.ai",
    image: "/projects/kolomai.png",
    iconName: "Cpu",
    tags: ["AI/ML", "News Platform", "NLP"],
    stats: [
      { label: "Platform", value: "Web + Mobile" },
      { label: "Focus", value: "AI Summaries" },
      { label: "Status", value: "Live" },
    ],
    objectPosition: "center",
    challenge:
      "People are overwhelmed by the sheer volume of daily news. Long articles, clickbait headlines, and media bias make it nearly impossible to stay genuinely informed. Readers needed a way to consume news quickly without sacrificing depth or balance.",
    solution:
      "We built an AI-powered platform that ingests news from multiple sources, generates concise 52–71 word summaries using large language models, and presents multi-perspective analysis so readers see every angle. The result is fast, balanced, and transparent news consumption.",
    features: [
      {
        title: "AI-Generated Summaries",
        description:
          "Every article is condensed to 52–71 words using advanced NLP, preserving key facts and context.",
      },
      {
        title: "Multi-Perspective Analysis",
        description:
          "Each story is presented from multiple viewpoints to reduce bias and promote balanced understanding.",
      },
      {
        title: "Real-Time Ingestion",
        description:
          "News sources are continuously monitored and new stories are summarized within minutes of publication.",
      },
      {
        title: "Personalized Feed",
        description:
          "Users can customize their news feed by topic, region, and source preferences for a tailored experience.",
      },
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "OpenAI API",
      "Supabase",
    ],
    results: [
      { value: "52–71", label: "Words per summary" },
      { value: "5min", label: "Daily reading time" },
      { value: "Multi", label: "Perspective coverage" },
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((s) => s.slug === slug);
}

export function getOtherCaseStudies(slug: string): CaseStudy[] {
  return caseStudies.filter((s) => s.slug !== slug);
}
