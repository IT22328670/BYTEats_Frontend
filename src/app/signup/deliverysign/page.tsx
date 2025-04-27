'use client';

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const deliverySignUp = () => {
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [nic, setNic] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/api/delivery/register", {
        name,
        age,
        nic,
        vehicle,
        mobile,
        email,
        password,
        address,
        licenseNumber,
      });

      const { token, delivery } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("delivery", JSON.stringify(delivery));

      router.push("/login");
    } catch (err) {
      setError("Signup failed. Please check your credentials.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded-lg shadow-md">
      <div className="flex justify-center gap-4">
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800 capitalize">Register a Delivery User</h2>
          {error && <p className="text-red-500">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                placeholder="Name"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Age input */}
            <div>
              <input
                placeholder="Age"
                type="number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>

            {/* NIC input */}
            <div>
              <input
                placeholder="NIC (Optional)"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                value={nic}
                onChange={(e) => setNic(e.target.value)}
              />
            </div>

            {/* Vehicle input */}
            <div>
              <input
                placeholder="Vehicle Type"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                required
              />
            </div>

            {/* Mobile input */}
            <div>
              <input
                placeholder="Mobile Number"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>

            {/* Email input */}
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


            {/* Address input */}
            <div>
              <input
                placeholder="Address"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />

            </div>

              <div>
                <input
                  placeholder="License Number"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  value={licenseNumber}
                  onChange={(e) => setLicenseNumber(e.target.value)}
                  required
                />
              </div>

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
export default deliverySignUp;


