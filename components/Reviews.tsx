'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'James Walker',
    text: 'Absolutely amazing experience! The team transformed my haircut perfectly and made me feel comfortable throughout.',
    rating: 5,
  },
  {
    name: 'Oliver Smith',
    text: 'Best skin fade I\'ve had in Maidstone. Friendly staff with incredible attention to detail.',
    rating: 5,
  },
  {
    name: 'Thomas Evans',
    text: 'Even after moving away I still travel back because nobody compares. Highly recommended!',
    rating: 5,
  },
];

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex flex-col items-center justify-center p-6 bg-[#141414] border border-white/5 rounded-2xl mb-12 shadow-2xl"
          >
            <div className="flex text-gold mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
            </div>
            <div className="text-3xl font-bold text-white mb-1">5.0 / 5</div>
            <div className="text-zinc-400 font-medium">Based on 323+ Reviews</div>
          </motion.div>
        </div>

        <div className="relative">
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 p-3 rounded-full bg-[#141414] border border-white/10 text-white hover:bg-gold hover:text-black transition-colors"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="overflow-hidden px-4 md:px-12 py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col items-center text-center"
              >
                <Quote size={48} className="text-gold/20 mb-6" />
                <p className="text-xl md:text-3xl font-serif text-zinc-300 leading-relaxed mb-8 text-balance">
                  &quot;{reviews[currentIndex].text}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-black font-bold text-lg">
                    {reviews[currentIndex].name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <div className="text-white font-bold text-lg">{reviews[currentIndex].name}</div>
                    <div className="flex text-gold">
                      {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 p-3 rounded-full bg-[#141414] border border-white/10 text-white hover:bg-gold hover:text-black transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-gold w-8' : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
