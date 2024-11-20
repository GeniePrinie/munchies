import { ENDPOINTS } from "../endpoints";
import { Filter, Restaurant } from "../../types";

export const getRestaurants = async (): Promise<Restaurant[]> => {
  try {
    const response = await fetch(ENDPOINTS.restaurants);
    if (!response.ok) throw new Error("Failed to fetch restaurants");

    const data = await response.json();
    if (Array.isArray(data)) {
      return data;
    } else if (data && typeof data === "object") {
      const restaurants = data.data || data.restaurants || [];
      if (Array.isArray(restaurants)) {
        return restaurants;
      }
    }

    return [];
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    throw error;
  }
};

export const getFilters = async (): Promise<Filter[]> => {
  try {
    const response = await fetch(ENDPOINTS.filters);

    if (!response.ok) {
      throw new Error(`Failed to fetch filters: ${response.status}`);
    }
    const data = await response.json();

    return data.filters || [];
  } catch (error) {
    console.error("Error fetching filters:", error);
    throw error;
  }
};
