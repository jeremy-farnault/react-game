import { IStoreState } from '../../types'
import {
  LOAD_TILES_FAIL,
  LOAD_TILES_START,
  LOAD_TILES_SUCCESS,
  UPDATE_TILES
} from '../constants'
import { IHeroes, ITile } from '../models'

import { Action, handleActions } from 'redux-actions'

const initialState: IStoreState = {
  heroes: {} as IHeroes,
  tiles: [] as ITile[][]
}

export interface ILoadTilesSuccessPayload {
  data: ITile[][]
}

export interface IUpdateTilesPayload {
  data: ITile[][]
}

export default handleActions<IStoreState, any>(
  {
    [LOAD_TILES_START]: (state: IStoreState, action: Action<{}>) => ({
      ...state
    }),
    [LOAD_TILES_SUCCESS]: (
      state: IStoreState,
      action: Action<ILoadTilesSuccessPayload>
    ) => ({
      ...state,
      tiles: action.payload ? action.payload.data : []
    }),
    [LOAD_TILES_FAIL]: (state: IStoreState, action: Action<{}>) => ({
      ...state,
      tiles: []
    }),
    [UPDATE_TILES]: (
      state: IStoreState,
      action: Action<IUpdateTilesPayload>
    ) => ({
      ...state,
      tiles: action.payload ? action.payload.data : []
    })
  },
  initialState
)
