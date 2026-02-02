"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface ProjectProps {
  data: {
    id: number;
    title: string;
    description: string;
    tech: string[];
    linkRepo: string;
    linkDemo?: string | null;
    image: string;
  };
  index: number;
}

export default function ProjectCard({ data, index }: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all group"
    >
      {/* Gambar Project */}
      <div className="h-48 overflow-hidden relative">
        <img 
          src={data.image} 
          alt={data.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
      </div>

      {/* Konten */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{data.title}</h3>
        <p className="text-slate-400 text-sm mb-4 line-clamp-2">{data.description}</p>
        
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {data.tech.map((tech) => (
            <span key={tech} className="px-2 py-1 bg-slate-800 text-xs text-blue-300 rounded-md">
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <a 
            href={data.linkRepo} 
            target="_blank"
            className="flex items-center gap-2 text-sm text-white bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition-colors"
          >
            <Github size={16} /> Code
          </a>
          {data.linkDemo && (
            <a 
              href={data.linkDemo} 
              target="_blank"
              className="flex items-center gap-2 text-sm text-black bg-white hover:bg-slate-200 px-4 py-2 rounded-lg transition-colors"
            >
              <ExternalLink size={16} /> Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}