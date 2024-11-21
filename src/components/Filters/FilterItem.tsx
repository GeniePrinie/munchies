import React from "react";
import { Filter } from "../../types";

interface FilterItemProps {
  filter: Filter;
  isActive: boolean;
  onToggle: (filter: Filter) => void;
}

const FilterItem: React.FC<FilterItemProps> = ({
  filter,
  isActive,
  onToggle,
}) => {
  return (
    <button
      onClick={() => onToggle(filter)}
      className={`
        relative 
        w-44 h-20 p-3 rounded-lg flex-shrink-0 min-w-[176px] border border-gray-200
        transition-all duration-200 ease-in-out
        hover:shadow-md
      ${
        isActive
          ? "bg-blue-50 border border-blue-500 text-blue-700"
          : "bg-white border border-gray-100 text-gray-700 hover:bg-gray-50"
      }
    `}
    >
      <div className="text-sm absolute top-3 left-3">{filter.name}</div>

      <div className="absolute -top-1 -right-3 w-20 h-auto overflow-hidden flex-shrink-0">
        <img
          src={filter.image_url}
          alt={filter.name}
          className="w-full h-full object-cover"
        />
      </div>
    </button>
  );
};

export default FilterItem;
