export interface Restaurant {
  id: string;
  name: string;
  rating: number;
  filter_ids: string[];
  image_url: string;
  delivery_time_minutes: number;
  price_range_id: string;
}

export interface RestaurantResponse {
  restaurants: Restaurant[];
}

export interface Filter {
  id: string;
  name: string;
  image_url: string;
}

export interface FilterResponse {
  filters: Filter[];
}

export interface DeliveryTimeRange {
  id: string;
  name: string;
  min: number;
  max: number | null;
}

export const DELIVERY_TIME_RANGES: DeliveryTimeRange[] = [
  { id: "dt-1", name: "0-10 min", min: 0, max: 10 },
  { id: "dt-2", name: "10-30 min", min: 10, max: 30 },
  { id: "dt-3", name: "30-60 min", min: 30, max: 60 },
  { id: "dt-4", name: "1 hour+", min: 60, max: null },
];
