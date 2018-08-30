const config = {
  loadHeroesFromFile: false,
  loadTilesFromFile: false,
  loadCardsFromFile: false,
  createFakePlayers: false
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

const createFakePlayers = {
  createFakePlayers: true
};

export default Object.assign({}, config,
  loadHeroesFromFile,
  loadTilesFromFile,
  loadCardsFromFile,
  createFakePlayers
);
