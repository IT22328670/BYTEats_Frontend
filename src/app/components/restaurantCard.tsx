'use client';
import React from 'react'
import Image from 'next/image'
import Restaurant from '@/interfaces/Restaurant';
import Link from 'next/link';

interface RestaurantCardPageProps {
  restaurant: Restaurant;
}

function getImageUrl(publicId: string): string {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const transformations = 'c_limit,w_960,f_auto,q_auto';
  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformations}/${publicId}`;
}

const RestaurantCardPage = ({ restaurant }: RestaurantCardPageProps) => {
  return (
    <>
    <Link href="/restaurants/[id]" as={`/restaurants/${restaurant._id}`} className="block">
      <Image
        src={getImageUrl(restaurant.imageUrl)}
        alt={restaurant.name}
        width={960}
        height={600}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2 text-gray-800 flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
          {restaurant.name}
        </h2>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Location:</span> {restaurant.location}
        </p>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Owner:</span> {restaurant.owner_name}
        </p>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Email:</span> {restaurant.email}
        </p>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Mobile:</span> {restaurant.mobile}
        </p>
        <span className="inline-block mt-4 px-3 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full">
          {restaurant.role}
        </span>
      </div>
      </Link>
    </>
  );
};

export default RestaurantCardPage;
