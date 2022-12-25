export interface IGame {
  id: number;
  slug: string;
  name: string;
  added: number;
}

export interface IGamesList {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  image?: any;
  year_start?: number;
  year_end?: any;
  games: IGame[];
}
