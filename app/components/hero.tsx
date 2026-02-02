"use client";

import { motion } from "framer-motion";
import { personalData } from "../data/config";
import { Github, Linkedin, Mail } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-5xl" // <-- Layout sudah diperlebar
      >
        <div className="mb-4 inline-block px-4 py-1.5 border border-slate-800 rounded-full bg-slate-900/50 text-sm text-slate-400 backdrop-blur-sm">
          🚀 Ready to contribute
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-white leading-tight">
          Hi, I'm <br className="md:hidden" /> {/* Break line di HP biar rapi */}
          
          {/* ANIMASI KETIK DI SINI */}
          <TypeAnimation
            sequence={[
              // Teks yang akan diketik
              personalData.name, 
              1000, // Tunggu 1 detik setelah selesai ngetik
            ]}
            wrapper="span"
            speed={50} // Kecepatan ngetik (makin kecil makin cepat)
            style={{ display: 'inline-block' }}
            repeat={0} // 0 = ketik sekali lalu berhenti (tidak looping)
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
            cursor={true}
          />
        </h1>

        <p className="text-slate-400 text-lg md:text-2xl mb-10 leading-relaxed font-light px-4">
          I'm a <span className="text-blue-400 font-medium">{personalData.role}</span>. <br className="hidden md:block"/>
          {personalData.description}
        </p>

        <div className="flex gap-6 justify-center items-center">
          <a href={personalData.socials.github} target="_blank" className="text-slate-400 hover:text-white transition-colors">
            <Github size={32} />
          </a>
          <a href={personalData.socials.linkedin} target="_blank" className="text-slate-400 hover:text-blue-400 transition-colors">
            <Linkedin size={32} />
          </a>
          <a href={personalData.socials.email} className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-slate-200 transition-transform hover:scale-105 active:scale-95">
            Let's Talk
          </a>
        </div>
      </motion.div>
    </section>
  );
}