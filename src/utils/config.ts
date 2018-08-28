const config = {
  loadHeroesFromFile: false,
  loadTilesFromFile: false,
  loadCardsFromFile: false
};

const loadHeroesFromFile = {
  loadHeroesFromFile: true
};

const loadTilesFromFile = {
  loadTilesFromFile: true
};

const loadCardsFromFile = {
  loadCardsFromFile: true
};

export default Object.assign({}, config,
  loadHeroesFromFile,
  loadTilesFromFile,
  loadCardsFromFile);
