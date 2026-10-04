export type Project = {
  id: string;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate";
  goals: string[];
  branches: string[];
  skills: string[];
  relevance: string;
  difficulty: number;
  icon: string;
};

export const projects: Project[] = [
  {
    id: "resume-analyzer",
    title: "AI Resume Analyzer",
    description:
      "Build an AI-powered tool that analyzes a resume and gives role-specific improvement suggestions.",
    level: "Beginner",
    goals: ["Placement", "Resume"],
    branches: ["CSE / IT", "ECE", "EEE", "Mechanical", "Civil", "Other"],
    skills: ["Python", "AI APIs", "Prompt Engineering"],
    relevance: "High",
    difficulty: 2,
    icon: "📄",
  },

  {
    id: "interview-coach",
    title: "AI Interview Coach",
    description:
      "Build an AI tool that conducts a mock technical interview and gives feedback on your answers.",
    level: "Beginner",
    goals: ["Placement"],
    branches: ["CSE / IT", "ECE", "EEE", "Mechanical", "Civil", "Other"],
    skills: ["Python", "LLM", "Prompt Engineering"],
    relevance: "Very High",
    difficulty: 2,
    icon: "🎤",
  },

  {
    id: "study-assistant",
    title: "AI Study Assistant",
    description:
      "Create an AI assistant that explains concepts, summarizes notes and generates practice questions.",
    level: "Beginner",
    goals: ["Learn AI"],
    branches: ["CSE / IT", "ECE", "EEE", "Mechanical", "Civil", "Other"],
    skills: ["Python", "LLM", "Text Processing"],
    relevance: "High",
    difficulty: 2,
    icon: "🧠",
  },

  {
    id: "github-reviewer",
    title: "AI GitHub Project Reviewer",
    description:
      "Build a tool that reviews a project and provides AI-generated suggestions for improving code and documentation.",
    level: "Intermediate",
    goals: ["Resume", "Placement"],
    branches: ["CSE / IT"],
    skills: ["Python", "GitHub API", "LLM"],
    relevance: "Very High",
    difficulty: 3,
    icon: "💻",
  },

  {
    id: "dsa-explainer",
    title: "AI DSA Explainer",
    description:
      "Build an AI assistant that explains coding problems and provides hints without directly giving the answer.",
    level: "Intermediate",
    goals: ["Placement", "Learn AI"],
    branches: ["CSE / IT"],
    skills: ["Python", "LLM", "Problem Solving"],
    relevance: "Very High",
    difficulty: 3,
    icon: "⚡",
  },

  {
    id: "job-matcher",
    title: "AI Job Description Matcher",
    description:
      "Build a tool that compares a student's skills with a job description and identifies skill gaps.",
    level: "Intermediate",
    goals: ["Placement", "Resume"],
    branches: ["CSE / IT", "ECE", "EEE", "Mechanical", "Civil", "Other"],
    skills: ["Python", "NLP", "AI API"],
    relevance: "Very High",
    difficulty: 3,
    icon: "🎯",
  },
];