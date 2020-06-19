export type PokemonType = {
  id: number;
  images: {
    sprite: string;
    thumbnail: string;
  };
  name: {
    english: string;
    japanese: string;
    chinese: string;
    french: string;
  };
  type: string[];
  stats: {
    HP: number;
    Attack: number;
    Defense: number;
    'Sp. Attack': number;
    'Sp. Defense': number;
    Speed: number;
  };
};

export type ImagesType = {
  [key: string]: string;
};
