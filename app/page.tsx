import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Gallery } from '@/components/Gallery';
import { Reviews } from '@/components/Reviews';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/CustomCursor';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] overflow-hidden text-zinc-300">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Reviews />
      <CTA />
      <Footer />
    </main>
  );
}
