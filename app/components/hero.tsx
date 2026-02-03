"use client";

import { motion } from "framer-motion";
import { personalData } from "../data/config";
import { TypeAnimation } from 'react-type-animation';
import { useEffect } from "react";
import { Github, Linkedin, Terminal, ArrowDown } from "lucide-react";

export default function Hero() {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* KOLOM KIRI: Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-red-500 mb-2">Hello, I'm</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
            {personalData.name} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">
              Developer
            </span>
          </h1>
          
          <div className="text-slate-400 text-lg mb-8 max-w-lg">
            Specializing in <span className="text-white font-semibold">
              <TypeAnimation
                sequence={['Fullstack Web', 2000, 'Multimedia', 2000, 'UI/UX Design', 2000]}
                wrapper="span" speed={50} repeat={Infinity}
              />
            </span>
            <br/> {personalData.description}
          </div>

          <div className="flex gap-4">
            {/* --- UPDATE: Tombol CV --- */}
            <a 
              href="https://drive.google.com/file/d/1_GQrFN__SPDEpame6xdh0BLeQlWXLJW1/view?usp=drive_link" // Ganti Link Ini!
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all shadow-lg shadow-red-500/20 flex items-center gap-2"
            >
              📄 CV Saya
            </a>
            
            <a href="#contact" className="px-8 py-3 border border-slate-700 hover:border-red-500 hover:text-red-500 rounded-lg font-medium transition-all text-white">
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* KOLOM KANAN: Terminal Mockup (Tetap Sama) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:block relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-purple-500/20 blur-3xl -z-10 rounded-full" />
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl relative overflow-hidden">
            <div className="flex gap-2 mb-4 border-b border-slate-800 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="ml-auto text-xs text-slate-500">bash</div>
            </div>
            <div className="font-mono text-sm space-y-2">
              <div className="text-slate-400"><span className="text-green-400">➜</span> ~ <span className="text-yellow-400">git</span> clone portfolio-rama</div>
              <div className="text-slate-500">Cloning into 'portfolio-rama'...</div>
              <div className="text-white mt-2 border-l-2 border-red-500 pl-2 animate-pulse">Ready to code! 🚀</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }} // Animasi naik turun
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <a href="#about" className="text-slate-500 hover:text-red-500 transition-colors">
            <ArrowDown size={32} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}