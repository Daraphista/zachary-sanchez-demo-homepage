import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata = {
  title: 'Steinberg Luxury Real Estate | NYC, Hamptons, South Florida',
  description: 'Decades of record-breaking sales and world-class experience distinguish our team as one of the best in the nation.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="bg-[#0a0a0a] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
