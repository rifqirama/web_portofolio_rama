import { Project } from "../domain/types";

const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "Sistem manajemen stok dengan analitik real-time.",
    category: "programming",
    techStack: ["Next.js", "Supabase", "Tailwind"],
    links: { repo: "#", demo: "#" },
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Company Profile Video",
    description: "Video profil korporat dengan motion graphic & grading.",
    category: "multimedia",
    techStack: ["Premiere Pro", "After Effects"],
    links: { repo: "#", demo: "#" },
    imageUrl: "https://images.unsplash.com/photo-1574717432729-246bc9a79735?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Travel App UI/UX",
    description: "Desain antarmuka aplikasi travel modern.",
    category: "multimedia",
    techStack: ["Figma", "Adobe XD"],
    links: { repo: "#", demo: "#" },
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "AI Chat Assistant",
    description: "Chatbot pintar terintegrasi OpenAI API.",
    category: "programming",
    techStack: ["React", "Node.js", "OpenAI"],
    links: { repo: "#", demo: "#" },
    imageUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1000&auto=format&fit=crop"
  }
];

export async function getProjects(): Promise<Project[]> {
  return PROJECTS_DATA;
}