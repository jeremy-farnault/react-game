import { heroes } from '../../dbstore/heroes'
import config from '../../utils/config'
import { DefaultTiles } from '../../utils/defaults'
import {
  loadHeroesFail,
  loadHeroesSuccess,
  loadTilesFail,
  loadTilesSuccess
} from '../actions'
import { IHeroes, ITile } from '../models'

import { fork, put } from 'redux-saga/effects'

function* loadHeroes() {
  let response: { data: IHeroes } = { data: {} }
  try {
    if (config.loadHeroesFromFile) {
      response = { data: heroes }
    }
    yield put(loadHeroesSuccess(response))
  } catch (err) {
    console.warn('loadHeroes failed', JSON.parse(JSON.stringify(err)))
    yield put(loadHeroesFail(err))
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

function* root() {
  yield fork(loadHeroes)
  yield fork(loadTiles)
}

export default root
