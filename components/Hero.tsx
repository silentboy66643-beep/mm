'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import heroBgImg from '@/src/assets/images/hero_barber_interior_1784891791883.jpg';

export function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax effect simulation using fixed attachment */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBgImg}
          alt="Premium Barber Shop Interior"
          fill
          priority
          placeholder="blur"
          className="object-cover"
          sizes="100vw"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white font-bold leading-tight mb-6"
        >
          Precision Cuts.<br />
          <span className="text-gold italic">Timeless Style.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto text-balance"
        >
          Experience Maidstone&apos;s highest-rated premium barber shop with professional fades, beard styling and exceptional customer service.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#book"
            className="w-full sm:w-auto px-8 py-4 bg-gold text-black rounded-full font-bold uppercase tracking-wider hover:bg-gold-light hover:shadow-[0_0_20px_rgba(207,170,96,0.3)] hover:-translate-y-1 transition-all duration-300"
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-full font-bold uppercase tracking-wider hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
          >
            View Services
          </a>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 mb-3">Scroll</span>
        <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
          <motion.div
            animate={{
              y: ['-100%', '100%'],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: 'linear',
            }}
            className="absolute top-0 left-0 w-full h-full bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
