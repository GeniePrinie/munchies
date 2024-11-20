import React, { useEffect, useState } from "react";
import RestaurantList from "./components/RestaurantList/RestaurantList";
import Topbar from "./components/Layout/Topbar";
import { Filter } from "./types";
import { getFilters } from "./api/services";

function App() {
  const [filters, setFilters] = useState<Filter[]>([]);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const filtersData = await getFilters();
        setFilters(filtersData);
      } catch (error) {
        console.error("App: Error fetching filters:", error);
      }
    };

    fetchFilters();
  }, []);

  const handleFilterToggle = (filter: Filter) => {
    setActiveFilters((prev) =>
      prev.includes(filter.id)
        ? prev.filter((id) => id !== filter.id)
        : [...prev, filter.id]
    );
  };
  return (
    <div className="bg-gray-50  py-6 px-7">
      <header className="flex items-center gap-2">
        <div className="w-7">
          <img src="/images/logo/munchiesLogo.png" alt="munchies logo" />
        </div>
        <h1 className="text-4xl">Munchies</h1>
      </header>
      <Topbar
        filters={filters}
        activeFilters={activeFilters}
        onToggle={handleFilterToggle}
      />
      <RestaurantList activeFilters={activeFilters} />
    </div>
  );
}

export default App;
