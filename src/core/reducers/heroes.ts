import { IHeroes, ITile } from '../models'
import { IStoreState } from '../../types'
import { LOAD_HEROES_FAIL, LOAD_HEROES_START, LOAD_HEROES_SUCCESS } from '../constants'
import { handleActions, Action } from 'redux-actions'

const initialState: IStoreState = {
  tiles: [] as ITile[][],
  heroes: {} as IHeroes
}

export type LoadHeroesStartPayload = {}

export type LoadHeroesSuccessPayload = {
  data: IHeroes
}

export type LoadHeroesFailPayload = {}

export default handleActions<IStoreState, any>({
  [LOAD_HEROES_START]: (state: IStoreState, action: Action<LoadHeroesStartPayload>) => ({
    ...state
  }),
  [LOAD_HEROES_SUCCESS]: (state: IStoreState, action: Action<LoadHeroesSuccessPayload>) => ({
    ...state,
    heroes: action.payload ? action.payload.data : {}
  }),
  [LOAD_HEROES_FAIL]: (state: IStoreState, action: Action<LoadHeroesFailPayload>) => ({
    ...state,
    heroes: {}
  })
}, initialState)
