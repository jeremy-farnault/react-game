import * as constants from '../constants'
import {
  ILoadTilesSuccessPayload,
  IUpdateTilesPayload
} from '../reducers/battlefield'
import { ILoadHeroesSuccessPayload } from '../reducers/player'
import { ILoadAllCardsSuccessPayload, ILoadAllHeroesSuccessPayload } from "../reducers/session";

import { createAction } from 'redux-actions'

// Heroes loading

export const loadHeroesStart = createAction<{}>(constants.LOAD_HEROES_START)
export const loadHeroesSuccess = createAction<ILoadHeroesSuccessPayload>(
  constants.LOAD_HEROES_SUCCESS
)
export const loadHeroesFail = createAction<{}>(constants.LOAD_HEROES_FAIL)

// Tiles Loading

export const loadTilesStart = createAction<{}>(constants.LOAD_TILES_START)
export const loadTilesSuccess = createAction<ILoadTilesSuccessPayload>(
  constants.LOAD_TILES_SUCCESS
)
export const loadTilesFail = createAction<{}>(constants.LOAD_TILES_FAIL)

// Tiles Updating

export const updateTiles = createAction<IUpdateTilesPayload>(
  constants.UPDATE_TILES
)

// All Heroes loading

export const loadAllHeroesStart = createAction<{}>(constants.LOAD_ALL_HEROES_START)
export const loadAllHeroesSuccess = createAction<ILoadAllHeroesSuccessPayload>(
  constants.LOAD_ALL_HEROES_SUCCESS
)
export const loadAllHeroesFail = createAction<{}>(constants.LOAD_ALL_HEROES_FAIL)

// All Cards loading

export const loadAllCardsStart = createAction<{}>(constants.LOAD_ALL_CARDS_START)
export const loadAllCardsSuccess = createAction<ILoadAllCardsSuccessPayload>(
  constants.LOAD_ALL_CARDS_SUCCESS
)
export const loadAllCardsFail = createAction<{}>(constants.LOAD_ALL_CARDS_FAIL)
