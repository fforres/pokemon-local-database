import images_base64_sprite from './images_base64_sprite.json';
import images_base64_thumbnail from './images_base64_thumbnail.json';

import items from './items.json';
import moves from './moves.json';
import pokedex from './pokedex.json';
import types from './types.json';
import { ImagesType } from '../types';

export const ImagesSprite = images_base64_sprite as ImagesType;
export const ImagesThumbnail = images_base64_thumbnail as ImagesType;
export const Items = items;
export const Moves = moves;
export const Pokedex = pokedex;
export const Types = types;
