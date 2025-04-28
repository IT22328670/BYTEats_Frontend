"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CldUploadWidget } from "next-cloudinary";
import axios from "axios";

interface CloudinaryResult {
  public_id: string;
}

const RestaurantSignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [location, setLocation] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [mobile, setMobile] = useState("");
  const [success, setSuccess] = useState(false);

  const [publicId, setPublicId] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!name || !email || !password || !location || !ownerName || !mobile || !publicId) {
      setError("Please fill in all fields.");
      return;
    }

    const restaurantData = {
      name,
      email,
      password,
      location,
      owner_name : ownerName,
      mobile,
      role: "restaurant",
      imageUrl: publicId
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/restaurant/register",
        restaurantData
      );

      if (response.status === 201) {
        setSuccess(true);
        setTimeout(() => {
          router.push("/dashboard/restaurantpage");
        }, 2000);
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response?.data?.message) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred. Please try again.");
      }
      setSuccess(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Create Restaurant</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {success && (
        <div className="text-green-500 mb-4">
          Restaurant created successfully!
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Restaurant Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Restaurant Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Owner Name */}
        <div>
          <label
            htmlFor="owner_name"
            className="block text-sm font-medium text-gray-700"
          >
            Owner Name
          </label>
          <input
            type="text"
            id="owner_name"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Mobile */}
        <div>
          <label
            htmlFor="mobile"
            className="block text-sm font-medium text-gray-700"
          >
            Mobile
          </label>
          <input
            type="text"
            id="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Image Upload */}
        <div>
          <label
            htmlFor="Image-Upload"
            className="block text-sm font-medium text-gray-700"
          >
            Upload Image
          </label>
          <CldUploadWidget uploadPreset="kwikjudn" 
          onSuccess={(result) => {
            if(result.event !== "success") return;
            const info = result.info as CloudinaryResult;
            setPublicId(info.public_id); 
          }}
          onQueuesEnd={(result, { widget }) => {
            widget.close();
          }}>
            {({ open }) => {
              return (
                <button
                  type="button"
                  className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-800 transition"
                  onClick={() => open()}
                >
                  Upload an Image
                </button>
              );
            }}
          </CldUploadWidget>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          disabled={!publicId}
        >
          {publicId ? "Create Restaurant" : "Upload Image First"}
        </button>
      </form>
    </div>
  );
};

export default RestaurantSignUp;
