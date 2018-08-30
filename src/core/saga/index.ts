import { cards } from '../../dbstore/cards'
import { heroes } from '../../dbstore/heroes'
import config from '../../utils/config'
import { DefaultTiles } from '../../utils/defaults'
import {
  loadAllCardsFail,
  loadAllCardsSuccess,
  loadAllHeroesFail,
  loadAllHeroesSuccess,
  loadTilesFail,
  loadTilesSuccess
} from "../actions";
import { ICards, IHeroes, ITile } from "../models";

import { fork, put } from 'redux-saga/effects'

function* loadAllHeroes() {
  let response: { data: IHeroes } = { data: {} }
  try {
    if (config.loadHeroesFromFile) {
      response = { data: heroes }
    }
    yield put(loadAllHeroesSuccess(response))
  } catch (err) {
    console.warn('loadHeroes failed', JSON.parse(JSON.stringify(err)))
    yield put(loadAllHeroesFail(err))
  }
}

function* loadAllCards() {
  let response: { data: ICards } = { data: {} }
  try {
    if (config.loadCardsFromFile) {
      response = { data: cards }
    }
    yield put(loadAllCardsSuccess(response))
  } catch (err) {
    console.warn('loadCards failed', JSON.parse(JSON.stringify(err)))
    yield put(loadAllCardsFail(err))
  }
}

function* loadTiles() {
  let response: { data: ITile[][] } = { data: [] }
  try {
    if (config.loadTilesFromFile) {
      response = { data: DefaultTiles }
    }
    const responseData = response.data
    yield put(loadTilesSuccess({ data: responseData }))
  } catch (err) {
    console.warn('loadTiles failed', JSON.parse(JSON.stringify(err)))
    yield put(loadTilesFail(err))
  }
}

function* loadPlayersData() {
  try {
    if (config.loadTilesFromFile) {

    }
  } catch (err) {
  }
}

function* root() {
  yield fork(loadAllHeroes)
  yield fork(loadTiles)
  yield fork(loadAllCards)
  yield fork(loadPlayersData)
}

export default root
