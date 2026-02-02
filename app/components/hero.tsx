"use client";

import { motion } from "framer-motion";
import { personalData } from "../data/config";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4">
      {/* Animasi Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        {/* Badge Status */}
        <div className="mb-6 inline-block px-3 py-1 border border-slate-700 rounded-full bg-slate-800/50 text-xs text-slate-300">
          ✨ Open to Internship
        </div>

        {/* Nama dengan Gradient */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{personalData.name}</span>
        </h1>

        {/* Deskripsi */}
        <p className="text-slate-400 text-lg md:text-xl mb-8 leading-relaxed">
          {personalData.role}. {personalData.description}
        </p>

        {/* Tombol Aksi */}
        <div className="flex gap-4 justify-center items-center">
          <a 
            href={personalData.socials.github} 
            target="_blank" 
            className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a 
            href={personalData.socials.linkedin} 
            target="_blank" 
            className="p-3 bg-blue-700 hover:bg-blue-600 rounded-full transition-all hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href={personalData.socials.email} 
            className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-slate-200 transition-all"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}