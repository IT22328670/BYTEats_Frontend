import React from "react";
import Restaurant from "@/interfaces/Restaurant";
import RestaurantCardPage from "../components/restaurantCard";

const RestaurantPage = async () => {
  const res = await fetch("http://localhost:5000/api/restaurant/");
  const restaurants = await res.json();

  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant: Restaurant, index: number) => (
          <li
            key={restaurant._id || index}
            className="bg-white rounded-xl shadow-lg overflow-hidden border hover:shadow-2xl transition-shadow duration-300"
          >
            <RestaurantCardPage restaurant = {restaurant}/>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantPage;
