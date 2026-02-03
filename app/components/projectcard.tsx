"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "../core/domain/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-red-500/50 transition-all group"
    >
      <div className="h-48 overflow-hidden relative">
        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
        <span className="absolute top-2 right-2 px-2 py-1 bg-black/60 backdrop-blur-md text-xs text-white rounded uppercase tracking-wider">
          {project.category}
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-2 py-1 bg-slate-800 text-xs text-red-300 rounded-md">{tech}</span>
          ))}
        </div>

        <div className="flex gap-3">
          <a href={project.links.repo} target="_blank" className="flex items-center gap-2 text-sm text-white bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition-colors"><Github size={16} /> Code</a>
          {project.links.demo && (
            <a href={project.links.demo} target="_blank" className="flex items-center gap-2 text-sm text-black bg-white hover:bg-slate-200 px-4 py-2 rounded-lg transition-colors"><ExternalLink size={16} /> Demo</a>
          )}
        </div>
      </div>
    </motion.div>
  );
}