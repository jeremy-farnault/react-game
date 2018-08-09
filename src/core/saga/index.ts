import { heroes } from '../../dbstore/heroes'
import config from '../../utils/config'
import * as constants from '../constants'
import { IHeroes } from '../models'
import { put, takeEvery } from 'redux-saga/effects'

function* loadHeroes() {
  let response: {data: IHeroes} = {data: {}}
  try {
    if (config.loadHeroesFromFile) {
      response = {data: heroes}
    }
    const responseData = response.data
    yield put(appDuck.loadHeroesSuccess(responseData))
  } catch (err) {
    console.warn('loadHeroes failed', JSON.parse(JSON.stringify(err)))
    yield put(appDuck.loadHeroesFail(err))
  }
}

function* root() {
  yield takeEvery(constants.LOAD_HEROES_START, loadHeroes)
}

export default root
