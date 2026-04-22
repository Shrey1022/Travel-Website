"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const TRIPS = [
  { id: 1, title: "VARANASI", slug: "varanasi", image: "https://t4.ftcdn.net/jpg/04/08/25/05/360_F_408250543_MVaEVGeWxb4FiFy7mEGKj8nfYkwoAZON.jpg" },
  { id: 2, title: "RAJASTHAN", slug: "rajasthan", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800" },
  { id: 3, title: "LADAKH", slug: "ladakh", image: "https://s7ap1.scene7.com/is/image/incredibleindia/1-tso-moriri-lake-leh-ladakh-state-hero?qlt=82&ts=1726668054172" },
  { id: 4, title: "KERALA", slug: "kerala", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800" },
];

const LOOP_DATA = [...TRIPS, ...TRIPS, ...TRIPS];

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-44 px-6 bg-linear-to-b from-sky-800 to-sky-400">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12">

        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }} 
          className="flex-1 text-center lg:text-left text-white"
        >
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter">
            EXPLORE THE <br /> <span className="text-sky-100">UNSEEN</span>
          </h1>
          <p className="mt-6 text-sky-50 font-medium max-w-md mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus minima et tempore odit alias accusamus deleniti. Placeat eveniet explicabo, ab ducimus fugiat cum ea consequatur suscipit molestias quasi, odio neque.
          </p>
        </motion.div>

        <div className="w-full lg:w-1/2 overflow-hidden relative group py-20">
          <div className="absolute inset-y-0 left-0 w-32 from-sky-800/20 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 from-sky-400/20 to-transparent z-10 pointer-events-none" />

          {/* ✅ ONLY UPDATED PART */}
          <motion.div 
            className="flex gap-10 overflow-x-auto scroll-smooth cursor-grab active:cursor-grabbing"

            drag="x"
            dragConstraints={{ left: -2000, right: 0 }}
            whileTap={{ cursor: "grabbing" }}

            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{ width: "fit-content" }}
          >
            {LOOP_DATA.map((trip, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -20, scale: 1.05 }}
                onClick={() => router.push(`/destinations/${trip.slug}`)}
                className="flex flex-col items-center gap-8 min-w-[320px] shrink-0 cursor-pointer"
              >
                <div className="relative w-full aspect-3/4 group/card">
                  <div className="absolute inset-10 bg-black/20 blur-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
                  <div className="absolute inset-0 rounded-[4rem] border border-white/30 backdrop-blur-sm bg-white/5 group-hover/card:border-white transition-all duration-700" />
                  
                  <div className="absolute inset-4 rounded-[3.2rem] overflow-hidden bg-white shadow-2xl">
                    <motion.img 
                      src={trip.image} 
                      alt={trip.title} 
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 1.5, ease: "circOut" }}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-8 left-0 right-0 text-center">
                      <span className="text-white font-black text-xs tracking-[0.4em] uppercase">
                        {trip.title}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
