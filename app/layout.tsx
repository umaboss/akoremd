import type { Metadata } from 'next';
import { Space_Grotesk, Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import GlobeMount from '@/components/GlobeMount';
import Effects from '@/components/Effects';

const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});
const body = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});
const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CapitalChain — We Connect Traders To Capital',
  description:
    'Capital Chain is the bridge between your forex trading skills and real earnings — built on transparency, fast payouts and leading technology.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="light">
        <ThemeProvider>
          {/* Fixed full-viewport WebGL globe — rendered once, persists across routes. */}
          <GlobeMount />
          {/* Fixed scrims + JS-driven chrome + all page micro-interactions. */}
          <Effects />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
