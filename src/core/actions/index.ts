import * as constants from '../constants'
import {
  ILoadTilesSuccessPayload,
  IUpdateTilesPayload
} from '../reducers/battlefield'
import {
  ILoadAllCardsSuccessPayload,
  ILoadAllHeroesSuccessPayload,
  ILoadPlayersSuccessPayload,
  ISetHeroesOrderPayload,
  ISetHeroNewPositionPayload,
  ISetHeroSelectedPayload
} from "../reducers/session";

import { createAction } from 'redux-actions'

// Heroes loading

export const loadPlayersStart = createAction<{}>(constants.LOAD_PLAYERS_START)
export const loadPlayersSuccess = createAction<ILoadPlayersSuccessPayload>(
  constants.LOAD_PLAYERS_SUCCESS
)
export const loadPlayersFail = createAction<{}>(constants.LOAD_PLAYERS_FAIL)

// Tiles Loading

export const loadTilesStart = createAction<{}>(constants.LOAD_TILES_START)
export const loadTilesSuccess = createAction<ILoadTilesSuccessPayload>(
  constants.LOAD_TILES_SUCCESS
)
export const loadTilesFail = createAction<{}>(constants.LOAD_TILES_FAIL)

// Tiles Resetting

export const resetTiles = createAction<{}>(constants.RESET_TILES)

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

// Update heroes

export const setHeroSelected = createAction<ISetHeroSelectedPayload>(constants.SET_HERO_SELECTED)
export const setHeroNewPosition = createAction<ISetHeroNewPositionPayload>(constants.SET_HERO_NEW_POSITION)

// Set heroes order

export const setHeroesOrder = createAction<ISetHeroesOrderPayload>(constants.SET_HEROES_ORDER)
export const setNextCurrentHero = createAction<null>(constants.SET_NEXT_CURRENT_HERO)
