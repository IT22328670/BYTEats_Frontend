'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Signup = () => {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [username, setUsername] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        username,
        email,
        password,
        mobile,
      });
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      router.push('/login');
    } catch (err) {
      setError('Signup failed');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded-lg shadow-md">
      <div className="flex justify-center gap-4">
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800 capitalize">Register a User</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div>
              <input
                placeholder="Email"
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password input */}
            <div>
              <input
                placeholder="Password"
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Mobile input */}
            <div>
              <input
                placeholder="Mobile"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>

            {/* Username input */}
            <div>
              <input
                placeholder="Username"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500">{error}</p>}

            {/* Submit Button */}
            <div>
              <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition">
                Sign Up
              </button>
            </div>

            {/* Login Link */}
            <p className="text-sm text-center mt-2 text-gray-600">
              Already have an account?{' '}
              <a href="/login" className="text-blue-500 hover:underline">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
