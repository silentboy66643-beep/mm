'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import taperFadeImg from '@/src/assets/images/gallery_taper_fade_1784891672731.jpg';
import beardTrimImg from '@/src/assets/images/gallery_beard_trim_1784891693275.jpg';
import waitingAreaImg from '@/src/assets/images/gallery_waiting_area_1784891717718.jpg';
import skinFadeImg from '@/src/assets/images/gallery_skin_fade_1784891733261.jpg';
import toolsDetailImg from '@/src/assets/images/gallery_tools_detail_1784891746854.jpg';
import interiorWideImg from '@/src/assets/images/gallery_interior_wide_1784891763493.jpg';

const images = [
  { src: taperFadeImg, alt: 'Taper Fade Haircut' },
  { src: beardTrimImg, alt: 'Beard Trim' },
  { src: waitingAreaImg, alt: 'Luxury Waiting Area' },
  { src: skinFadeImg, alt: 'Skin Fade' },
  { src: toolsDetailImg, alt: 'Interior Detail' },
  { src: interiorWideImg, alt: 'Barber Shop Interior' },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[#050505] border-y border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-widest text-sm font-semibold mb-4"
          >
            Gallery
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-white leading-tight"
          >
            The Art of Barbering
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer bg-[#111]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium tracking-wide uppercase text-sm border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
