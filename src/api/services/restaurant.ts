import { ENDPOINTS } from "../endpoints";
import { Restaurant } from "../../types";

export const getRestaurants = async (): Promise<Restaurant[]> => {
  try {
    const response = await fetch(ENDPOINTS.restaurants);
    if (!response.ok) throw new Error("Failed to fetch restaurants");

    const data = await response.json();
    console.log("API response data:", data);

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
