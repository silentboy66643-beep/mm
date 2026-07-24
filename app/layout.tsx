import type {Metadata} from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: 'NOOR Barber | Premium Luxury Barber in Maidstone',
  description: 'Experience Maidstone\'s highest-rated premium barber shop with professional fades, beard styling and exceptional customer service.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.variable} ${playfair.variable} font-sans bg-[#0a0a0a] text-zinc-300 antialiased selection:bg-[#cfaa60]/30 selection:text-[#eaddb6]`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
