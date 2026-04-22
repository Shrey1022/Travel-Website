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

         {/* RIGHT SLIDER */}
        <div className="w-full lg:w-1/2 relative overflow-hidden py-16">
          
         
          {/* SLIDER */}
          <motion.div
            className="flex gap-8 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: -2000, right: 0 }}
            whileTap={{ cursor: "grabbing" }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            style={{ width: "fit-content" }}
          >
            {LOOP_DATA.map((trip, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -15, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                onClick={() => router.push(`/destinations/${trip.slug}`)}
                className="flex flex-col items-center min-w-260px sm:min-w-300px md:min-w-[320px] cursor-pointer"
              >
                <div className="relative w-full aspect-3/4 group">
                  
                  {/* Glow */}
                  <div className="absolute inset-6 bg-black/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

                  {/* Border */}
                  <div className="absolute inset-0 rounded-[2.5rem] border border-white/30 bg-white/5 backdrop-blur-md group-hover:border-white transition" />

                  {/* Image container */}
                  <div className="absolute inset-3 rounded-2rem overflow-hidden shadow-xl">
                    <motion.img
                      src={trip.image}
                      alt={trip.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 1.2 }}
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

                    {/* Title */}
                    <div className="absolute bottom-6 left-0 right-0 text-center">
                      <span className="text-white font-bold text-xs tracking-[0.4em]">
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
