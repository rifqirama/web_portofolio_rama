"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import { personalData } from "../data/config";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-900/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-white">Get In <span className="text-red-500">Touch</span></h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Email */}
          <a href={personalData.socials.email} className="group p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-red-500/50 transition-all hover:-translate-y-2">
            <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
              <Mail size={24} />
            </div>
            <h3 className="text-white font-medium mb-2">Email</h3>
            <p className="text-slate-400 text-sm">Send me an email</p>
          </a>

          {/* Location */}
          <div className="group p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-red-500/50 transition-all hover:-translate-y-2">
             <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
              <MapPin size={24} />
            </div>
            <h3 className="text-white font-medium mb-2">Location</h3>
            <p className="text-slate-400 text-sm">Indonesia</p>
          </div>

           {/* WA */}
           <a href={personalData.socials.whatsapp} target="_blank" className="group p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-red-500/50 transition-all hover:-translate-y-2">
             <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
              <Phone size={24} />
            </div>
            <h3 className="text-white font-medium mb-2">WhatsApp</h3>
            <p className="text-slate-400 text-sm">Chat me now</p>
          </a>
        </div>
      </div>
    </section>
  );
}