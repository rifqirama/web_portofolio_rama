"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { personalData } from "../data/config";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-600 cursor-pointer">
            <a href="#home">{personalData.name}</a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-slate-300 hover:text-red-400 transition-colors relative group"
              >
                {link.name}
                {/* Efek garis bawah saat hover */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
            
            <div className="w-px h-5 bg-slate-700"></div>
            
            <div className="flex gap-4">
              <a href={personalData.socials.github} target="_blank" className="text-slate-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href={personalData.socials.linkedin} target="_blank" className="text-slate-400 hover:text-blue-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Button */}
          <button 
            className="md:hidden text-white p-1 hover:bg-slate-800 rounded-md transition-colors" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Dropdown Full Width) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[60px] left-0 right-0 z-40 bg-slate-900 border-b border-slate-800 md:hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)} 
                  className="text-lg font-medium text-slate-300 hover:text-red-400 py-2 border-b border-slate-800/50 last:border-0"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-6 mt-2 pt-4 justify-start">
                 <a href={personalData.socials.github} target="_blank" className="text-slate-400 hover:text-white"><Github size={24} /></a>
                 <a href={personalData.socials.linkedin} target="_blank" className="text-slate-400 hover:text-blue-500"><Linkedin size={24} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}