export type Project = {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  stack: readonly string[];
  githubUrl: string;
  image: string;
  imageAlt: string;
  icon: "scale" | "brain" | "video" | "interview" | "face";
};

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  highlights: readonly string[];
};

export const portfolio = {
  person: {
    name: "Vraj Patel",
    designation: "AI / Applied AI Engineer",
    location: "Mumbai, India",
    email: "vjp21112@gmail.com",
    phone: "+91 9313553359",
    phoneHref: "tel:+919313553359",
    github: "https://github.com/iamvrajpatel",
    linkedin: "https://linkedin.com/in/iamvrajpatel",
    leetcode: "https://leetcode.com/u/ervrajpatel",
    resume: "/assets/vraj-patel-ai-engineer-resume.pdf",
    portrait: "/assets/vraj-patel.png",
  },
  hero: {
    headlineLines: [
      "Building Intelligent AI Systems",
      "That Solve Real-World Problems",
    ],
    subtitle:
      "AI / Applied AI Engineer specializing in LLMs, Agentic AI, RAG, Computer Vision, and Production AI Systems.",
  },
  about:
    "AI / Applied AI Engineer with 2+ years of experience developing production-oriented AI solutions across Large Language Models, Retrieval-Augmented Generation, multi-agent systems, computer vision, OCR, and workflow automation. Experienced in Python, FastAPI, LangChain, LangGraph, Pinecone, model fine-tuning, and scalable AI deployment.",
} as const;

export const projects: readonly Project[] = [
  {
    id: "lawyer-ai",
    shortTitle: "LawyerAI",
    title: "LawyerAI — Multi-Agent Legal Research Platform",
    description:
      "Case-centric legal AI workspace featuring multi-agent research, evidence management, contextual retrieval, legal reasoning workflows, and configurable agent orchestration.",
    stack: ["Python", "FastAPI", "LangGraph", "RAG", "MongoDB", "Multi-Agent AI"],
    githubUrl: "https://github.com/iamvrajpatel/lawyer-ai",
    image: "/images/projects/lawyer-ai.png",
    imageAlt: "Monochrome concept visual for the LawyerAI multi-agent legal research platform",
    icon: "scale",
  },
  {
    id: "qwen-finetuning",
    shortTitle: "Qwen Fine-Tuning",
    title: "Qwen Fine-Tuning for Entrance Exam Question Generation",
    description:
      "Source-grounded fine-tuning pipeline for PCM entrance-exam question generation, including dataset engineering, semantic validation, supervised fine-tuning, and structured question generation.",
    stack: ["Python", "Qwen3-1.7B", "QLoRA", "LoRA", "TRL", "FastAPI"],
    githubUrl: "https://github.com/iamvrajpatel/qwen-finetune-q-gen",
    image: "/images/projects/qwen-finetuning.png",
    imageAlt: "Monochrome concept visual for Qwen model fine-tuning and question generation",
    icon: "brain",
  },
  {
    id: "lip-sync",
    shortTitle: "Lip-Sync API",
    title: "Lip-Sync and Voice-Cloning Video Generation API",
    description:
      "AI-powered lip-sync and voice-processing API with asynchronous video generation, inference controls, media preprocessing, and GPU-based processing.",
    stack: ["Python", "FastAPI", "PyTorch", "Diffusers", "LatentSync", "FFmpeg"],
    githubUrl: "https://github.com/iamvrajpatel/Lip-Sync",
    image: "/images/projects/lip-sync.png",
    imageAlt: "Monochrome concept visual for an AI lip-sync and video-generation API",
    icon: "video",
  },
  {
    id: "interview-automation",
    shortTitle: "Interview Automation",
    title: "AI Interview Automation Platform",
    description:
      "End-to-end AI interview system supporting resume parsing, automated question generation, face verification, speech transcription, candidate scoring, and hiring recommendations.",
    stack: ["Python", "Flask", "OpenAI", "Whisper", "FaceNet", "NLP"],
    githubUrl: "https://github.com/iamvrajpatel/Interview-Automation",
    image: "/images/projects/interview-automation.png",
    imageAlt: "Monochrome concept visual for an AI interview automation platform",
    icon: "interview",
  },
  {
    id: "face-verification",
    shortTitle: "Face Verification API",
    title: "Face Verification API",
    description:
      "REST API for identity verification using face detection, similarity scoring, configurable confidence thresholds, and structured verification responses.",
    stack: ["Python", "FastAPI", "DeepFace", "FaceNet", "MTCNN", "OpenCV"],
    githubUrl: "https://github.com/iamvrajpatel/Face-Authentication-API",
    image: "/images/projects/face-verification.png",
    imageAlt: "Monochrome concept visual for a face-verification API",
    icon: "face",
  },
];

