"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Foto */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-slate-700 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-2 rounded-full border-2 border-red-500/50" />
              <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover rounded-full p-4 grayscale hover:grayscale-0 transition-all duration-500" /> 
              {/* Pastikan file profile.jpg ada di folder public, atau ganti src dengan link gambar online */}
            </div>
          </div>

          {/* Bio */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">About <span className="text-red-500">Me</span></h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Halo! Saya pengembang web yang tertarik pada **Programming** dan **Multimedia**. 
              Kombinasi logika kode dan estetika visual adalah kekuatan utama saya.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
                <h3 className="text-red-400 font-bold text-xl mb-1">2+</h3>
                <p className="text-sm text-slate-500">Years Experience</p>
              </div>
              <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
                <h3 className="text-red-400 font-bold text-xl mb-1">10+</h3>
                <p className="text-sm text-slate-500">Projects Completed</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}