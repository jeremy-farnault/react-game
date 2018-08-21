import * as constants from '../constants'
import {
  ILoadTilesSuccessPayload,
  IUpdateTilesPayload
} from '../reducers/battlefield'
import { ILoadHeroesSuccessPayload } from '../reducers/player'

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
