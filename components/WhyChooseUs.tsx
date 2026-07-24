'use client';

import { motion } from 'motion/react';
import { Award, Heart, ThumbsUp, Coffee } from 'lucide-react';

export function WhyChooseUs() {
  const stats = [
    { label: 'Reviews', value: '323+', icon: <ThumbsUp size={24} /> },
    { label: 'Rating', value: '5.0', icon: <Award size={24} /> },
    { label: 'Happy Clients', value: '1000+', icon: <Heart size={24} /> },
    { label: 'Years Exp', value: '10+', icon: <Coffee size={24} /> },
  ];

  const reasons = [
    'Professional Barbers',
    'Luxury Experience',
    'Premium Products',
    'Modern Equipment',
    'Clean Environment',
    'Excellent Customer Service',
    'Affordable Pricing',
    'Consistent Quality'
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-gold uppercase tracking-widest text-sm font-semibold mb-4">Why Us</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
              The Noor <br />
              <span className="italic text-zinc-400">Difference</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span className="text-zinc-300 font-medium">{reason}</span>
                </div>
              ))}
            </div>
            
            <a href="#contact" className="text-gold border-b border-gold pb-1 hover:text-gold-light hover:border-gold-light transition-colors">
              Find out where we are &rarr;
            </a>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-[#141414] border border-white/5 p-8 rounded-2xl flex flex-col items-center justify-center text-center group hover:border-gold/30 transition-colors"
              >
                <div className="text-gold mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-4xl font-serif text-white font-bold mb-2">{stat.value}</div>
                <div className="text-sm uppercase tracking-wider text-zinc-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
