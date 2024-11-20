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
