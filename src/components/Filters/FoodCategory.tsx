import React from "react";
import { Filter } from "../../types";

interface FoodCategoryProps {
  filter: Filter;
  isActive: boolean;
  onToggle: (filter: Filter) => void;
}

const FoodCategory: React.FC<FoodCategoryProps> = ({
  filter,
  isActive,
  onToggle,
}) => {
  return (
    <button
      onClick={() => onToggle(filter)}
      className={`
        w-fit 
        px-3 pb-1 
        rounded-lg 
        transition-all duration-200 ease-in-out
        hover:shadow-md
      ${
        isActive
          ? "bg-blue-50 border border-blue-500 text-blue-700"
          : "bg-white border border-gray-100 text-gray-700 hover:bg-gray-50"
      }
    `}
    >
      <span className="text-xs whitespace-nowrap">{filter.name}</span>
    </button>
  );
};

export default FoodCategory;
