"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Map, Users, Sparkles, Send } from "lucide-react";

export default function PlanYourTripPage() {
  const [formData, setFormData] = useState({
    destination: "",
    date: "",
    travelers: "2",
    style: "Luxury",
  });

  return (
    <main className="min-h-screen bg-sky-500 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sky-500 font-black tracking-widest uppercase text-[10px]"
          >
            Tour & Travel
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-white tracking-tighter mt-4"
          >
            Lorem Ipsum<span className="text-sky-500">Dolor.</span>
          </motion.h1>
          <p className="text-slate-950 mt-6 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/* Planning Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 p-8 md:p-12 rounded-[3rem] shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-8">

            {/* Destination */}
            <div className="space-y-3">
              <label className="text-[10px] font-black text-sky-500 uppercase tracking-widest flex items-center gap-2">
                <Map size={14} /> Where to?
              </label>
              <input
                type="text"
                placeholder="e.g. Varanasi "
                className="w-full bg-slate-900/50 border border-slate-700 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-sky-500 transition-colors"
              />
            </div>

            {/* Date */}
            <div className="space-y-3">
              <label className="text-[10px] font-black text-sky-500 uppercase tracking-widest flex items-center gap-2">
                <Calendar size={14} /> When?
              </label>
              <input
                type="date"
                style={{ colorScheme: "dark" }}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-sky-500 transition-colors"
              />
            </div>

            {/* Travelers */}
            <div className="space-y-3">
              <label className="text-[10px] font-black text-sky-500 uppercase tracking-widest flex items-center gap-2">
                <Users size={14} /> Guest Count
              </label>
              <select className="w-full bg-slate-900/50 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-sky-500 transition-colors appearance-none">
                <option>1 Guest</option>
                <option selected>2 Guests</option>
                <option>3-5 Guests</option>
                <option>Large Group (6+)</option>
              </select>
            </div>

            {/* Style */}
            <div className="space-y-3">
              <label className="text-[10px] font-black text-sky-500 uppercase tracking-widest flex items-center gap-2">
                <Sparkles size={14} /> Travel Style
              </label>
              <select className="w-full bg-slate-900/50 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-sky-500 transition-colors appearance-none">
                <option>Ultra Luxury</option>
                <option>Adventure & Discovery</option>
                <option>Relaxation & Wellness</option>
                <option>Cultural Immersion</option>
              </select>
            </div>
          </div>

          <div className="mt-12">
            <button className="w-full py-6 bg-sky-500 hover:bg-sky-400 text-white font-black rounded-3xl tracking-[0.2em] text-xs transition-all shadow-xl shadow-sky-500/20 flex items-center justify-center gap-3 group">
              SUBMIT INQUIRY <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <p className="text-center text-white text-[9px] mt-6 uppercase tracking-widest">
              Our travel concierge will contact you within 24 hours.
            </p>
          </div>
        </motion.div>

        {/* Decorative background glow */}
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-500px h-500px bg-sky-500/10 blur-[120px] rounded-full -z-10 pointer-events-none" />
      </div>
    </main>
  );
}