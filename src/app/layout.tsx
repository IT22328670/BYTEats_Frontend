import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './headers/component';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Food App',
  description: 'A simple food ordering app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="p-4 max-w-6xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
