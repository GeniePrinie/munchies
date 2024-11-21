import React from "react";
import { Filter } from "../../types";
import FilterItem from "../Filters/FilterItem";

interface TopbarProps {
  filters: Filter[];
  activeFilters: string[];
  onToggle: (filter: Filter) => void;
}

const Topbar: React.FC<TopbarProps> = ({
  filters,
  activeFilters,
  onToggle,
}) => {
  if (!Array.isArray(filters)) {
    return null;
  }
  return (
    <header className="bg-gray-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          <div className="flex overflow-x-auto gap-4 pb-4">
            {filters.map((filter) => (
              <FilterItem
                key={filter.id}
                filter={filter}
                isActive={activeFilters.includes(filter.id)}
                onToggle={onToggle}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
