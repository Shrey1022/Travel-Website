"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, ShieldCheck, Heart, Users } from "lucide-react";

const VALUES = [
  {
    icon: <Globe className="text-sky-500" size={28} />,
    title: "Global Reach",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    icon: <ShieldCheck className="text-sky-500" size={28} />,
    title: "Seamless Safety",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    icon: <Heart className="text-sky-500" size={28} />,
    title: "Curated Passion",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    icon: <Users className="text-sky-500" size={28} />,
    title: "Expert Guides",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-sky-500 pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sky-500 font-black tracking-widest uppercase text-[10px]">Tour & Travel</span>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mt-4 leading-[0.9]">
              Lorem <br /> 
              <span className="text-sky-950">Ipsum Dolor.</span>
            </h1>
            <p className="mt-8 text-slate-950 text-lg max-w-md leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, consequuntur nihil? Laboriosam culpa hic omnis ut ipsa! Tempora doloremque molestias distinctio, sequi quos similique ipsam incidunt temporibus quas repudiandae harum?
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden rotate-3 border-8 border-slate-600 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1000" 
                alt="Luxury Travel" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Glow */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-sky-500/20 blur-[100px] rounded-full" />
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUES.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-800/40 p-10 rounded-[2.5rem] border border-slate-800 hover:border-sky-500/50 transition-colors group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform">{value.icon}</div>
              <h3 className="text-white font-black text-xl mb-3">{value.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}