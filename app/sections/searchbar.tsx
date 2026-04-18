"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { MapPin, Calendar, Users } from "lucide-react";

const INDIAN_CITIES = ["Mumbai", "Delhi", "Bangalore", "Goa", "Udaipur", "Srinagar", "Kerala", "Manali", "Jaipur", "Kochi"];

export default function SearchBar() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("1");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/destinations?city=${destination}&date=${date}&guests=${guests}`);
  };

  return (
    <div className="max-w-6xl mx-auto -mt-24 relative z-60 px-6">
      <motion.form 
        initial={{ opacity: 0, y: 40 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.3 }} 
        onSubmit={handleSearch} 
        className="bg-white p-3 md:p-5 rounded-[2.5rem] md:rounded-full shadow-2xl border border-sky-50 flex flex-col lg:flex-row items-center gap-2"
      >
        <div className="flex-1 flex items-center gap-4 px-6 py-4 w-full lg:border-r border-sky-50 group hover:bg-sky-50/50 rounded-l-full">
          <MapPin className="text-sky-500" size={22} />
          <div className="flex flex-col w-full text-left">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Destination</span>
            <select required value={destination} onChange={(e) => setDestination(e.target.value)} className="w-full bg-transparent font-bold text-slate-900 text-sm outline-none cursor-pointer appearance-none">
              <option value="" disabled>Select City</option>
              {INDIAN_CITIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>

        <div className="flex-1 flex items-center gap-4 px-6 py-4 w-full lg:border-r border-sky-50 group hover:bg-sky-50/50">
          <Calendar className="text-sky-500" size={22} />
          <div className="flex flex-col w-full text-left">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Travel Date</span>
            <input type="date" required value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-transparent font-bold text-slate-900 text-sm outline-none" />
          </div>
        </div>

        <div className="flex-1 flex items-center gap-4 px-6 py-4 w-full group hover:bg-sky-50/50">
          <Users className="text-sky-500" size={22} />
          <div className="flex flex-col w-full text-left">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Travelers</span>
            <input type="number" min="1" max="10" value={guests} onChange={(e) => setGuests(e.target.value)} className="w-full bg-transparent font-bold text-slate-900 text-sm outline-none" />
          </div>
        </div>

        <button type="submit" className="w-full lg:w-auto bg-sky-500 text-white font-black px-12 py-6 rounded-full hover:bg-slate-900 transition-all shadow-lg shadow-sky-200">
          EXPLORE NOW
        </button>
      </motion.form>
    </div>
  );
}