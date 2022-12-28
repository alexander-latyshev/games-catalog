export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Store {
  id: number;
  name: string;
  slug: string;
}

export interface Rating {
  id: number;
  title: string;
  count: number;
  percent: number;
}

export interface AddedByStatus {
  yet: number;
  owned: number;
  beaten: number;
  toplay: number;
  dropped: number;
  playing: number;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
  language: string;
  games_count: number;
  image_background: string;
}

export interface EsrbRating {
  id: number;
  name: string;
  slug: string;
  name_en: string;
  name_ru: string;
}

export interface ShortScreenshot {
  id: number;
  image: string;
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
}

export interface IGame {
  slug: string;
  name: string;
  playtime: number;
  platforms: Platform[];
  stores: Store[];
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: Rating[];
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: AddedByStatus;
  metacritic?: number;
  suggestions_count: number;
  updated: Date;
  id: number;
  score?: any;
  clip?: any;
  tags: Tag[];
  esrb_rating: EsrbRating;
  user_game?: any;
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  short_screenshots: ShortScreenshot[];
  parent_platforms: Platform[];
  genres: Genre[];
}
