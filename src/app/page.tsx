'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 bg-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to the BYTEats Food Ordering App</h1>
      <p className="text-lg mb-6">Manage your cart and place your order with ease.</p>
      <Link href="/menu">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
          Go to Menu
        </button>
      </Link>
    </main>
  );
}
