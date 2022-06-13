var numTilePossibilities = function (tiles) {
  if (tiles.length === 0) {
    return 0;
  }
  let count = 0;
  const set = new Set();
  // break down tiles and count possible combinations
  for (let i = 0; i < tiles.length; i++) {
    // skip if the tile is visited before for duplicated tiles
    if (set.has(tiles[i])) {
      continue;
    }
    // count all the sub combinations
    count += numTilePossibilities(tiles.slice(0, i) + tiles.slice(i + 1)) + 1;
    set.add(tiles[i]);
  }
  return count;
};
console.log(numTilePossibilities("AAB"));
