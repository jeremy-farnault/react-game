const config = {
  loadHeroesFromFile: false,
  loadTilesFromFile: false
}

const loadHeroesFromFile = {
  loadHeroesFromFile: true
}

const loadTilesFromFile = {
  loadTilesFromFile: true
}

export default Object.assign({}, config, loadHeroesFromFile, loadTilesFromFile)
