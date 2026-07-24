'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Star, CheckCircle2 } from 'lucide-react';
import aboutImg from '@/src/assets/images/about_barber_cutting_1784891807976.jpg';

export function About() {
  const features = [
    'Professional Team',
    'Friendly Atmosphere',
    'Luxury Experience',
    'Attention to Detail'
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full rounded-2xl overflow-hidden group"
          >
            <Image
              src={aboutImg}
              alt="NOOR Barber Professional Cutting"
              fill
              placeholder="blur"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
              referrerPolicy="no-referrer"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
            
            {/* Rating Badge */}
            <div className="absolute bottom-8 left-8 bg-[#141414]/90 backdrop-blur-md border border-white/10 p-6 rounded-xl flex items-center gap-4 shadow-2xl shadow-black/50">
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-gold mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <span className="text-white font-bold text-xl">5.0 Rating</span>
                <span className="text-zinc-400 text-sm">323+ Reviews</span>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-gold uppercase tracking-widest text-sm font-semibold mb-4">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
              A New Standard of <br />
              <span className="italic text-zinc-400">Grooming</span>
            </h3>
            
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              At NOOR Barber, we believe a haircut is more than just a routine&mdash;it&apos;s an experience. Located in the heart of Maidstone, our luxury studio blends timeless barbering techniques with modern aesthetics. 
            </p>
            <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
              Whether you&apos;re looking for a sharp skin fade, a classic cut, or a hot towel shave, our expert barbers are dedicated to providing precision and perfection in every detail.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle2 className="text-gold" size={20} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <div className="font-serif text-4xl text-zinc-500/50 italic tracking-widest">NOOR Barber</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
