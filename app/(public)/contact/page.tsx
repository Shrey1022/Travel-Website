"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const CONTACT_METHODS = [
  {
    icon: <Phone className="text-sky-500" size={24} />,
    label: "Call US",
    value: "+91 00000 00000",
    desc: "Available 24/7"
  },
  {
    icon: <Mail className="text-sky-500" size={24} />,
    label: "Email Inquiries",
    value: "test@email.com",
    desc: "Contact Us on this mail"
  },
];

export default function ContactPage() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "New Trip Inquiry",
    message: ""
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    alert(data.message || data.error);
  };

  return (
    <main className="min-h-screen bg-slate-900 pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sky-500 font-black tracking-widest uppercase text-[10px]"
          >
            Get In Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter mt-4"
          >
            Let’s Plan Your <br />
            <span className="text-sky-500">Next Masterpiece.</span>
          </motion.h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Left Side */}
          <div className="lg:col-span-5 space-y-10">
            {CONTACT_METHODS.map((method, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 group-hover:border-sky-500 transition-colors">
                  {method.icon}
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{method.label}</p>
                  <p className="text-white text-xl font-bold mb-1">{method.value}</p>
                  <p className="text-slate-400 text-sm">{method.desc}</p>
                </div>
              </motion.div>
            ))}

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-8 rounded-[2.5rem] bg-sky-500/5 border border-sky-500/10 mt-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-sky-500" size={20} />
                <span className="text-white font-black uppercase text-xs tracking-widest">Global Headquarters</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                123 ABC <br />
                Varanasi, Uttar Pradesh, India
              </p>
            </motion.div>
          </div>

          {/* Right Side Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-7 bg-slate-800/30 border border-slate-800 p-8 md:p-12 rounded-[3rem] backdrop-blur-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-8">

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">Your Name</label>
                  <input 
                    name="name"
                    type="text" 
                    placeholder="Name"
                    onChange={handleChange}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">Email Address</label>
                  <input 
                    name="email"
                    type="email" 
                    placeholder="test@email.com"
                    onChange={handleChange}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">Subject</label>
                <select 
                  name="subject"
                  onChange={handleChange}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-sky-500 transition-colors appearance-none"
                >
                  <option>New Trip Inquiry</option>
                  <option>Existing Reservation</option>
                  <option>Partnership Proposal</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">Message</label>
                <textarea 
                  name="message"
                  rows={5}
                  placeholder="Ask Your Quarry"
                  onChange={handleChange}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-sky-500 transition-colors resize-none"
                />
              </div>

              <button className="w-full py-5 bg-sky-500 hover:bg-white hover:text-sky-500 text-white font-black rounded-2xl tracking-[0.2em] text-[10px] transition-all flex items-center justify-center gap-3 group">
                SEND MESSAGE <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}