// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google'; // Add this import

// Initialize the Inter font
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Payment Processing App',
  description: 'A simple payment processing application using Stripe',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <div>
            <h1>BYTEats Payment System</h1>
          </div>
        </header>
        <main>{children}</main>
        <footer>
          <div>
            <p>&copy; {new Date().getFullYear()} BYTEats. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}