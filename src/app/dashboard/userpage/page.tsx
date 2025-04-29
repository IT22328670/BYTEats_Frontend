'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/stores/useCartStore';

const UserPage = () => {
  const [userId, setUserId] = useState('');
  const [username, setUsername] = useState('');
  const router = useRouter();
  const { fetchCart } = useCartStore();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        const parsed = JSON.parse(userData);
        setUserId(parsed._id);
        setUsername(parsed.username);
        fetchCart(parsed._id);
        
      } catch (error) {
        console.error('Error parsing user data from localStorage', error);
      }
    } else {
      router.push('/login');    
    }
  }, [fetchCart, router]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        Welcome, {username || 'Guest'}!
      </h1>

      <div className="text-gray-600 mb-6">
        <p>User ID: <span className="font-mono">{userId}</span></p>
      </div>

      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
      >
        Logout
      </button>
    </div>
  );
};

export default UserPage;
