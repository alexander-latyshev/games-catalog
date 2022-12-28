export interface IPlatform {
  id: number;
  slug: string;
  name: string;
  added: number;
}

export interface IPlatformsList {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  image?: any;
  year_start?: number;
  year_end?: any;
  games: IPlatform[];
}

export interface IAvailablePlatform {
  id: number;
  name: string;
  slug: string;
}

export interface IAvailablePlatforms {
  platform: IAvailablePlatform;
}
