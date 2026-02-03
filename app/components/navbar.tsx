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
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-full px-6 py-3 flex justify-between items-center shadow-lg shadow-red-900/10">
            
            <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-600">
              {personalData.name}
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-sm text-slate-300 hover:text-red-400 transition-colors">
                  {link.name}
                </a>
              ))}
              <div className="w-px h-4 bg-slate-700"></div>
              <div className="flex gap-4">
                <a href={personalData.socials.github} target="_blank" className="text-slate-400 hover:text-white"><Github size={18} /></a>
                <a href={personalData.socials.linkedin} target="_blank" className="text-slate-400 hover:text-blue-400"><Linkedin size={18} /></a>
              </div>
            </div>

            {/* Mobile Button */}
            <button className="md:hidden text-white p-1" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-4 right-4 z-40 md:hidden"
          >
            <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 shadow-2xl flex flex-col gap-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-200 py-2 border-b border-slate-800/50">
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}