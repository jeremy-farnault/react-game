import * as constants from '../constants'
import { LoadHeroesFailPayload, LoadHeroesStartPayload, LoadHeroesSuccessPayload } from '../reducers/heroes'
import { createAction } from 'redux-actions'

// Heroes loading

export const loadHeroesStart = createAction<LoadHeroesStartPayload>(constants.LOAD_HEROES_START)
export const loadHeroesSuccess = createAction<LoadHeroesSuccessPayload>(constants.LOAD_HEROES_SUCCESS)
export const loadHeroesFail = createAction<LoadHeroesFailPayload>(constants.LOAD_HEROES_FAIL)
