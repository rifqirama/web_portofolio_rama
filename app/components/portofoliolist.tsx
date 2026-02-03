"use client";

import { useState } from "react";
import ProjectCard from "./projectcard";
import { Project } from "../core/domain/types";
import { motion, AnimatePresence } from "framer-motion";

interface PortfolioListProps {
  projects: Project[];
}

export default function PortfolioList({ projects }: PortfolioListProps) {
  const [filter, setFilter] = useState<'all' | 'programming' | 'multimedia'>('all');

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
          My <span className="text-red-500">Portfolio</span>
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {['all', 'programming', 'multimedia'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all capitalize
                ${filter === cat ? 'bg-red-600 text-white shadow-lg shadow-red-500/25' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        {/* Grid Card */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}