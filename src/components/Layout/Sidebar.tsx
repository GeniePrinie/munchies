import React from "react";
import { Filter } from "../../types";
import FoodCategory from "../Filters/FoodCategory";

interface SidebarProps {
  filters: Filter[];
  activeFilters: string[];
  onToggle: (filter: Filter) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  filters,
  activeFilters,
  onToggle,
}) => {
  if (!Array.isArray(filters)) {
    return null;
  }
  return (
    <aside className="bg-white border rounded-lg border-gray-200 shadow-sm overflow-y-auto p-4">
      <h3 className="text-xl">Filter</h3>

      <div className="flex flex-col  gap-4 pb-4">
        <h4 className="text-gray-400 uppercase text-xs font-semibold pt-5">
          Food category
        </h4>

        {filters.map((filter) => (
          <FoodCategory
            key={filter.id}
            filter={filter}
            isActive={activeFilters.includes(filter.id)}
            onToggle={onToggle}
          />
        ))}

        <h4 className="text-gray-400 uppercase text-xs font-semibold pt-5">
          Delivery time
        </h4>

        <h4 className="text-gray-400 uppercase text-xs font-semibold pt-5">
          Price range
        </h4>
      </div>
    </aside>
  );
};

export default Sidebar;
