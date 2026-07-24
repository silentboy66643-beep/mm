'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          <Link href="#home" className="text-2xl font-serif text-white tracking-widest font-bold z-50">
            NOOR <span className="text-gold">BARBER</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-wider text-zinc-300 hover:text-gold transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#book"
              className="bg-gold text-black px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-gold-light hover:scale-105 transition-all duration-300 active:scale-95"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`fixed inset-0 bg-[#0a0a0a] z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-serif text-zinc-300 hover:text-gold transition-colors duration-300"
          >
            {link.name}
          </Link>
        ))}
        <Link
          href="#book"
          onClick={() => setIsMobileMenuOpen(false)}
          className="mt-8 bg-gold text-black px-8 py-3 rounded-full text-lg font-semibold uppercase tracking-wider active:scale-95 transition-transform"
        >
          Book Now
        </Link>
      </div>
    </motion.header>
  );
}
