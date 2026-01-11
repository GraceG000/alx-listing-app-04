// components/PropertyCard.tsx
import React from "react";
import { PropertyProps } from "@/interfaces";

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const { name, price, rating, image, address, discount } = property;
  return (
    <article className="border rounded-lg overflow-hidden shadow-sm bg-white">
      <div className="h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
        {/* In real app replace with next/image */}
        <img src={image} alt={name} className="object-cover w-full h-full" />
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{name}</h3>
          <div className="text-sm font-medium">{rating.toFixed(2)} ★</div>
        </div>

        <p className="text-sm text-gray-500 mt-1">
          {address.city}, {address.state}
        </p>

        <div className="mt-3 flex items-center justify-between">
          <div>
            <div className="text-xl font-bold">${price}</div>
            {discount && <div className="text-xs text-green-600">Save {discount}%</div>}
          </div>

          <button className="px-3 py-2 bg-blue-600 text-white rounded-md text-sm">View</button>
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;
