import React from "react";
import { Restaurant } from "../../types";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  return (
    <div className="p-4 border rounded-lg hover:shadow-md w-auto h-44 transition-shadow relative overflow-hidden">
      <img
        src={restaurant.image_url}
        alt={restaurant.name}
        className="absolute -top-2 -right-6 w-28 h-20 object-cover rounded-md"
      />

      <div className="flex flex-col justify-between h-full pr-24">
        <div>
          <p className="border rounded-full px-3 py-1 inline-block ">
            {restaurant.delivery_time_minutes} min
          </p>
        </div>

        <div>
          <h3 className="text-2xl">{restaurant.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
