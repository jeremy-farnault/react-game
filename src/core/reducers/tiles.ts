import { IStoreState } from '../../types'
import {
  LOAD_TILES_FAIL,
  LOAD_TILES_START,
  LOAD_TILES_SUCCESS,
  UPDATE_TILES
} from '../constants'
import { ITile } from '../models'

import { Action, handleActions } from 'redux-actions'

const initialState: IStoreState.IBattlefield = {
  tiles: [] as ITile[][]
}

export interface ILoadTilesSuccessPayload {
  data: ITile[][]
}

export interface IUpdateTilesPayload {
  data: ITile[][]
}

export default handleActions(
  {
    [LOAD_TILES_START]: (state: IStoreState.IBattlefield, action: Action<{}>) => ({
      ...state,
      tiles: [] as ITile[][]
    }),
    [LOAD_TILES_SUCCESS]: (
      state: IStoreState.IBattlefield,
      action: Action<ILoadTilesSuccessPayload>
    ) => ({
      ...state,
      tiles: action.payload ? action.payload.data : []
    }),
    [LOAD_TILES_FAIL]: (state: IStoreState.IBattlefield, action: Action<{}>) => ({
      ...state,
      tiles: []
    }),
    [UPDATE_TILES]: (
      state: IStoreState.IBattlefield,
      action: Action<IUpdateTilesPayload>
    ) => ({
      ...state,
      tiles: action.payload ? action.payload.data : []
    })
  } as IStoreState.IBattlefield,
  initialState
)
