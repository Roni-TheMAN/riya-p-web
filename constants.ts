import { Project, SkillCategory, Experience } from './types';

export const RESUME_LINK = "./src/riyajingar_resume.pdf"; // Placeholder path

export const PROJECTS: Project[] = [
  {
    title: "The Cinema Spinner",
    description: "Interactive movie discovery platform utilizing the TMDB API. Features include randomized selection algorithms, genre-based filtering, and a responsive glassmorphism UI.",
    tech: ["JavaScript (ES6+)", "TMDB API", "CSS3", "HTML5"],
    github: "https://github.com/riyajingar/cinema-spinner", 
    // removed demo link as '#' is not a valid working link
    featured: true
  },
  {
    title: "Go Blog Platform",
    description: "High-performance blogging engine built with Go. Implements JWT authentication, concurrent request handling, and PostgreSQL for robust data management.",
    tech: ["Go", "PostgreSQL", "Docker", "REST API"],
    github: "https://github.com/riyajingar/go-blog",
    featured: true
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Java", "Python", "Go", "SQL", "C++", "JavaScript/TypeScript"]
  },
  {
    title: "Frameworks & Tools",
    skills: ["React.js", "Node.js", "Git/GitHub", "Docker", "Linux/Bash", "AWS"]
  },
  {
    title: "Core Concepts",
    skills: ["Data Structures", "Algorithms", "System Design", "Database Normalization", "OOP", "Agile"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Indiana University South Bend",
    role: "Academic Tutor (CS & Math)",
    period: "Feb 2025 - Present",
    description: "Mentoring undergraduate students in Operating Systems, Discrete Mathematics, and Calculus. Simplifying complex algorithmic concepts to improve student pass rates."
  },
  {
    company: "Student Government Association",
    role: "Secretary & Senator",
    period: "Fall 2024 - Present",
    description: "Streamlining legislative documentation processes and leading the Philanthropy Committee to coordinate fundraising events for global humanitarian causes."
  }
];
