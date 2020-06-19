const path = require('path');
const fs = require('fs').promises;
const imageToBase64 = require('image-to-base64');
const glob = require('globby');
const pMap = require('p-map');

const writeFile = (pokemonObject, key) =>
  fs.writeFile(
    `./src/data/images_base64_${key}.json`,
    JSON.stringify(pokemonObject, null, 2)
  );

const mapImagesToObject = async (array, key) => {
  const pokeObject = {};
  let itemsFinished = 0;
  await pMap(
    array,
    async fileName => {
      const base64 = await imageToBase64(fileName);
      const pokemonNumber = path
        .basename(fileName, '.png')
        .substring(0, 3)
        .toString();

      if (!pokeObject[pokemonNumber]) {
        pokeObject[pokemonNumber] = {};
      }
      pokeObject[pokemonNumber] = base64;
      itemsFinished++;
    },
    {
      concurrency: 10
    }
  );
  console.log(`${key} - finished: ${itemsFinished} images`);
  await writeFile(pokeObject, key);
  console.log(`${key} - finished creating database`);
};

const start = async () => {
  const images = await glob('src/data/images/**/*.png');
  const sprites = await glob('src/data/sprites/**/*.png');
  const thumbnails = await glob('src/data/thumbnails/**/*.png');

  await mapImagesToObject(images, 'image');
  await mapImagesToObject(sprites, 'sprite');
  await mapImagesToObject(thumbnails, 'thumbnail');
};

start().catch(error => {
  console.error(error);
});
