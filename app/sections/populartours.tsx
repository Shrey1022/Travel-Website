"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, Star } from "lucide-react";

const POPULAR_TOURS = [
  { id: 1, name: "Rajasthan", price: "₹45,000", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800", slug: "rajasthan", rating: 4.8 },
  { id: 2, name: "Varanasi", price: "₹38,500", image: "https://t4.ftcdn.net/jpg/04/08/25/05/360_F_408250543_MVaEVGeWxb4FiFy7mEGKj8nfYkwoAZON.jpg", slug: "varanasi", rating: 5.0 },
  { id: 3, name: "Ladakh", price: "₹52,000", image: "https://s7ap1.scene7.com/is/image/incredibleindia/1-tso-moriri-lake-leh-ladakh-state-hero?qlt=82&ts=1726668054172", slug: "ladakh", rating: 4.9 }
];

export default function PopularTours() {
  const router = useRouter();

  return (
    <section className="py-24 px-6 bg-sky-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-sky-500 font-black tracking-widest uppercase text-[10px]">Top Picks</span>
            <h2 className="text-4xl font-black text-slate-900 mt-2">Popular Tours</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {POPULAR_TOURS.map((tour) => (
            <div
              key={tour.id}
              onClick={() => router.push(`/destinations/${tour.slug}`)}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl group cursor-pointer border border-white hover:border-sky-200 transition-all"
            >
              <div className="aspect-16/10 overflow-hidden relative">
                <img
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="text-yellow-400 fill-yellow-400 h-3 w-3" />
                  <span className="text-[10px] font-black">{tour.rating}</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-black text-slate-900 group-hover:text-sky-500 transition-colors">
                  {tour.name}
                </h3>
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-xl font-black text-slate-900">{tour.price}</p>
                  <div className="w-10 h-10 bg-sky-50 rounded-full flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white transition-all">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}