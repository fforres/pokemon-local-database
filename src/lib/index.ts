import { Pokedex, ImagesSprite, ImagesThumbnail } from '../data';
import { PokemonType } from '../types';

export const getPokemonById = (pokemonId: Number): PokemonType | null => {
  const pokemon = Pokedex.find(pokemon => {
    return pokemon.id === pokemonId;
  });

  if (!pokemon) {
    return null;
  }

  return {
    id: pokemon.id,
    stats: pokemon.base,
    name: pokemon.name,
    images: {
      sprite: ImagesSprite[pokemon.id],
      thumbnail: ImagesThumbnail[pokemon.id]
    },
    type: pokemon.type
  };
};

export const getPokemonsByNames = (pokemonName: string = ''): PokemonType[] => {
  const normalizedPokemonName = pokemonName.trim().toLowerCase();
  const pokemons =
    normalizedPokemonName === ''
      ? Pokedex
      : Pokedex.filter(pokemon => {
          return pokemon.name.english
            .toLowerCase()
            .includes(normalizedPokemonName.toLowerCase());
        });

  return pokemons.map(pokemon => {
    return {
      id: pokemon.id,
      stats: pokemon.base,
      name: pokemon.name,
      images: {
        sprite: ImagesSprite[pokemon.id],
        thumbnail: ImagesThumbnail[pokemon.id]
      },
      type: pokemon.type
    };
  });
};
