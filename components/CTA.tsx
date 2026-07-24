'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Phone, MapPin, Instagram } from 'lucide-react';
import ctaBgImg from '@/src/assets/images/cta_barber_tools_1784891824138.jpg';

export function CTA() {
  return (
    <section id="book" className="relative py-32 overflow-hidden border-y border-white/5">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={ctaBgImg}
          alt="Barber Tools Background"
          fill
          placeholder="blur"
          className="object-cover"
          sizes="100vw"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/90 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-serif text-white font-bold mb-6 leading-tight">
            Book Your Next <br />
            <span className="italic text-gold">Appointment Today</span>
          </h2>
          
          <p className="text-zinc-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Experience the finest grooming services in Maidstone. Our chairs fill up fast, so reserve your spot now.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="tel:+441622221401"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-gold text-black rounded-full font-bold uppercase tracking-wider hover:bg-gold-light hover:scale-105 transition-all duration-300"
            >
              <Phone size={20} />
              Call Now
            </a>
            <a
              href="https://maps.google.com/?q=106+King+St,+Maidstone+ME14+1BH"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-[#141414] border border-white/20 text-white rounded-full font-bold uppercase tracking-wider hover:bg-white/10 transition-all duration-300"
            >
              <MapPin size={20} />
              Directions
            </a>
            <a
              href="#"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold uppercase tracking-wider hover:border-gold hover:text-gold transition-all duration-300"
            >
              <Instagram size={20} />
              Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
