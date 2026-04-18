"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Star, Filter, ArrowRight, Search } from "lucide-react";

// The same data structure as your home page
const ALL_DESTINATIONS = [
  { id: 1, name: "Royal Rajasthan Circuit", price: 45000, category: "Heritage", rating: 4.9, image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800" },
  { id: 2, name: "Kerala Backwaters Luxe", price: 38500, category: "Nature", rating: 4.8, image: "https://images.unsplash.com/photo-1602216056096-3c40cc0c9944?q=80&w=800" },
  { id: 3, name: "Ladakh High Pass", price: 52000, category: "Adventure", rating: 5.0, image: "#" },
  { id: 4, name: "Goa Beach Villa", price: 25000, category: "Beach", rating: 4.7, image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800" },
  { id: 5, name: "Srinagar Houseboat", price: 32000, category: "Luxury", rating: 4.9, image: "https://images.unsplash.com/photo-1598305312110-38688440c741?q=80&w=800" },
  { id: 6, name: "Udaipur Lake Palace", price: 65000, category: "Luxury", rating: 5.0, image: "https://images.unsplash.com/photo-1615555465999-011da92b63fe?q=80&w=800" },
];

export default function DestinationsPage() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Heritage", "Nature", "Adventure", "Beach", "Luxury"];

  const filteredDestinations = filter === "All" 
    ? ALL_DESTINATIONS 
    : ALL_DESTINATIONS.filter(d => d.category === filter);

  return (
    <main className="min-h-screen bg-sky-700 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-12">
          <span className="text-sky-500 font-black tracking-widest uppercase text-[10px]">Explore the World</span>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter mt-2">
            Our <span className="text-sky-950">Destinations</span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="sticky top-32 space-y-8">
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                  <Filter size={14} /> Categories
                </h3>
                <div className="flex flex-wrap lg:flex-col gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setFilter(cat)}
                      className={`px-5 py-3 rounded-2xl text-xs font-bold transition-all text-left ${
                        filter === cat 
                        ? "bg-sky-500 text-white shadow-lg shadow-slate-700" 
                        : "bg-sky-50 text-slate-500 hover:bg-sky-100"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              
            </div>
          </aside>

          {/* Destination Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredDestinations.map((dest) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  key={dest.id}
                  className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:border-sky-200 transition-all shadow-xl shadow-slate-200/50"
                >
                  <div className="aspect-16/10 overflow-hidden relative">
                    <img 
                      src={dest.image} 
                      alt={dest.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full flex items-center gap-1">
                      <Star className="text-yellow-400 fill-yellow-400 h-3 w-3" />
                      <span className="text-[10px] font-black">{dest.rating}</span>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-sky-500 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                      {dest.category}
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-black text-slate-900 group-hover:text-sky-500 transition-colors leading-tight">
                        {dest.name}
                      </h3>
                    </div>
                    
                    <div className="flex items-center gap-1 text-slate-400 mb-6">
                      <MapPin size={14} />
                      <span className="text-[11px] font-bold uppercase tracking-widest">Multiple Locations, India</span>
                    </div>

                    <div className="pt-6 border-t border-slate-50 flex justify-between items-center">
                      <div>
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Package Price</p>
                        <p className="text-2xl font-black text-slate-900">₹{dest.price.toLocaleString()}</p>
                      </div>
                      <button className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center group-hover:bg-sky-500 transition-all">
                        <ArrowRight size={20} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {filteredDestinations.length === 0 && (
              <div className="text-center py-20">
                <p className="text-slate-400 font-bold">No destinations found in this category.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}