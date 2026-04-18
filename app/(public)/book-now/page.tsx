"use client";

import React from "react";
import { motion } from "framer-motion";
import { CreditCard, ShieldCheck, Star, Zap } from "lucide-react";

const FEATURES = [
  { icon: <ShieldCheck className="text-sky-500" size={20} />, text: "Secure Payments" },
  { icon: <Star className="text-sky-500" size={20} />, text: "Luxury Guaranteed" },
  { icon: <Zap className="text-sky-500" size={20} />, text: "Instant Confirmation" },
];

export default function BookNowPage() {
  return (
    <main className="min-h-screen bg-sky-500 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Side: Information & Branding */}
          <div className="lg:w-1/2 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-sky-500 font-black tracking-widest uppercase text-[10px]">Tour & Travel</span>
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mt-4 leading-tight">
                Lorem<br />
                <span className="text-sky-950">Ipsum.</span>
              </h1>
              <p className="text-slate-950 mt-8 text-lg leading-relaxed max-w-md">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque dolores ut corporis unde aliquam, omnis sequi dicta quo rerum!
              </p>
            </motion.div>

            {/* Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {FEATURES.map((f, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex flex-col gap-3 p-6 rounded-3xl bg-slate-800/30 border border-slate-800"
                >
                  {f.icon}
                  <span className="text-white text-[11px] font-bold uppercase tracking-wider">{f.text}</span>
                </motion.div>
              ))}
            </div>
          </div>


          {/* FOR PAYMENT GATEWAY */}

        </div>
      </div>
    </main>
  );
}