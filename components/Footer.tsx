'use client';

import { MapPin, Phone, Clock, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#050505] pt-24 pb-12 relative border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div>
            <div className="text-3xl font-serif text-white tracking-widest font-bold mb-6">
              NOOR <span className="text-gold">BARBER</span>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Maidstone&apos;s premier luxury barber shop, delivering precision cuts and timeless style in a modern, professional environment.
            </p>
            <div className="flex gap-4">
              {/* Social icons */}
              <a href="#" className="w-10 h-10 rounded-full bg-[#141414] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-gold hover:border-gold transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Gallery', 'Reviews'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-zinc-400 hover:text-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-400">
                <MapPin className="text-gold shrink-0 mt-1" size={18} />
                <span>
                  106 King St<br />
                  Maidstone<br />
                  ME14 1BH<br />
                  United Kingdom
                </span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400">
                <Phone className="text-gold shrink-0" size={18} />
                <a href="tel:+441622221401" className="hover:text-white transition-colors">
                  +44 1622 221401
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Opening Hours</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-400">
                <Clock className="text-gold shrink-0 mt-1" size={18} />
                <div className="flex flex-col">
                  <span className="font-medium text-white mb-1">Monday – Saturday</span>
                  <span>9:00 AM - 7:00 PM</span>
                  <span className="font-medium text-white mt-3 mb-1">Sunday</span>
                  <span>Closed</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Map Embed */}
        <div className="w-full h-[300px] rounded-xl overflow-hidden mb-12 border border-white/5">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.7437812555543!2d0.5215096769151571!3d51.27218693529321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47df3211de444d31%3A0xe6ec8b23707ce1e1!2s106%20King%20St%2C%20Maidstone%20ME14%201BH%2C%20UK!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale invert opacity-80 mix-blend-screen"
          />
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} NOOR Barber. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[#141414] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-gold hover:border-gold transition-colors"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
