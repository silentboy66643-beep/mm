'use client';

import { motion } from 'motion/react';
import { Scissors, Sparkles, Droplets, Baby, SprayCan, Wind } from 'lucide-react';

export function Services() {
  const services = [
    {
      title: 'Skin Fade',
      description: 'Precision fading down to the skin for a sharp, clean finish.',
      icon: <Scissors size={32} strokeWidth={1.5} />,
      price: '£22'
    },
    {
      title: 'Taper Fade',
      description: 'Seamless taper at the temples and neckline, keeping bulk on top.',
      icon: <Sparkles size={32} strokeWidth={1.5} />,
      price: '£20'
    },
    {
      title: 'Classic Haircut',
      description: 'Timeless styles tailored to your head shape and preference.',
      icon: <Scissors size={32} strokeWidth={1.5} />,
      price: '£18'
    },
    {
      title: 'Beard Trim',
      description: 'Sculpting, shaping, and lining up with a straight razor finish.',
      icon: <Droplets size={32} strokeWidth={1.5} />,
      price: '£12'
    },
    {
      title: 'Hot Towel Shave',
      description: 'Traditional luxury shave with hot towels and premium oils.',
      icon: <Wind size={32} strokeWidth={1.5} />,
      price: '£25'
    },
    {
      title: 'Kids Haircuts',
      description: 'Patience and style for the younger gentlemen (under 12s).',
      icon: <Baby size={32} strokeWidth={1.5} />,
      price: '£15'
    },
    {
      title: 'Hair Styling',
      description: 'Wash, blow-dry, and styled with our premium product range.',
      icon: <SprayCan size={32} strokeWidth={1.5} />,
      price: '£10'
    }
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#050505] relative border-y border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-widest text-sm font-semibold mb-4"
          >
            Our Services
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-white leading-tight"
          >
            Premium Grooming
          </motion.h3>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative bg-[#0f0f0f] border border-white/5 p-8 rounded-2xl hover:bg-[#141414] transition-colors duration-500 overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[150px] bg-gold/10 opacity-0 group-hover:opacity-100 blur-[60px] transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <div className="flex justify-between items-baseline mb-4">
                  <h4 className="text-2xl font-serif text-white group-hover:text-gold transition-colors">{service.title}</h4>
                  <span className="text-gold text-xl font-medium">{service.price}</span>
                </div>
                <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
           <a
            href="#book"
            className="inline-block px-8 py-4 bg-transparent border border-gold text-gold rounded-full font-bold uppercase tracking-wider hover:bg-gold hover:text-black transition-all duration-300"
          >
            View Full Menu & Book
          </a>
        </div>
      </div>
    </section>
  );
}