export const skillCategories = [
  { name: "LLM & Generative AI", skills: ["LLMs", "Prompt Engineering", "Function Calling", "MCP", "Structured Outputs", "Guardrails"] },
  { name: "Agentic AI", skills: ["LangGraph", "LangChain", "Multi-Agent Systems", "Agent Orchestration", "Agent Memory", "HITL"] },
  { name: "RAG & Retrieval", skills: ["Pinecone", "FAISS", "Embeddings", "Semantic Search", "Hybrid Search", "Reranking"] },
  { name: "Machine Learning", skills: ["PyTorch", "TensorFlow", "scikit-learn", "NLP", "YOLOv8", "OpenCV", "OCR"] },
  { name: "Backend", skills: ["Python", "FastAPI", "Flask", "REST APIs", "WebSockets", "Async Processing"] },
  { name: "Cloud & MLOps", skills: ["Docker", "GCP", "Google Cloud Run", "AWS", "CI/CD", "MLflow", "Model Serving"] },
  { name: "Databases", skills: ["MongoDB", "MySQL", "SQLite", "Vector Databases"] },
] as const;

export const experience: readonly ExperienceEntry[] = [
  {
    company: "Hubblehox Technologies | Ampersand Group",
    role: "AI Engineer | Data Scientist",
    period: "July 2024 – Present",
    highlights: [
      "Built OCR and computer-vision pipelines achieving 95% extraction accuracy and 15% improved detection precision.",
      "Developed AI interview automation that reduced teacher hiring time by 50%+ and implemented AI proctoring using vision and audio analysis.",
      "Built RAG knowledge assistants that improved internal query response performance by 40%; delivered agentic workflows, guardrails, model serving, and high-throughput backends.",
      "Fine-tuned Qwen 1.7B for domain-specific question generation.",
    ],
  },
  {
    company: "Freelancing | Remote",
    role: "AI Data Trainer / LLM Evaluator",
    period: "Remote",
    highlights: [
      "Evaluated Claude and Gemini outputs for reasoning, code quality, safety, and factuality.",
      "Reviewed coding agents for repository understanding, tool execution, debugging, and reliability.",
    ],
  },
  {
    company: "QuantumQuad Solutions",
    role: "Microsoft Business Central Technical Consultant",
    period: "January 2024 – June 2024",
    highlights: ["Developed ERP customizations, AL extensions, integrations, and RDLC reports."],
  },
  {
    company: "Languify",
    role: "Machine Learning Intern",
    period: "August 2022 – September 2022",
    highlights: ["Worked on live face-recognition systems, data preprocessing, and ML development workflows."],
  },
];

export const education = [
  { school: "Indian Institute of Quantitative Finance", degree: "Post Graduate Program in Algorithmic Trading", period: "Oct 2025 – Expected March 2027" },
  { school: "G H Patel College of Engineering and Technology", degree: "B.E. Computer Engineering · CPI: 8.2/10", period: "September 2020 – May 2024" },
] as const;

export const achievements = [
  { value: "95%", label: "OCR extraction accuracy" },
  { value: "15%", label: "improvement in detection precision" },
  { value: "40%", label: "improvement in internal query response performance" },
  { value: "50%+", label: "reduction in teacher hiring time" },
  { value: "200k–250k", label: "reported AI backend requests/sec" },
] as const;

export const certifications = [
  "IBM Data Science Specialization",
  "Machine Learning for Trading Specialization",
  "Vector Databases Professional Certificate — Weaviate / DeepLearning.AI",
  "Automated Testing for LLMOps — DeepLearning.AI",
  "Evaluating AI Agents — DeepLearning.AI",
  "Fine-Tuning & RL for LLMs — DeepLearning.AI",
  "Agentic AI — DeepLearning.AI",
] as const;
