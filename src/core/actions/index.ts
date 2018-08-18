import * as constants from '../constants'
import { LoadHeroesFailPayload, LoadHeroesStartPayload, LoadHeroesSuccessPayload } from '../reducers/heroes'
import {
  LoadTilesFailPayload,
  LoadTilesStartPayload,
  LoadTilesSuccessPayload,
  UpdateTilesPayload
} from '../reducers/tiles'
import { createAction } from 'redux-actions'

// Heroes loading

export const loadHeroesStart = createAction<LoadHeroesStartPayload>(constants.LOAD_HEROES_START)
export const loadHeroesSuccess = createAction<LoadHeroesSuccessPayload>(constants.LOAD_HEROES_SUCCESS)
export const loadHeroesFail = createAction<LoadHeroesFailPayload>(constants.LOAD_HEROES_FAIL)

// Tiles Loading

export const loadTilesStart = createAction<LoadTilesStartPayload>(constants.LOAD_TILES_START)
export const loadTilesSuccess = createAction<LoadTilesSuccessPayload>(constants.LOAD_TILES_SUCCESS)
export const loadTilesFail = createAction<LoadTilesFailPayload>(constants.LOAD_TILES_FAIL)

// Tiles Updating

export const updateTiles = createAction<UpdateTilesPayload>(constants.UPDATE_TILES)
