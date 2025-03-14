import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { IoMdNavigate } from "react-icons/io";

interface SpaceCardProps {
  name: string;
  images: string[];
  distance: number;
  is_day_pass_enabled: boolean;
  day_pass_price: number;
  day_pass_discounts_percentage: {
    [key: string]: {
      value: number;
      message: string;
    };
  };
}

const SpaceCard: React.FC<SpaceCardProps> = ({
  name,
  images,
  distance,
  is_day_pass_enabled,
  day_pass_price,
  day_pass_discounts_percentage,
}) => {
  const bulkPassDays = 10;
  const discount = day_pass_discounts_percentage[bulkPassDays.toString()];
  const bulkPrice = discount
    ? day_pass_price * bulkPassDays * (1 - discount.value / 100)
    : day_pass_price * bulkPassDays;

  return (
    <div className="rounded-lg shadow-md p-4 bg-white w-full max-w-sm mx-auto">
      {/* Name & Distance */}
      <div className="flex justify-between items-start min-h-[60px]">
        <h3 className="text-lg font-semibold leading-tight">{name}</h3>
        <div className="flex flex-col items-center">
          <IoMdNavigate className="text-gray-500 text-2xl" />
          <span className="text-gray-600 text-sm">{distance} Kms</span>
        </div>
      </div>

      {/* Image */}
      <div className="relative mt-2">
        <img
          src={images[0]}
          alt={name}
          className="w-full h-40 object-cover rounded-md"
        />
        <span className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 text-xs rounded">
          Workspace
        </span>
      </div>

      {/* Pricing Options */}
      {is_day_pass_enabled && (
        <div className="flex flex-row justify-between mt-4 gap-2">
          {/* Day Pass */}
          <div className="flex-1 p-3 rounded-md bg-[#F9F9F9] shadow-md flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Day Pass</p>
              <p className="text-lg font-semibold text-black">
                ₹ {day_pass_price}/Day
              </p>
            </div>
            <FaAngleDoubleRight className="text-gray-400 text-lg" />
          </div>

          {/* Bulk Pass */}
          <div className="relative flex-1 bg-yellow-400 text-black p-3 rounded-md shadow-md flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Bulk Pass</p>
              <p className="text-lg font-semibold">
                ₹ {bulkPrice.toFixed(0)}
                <span className="text-sm font-normal"> /10 Days</span>
              </p>
            </div>
            <FaAngleDoubleRight className="text-gray-800 text-lg" />

            {/* Discount Tag */}
            {discount?.message && (
              <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md shadow-md whitespace-nowrap">
                {discount.value}% Discount
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SpaceCard;
