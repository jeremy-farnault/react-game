import { IStoreState } from '../../types'
import { LOAD_TILES_FAIL, LOAD_TILES_START, LOAD_TILES_SUCCESS, UPDATE_TILES } from '../constants'
import { IHeroes, ITile } from '../models'
import { handleActions, Action } from 'redux-actions'

const initialState: IStoreState = {
  tiles: [] as ITile[][],
  heroes: {} as IHeroes
}

export type LoadTilesStartPayload = {}

export type LoadTilesSuccessPayload = {
  data: ITile[][]
}

export type LoadTilesFailPayload = {}

export type UpdateTilesPayload = {
  data: ITile[][]
}

export default handleActions<IStoreState, any>({
  [LOAD_TILES_START]: (state: IStoreState, action: Action<LoadTilesStartPayload>) => ({
    ...state
  }),
  [LOAD_TILES_SUCCESS]: (state: IStoreState, action: Action<LoadTilesSuccessPayload>) => ({
    ...state,
    tiles: action.payload ? action.payload.data : {}
  }),
  [LOAD_TILES_FAIL]: (state: IStoreState, action: Action<LoadTilesFailPayload>) => ({
    ...state,
    tiles: {}
  }),
  [UPDATE_TILES]: (state: IStoreState, action: Action<UpdateTilesPayload>) => ({
    ...state,
    tiles: action.payload ? action.payload.data : {}
  })
}, initialState)
