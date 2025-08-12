import './globals.css';
import { Barlow_Condensed } from 'next/font/google';

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['100', '400', '700', '800'],
});

export const metadata = {
  title: 'Video Production | Mini Digital Media',
  description: 'Effective Video Production Services',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={`${barlow.className} bg-[#161616] text-white`}>
        <main className="min-h-screen max-w-3xl mx-auto px-6 py-16">
          {children}
        </main>
      </body>
    </html>
  );
}
