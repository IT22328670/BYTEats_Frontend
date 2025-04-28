import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './headers/component';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BYTEats',
  description: 'A simple food ordering app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="">{children}</main>
      </body>
    </html>
  );
}
