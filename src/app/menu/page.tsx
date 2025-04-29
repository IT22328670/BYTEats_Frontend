'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface MenuItem {
  _id: string;
  name: string;
  price: number;
  description: string;
  category: string;
}

export default function MenuPage() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const router = useRouter();

  // Load userId from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      setUserId(parsed._id);
    }
  }, []);

  // Load menu
  useEffect(() => {
    const fetchMenu = async () => {
      const res = await fetch('/data/menu.json');
      const data = await res.json();
      setMenuItems(data);
    };
    fetchMenu();
  }, []);

  const handleAddToCart = async (item: MenuItem) => {
    if (!userId) {
      toast.error('You must be logged in to add to cart.');
      return;
    }

    try {
      await axios.post('http://localhost:5002/api/cart/add', {
        userId,
        itemId: item._id,
        quantity: 1,
        price: item.price,
        name: item.name,
      });

      toast.success(`${item.name} added to cart`);
      router.push('/cart');
    } catch (error) {
      console.error('Add to cart failed:', error);
      toast.error('Failed to add item to cart');
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto min-h-screen bg-white">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Explore Our Menu
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {menuItems.map((item) => (
          <div
            key={item._id}
            className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-200"
          >
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
              <p className="text-sm text-gray-500 mt-1">{item.description}</p>
              <span className="block mt-3 text-green-700 font-semibold">
                Rs. {item.price}
              </span>
            </div>
            <button
              className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg transition"
              onClick={() => handleAddToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
