'use client';

import { Menu, X, Utensils, Truck } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      
      <header className="flex justify-between items-center p-4 bg-white shadow sticky top-0 z-50">
        
        <div className="flex items-center space-x-4">
          <button onClick={() => setIsOpen(true)} className="text-gray-700">
            <Menu size={28} />
          </button>
          <Link href="/" className="text-2xl font-bold text-green-600">
            BYTEats
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/login">
            <button className="px-4 py-2 border border-green-600 text-green-600 rounded hover:bg-green-50 transition">
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
              SignUp
            </button>
          </Link>
        </div>
      </header>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 backdrop-blur-sm"
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-md z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold text-green-600">BYTEats</h2>
          <button onClick={() => setIsOpen(false)} className='text-red-700'>
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-4">
          <div className="space-y-2">
            
            <Link href="/login" onClick={() => setIsOpen(false)}>
              <button className="w-full px-4 py-2 border border-green-600 text-green-600 rounded hover:bg-green-50 transition">
                Login
              </button>
            </Link>

            <Link href="/signup" onClick={() => setIsOpen(false)}>
              <button className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
                Sign Up
              </button>
            </Link>
          </div>

          <hr className="my-2" />

          <div className="space-y-2">
            <Link
              href="/signup/restaurantsign"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2 hover:text-green-600"
            >
              <Utensils size={18} />
              <span>Register your Restaurant</span>
            </Link>

            <Link
              href="/signup/deliverysign"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2 hover:text-green-600"
            >
              <Truck size={18} />
              <span>Sign up to Deliver</span>
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
}