import { cards } from '../../dbstore/cards'
import { fakePlayers } from "../../dbstore/fakePlayers";
import { heroes } from '../../dbstore/heroes'
import { IStoreState } from "../../types";
import config from '../../utils/config'
import { DefaultTiles } from '../../utils/defaults'

import {
  loadAllCardsFail,
  loadAllCardsSuccess,
  loadAllHeroesFail,
  loadAllHeroesSuccess,
  loadPlayersFail,
  loadPlayersSuccess,
  loadTilesFail,
  loadTilesSuccess,
  updateTiles
} from "../actions";
import { ICards, IHeroes, ITile, TileState } from "../models";

import * as _ from 'lodash'
import { fork, put } from 'redux-saga/effects'
import IPlayers = IStoreState.IPlayers;

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
    console.log(responseData)
    yield put(loadTilesSuccess({ data: responseData }))
  } catch (err) {
    console.warn('loadTiles failed', JSON.parse(JSON.stringify(err)))
    yield put(loadTilesFail(err))
  }
}

function* loadPlayersData() {
  let response: { data: IPlayers } = { data: {} as IPlayers }
  try {
    if (config.createFakePlayers) {
      response = { data: fakePlayers }
    }
    yield put(loadPlayersSuccess(response))
    // Update the tiles after fetching the players
    const tilesToUpdate = Object.keys(response.data).map((playerId: string) => {
      return Object.keys(response.data[playerId].heroes).map((heroId: string) => {
        return {
          tileX: response.data[playerId].heroes[heroId].tileX,
          tileY: response.data[playerId].heroes[heroId].tileY,
          tileState: TileState.idleHero
        }
      })
    })
    yield put(updateTiles({data: _.flatten(tilesToUpdate)}))
  } catch (err) {
    console.warn('loadPlayers failed', JSON.parse(JSON.stringify(err)))
    yield put(loadPlayersFail(err))
  }
}

function* root() {
  yield fork(loadAllHeroes)
  yield fork(loadTiles)
  yield fork(loadAllCards)
  yield fork(loadPlayersData)
}

export default root
