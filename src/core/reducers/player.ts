import { IStoreState } from '../../types'
import {
  LOAD_HEROES_FAIL,
  LOAD_HEROES_START,
  LOAD_HEROES_SUCCESS
} from '../constants'
import { IHeroes } from '../models'

import { Action, handleActions } from 'redux-actions'

const initialState: IStoreState.IPlayer = {
  heroes: {} as IHeroes
}

export interface ILoadHeroesSuccessPayload {
  data: IHeroes
}

export default handleActions(
  {
    [LOAD_HEROES_START]: (state: IStoreState.IPlayer, action: Action<{}>) => ({
      ...state
    }),
    [LOAD_HEROES_SUCCESS]: (
      state: IStoreState.IPlayer,
      action: Action<ILoadHeroesSuccessPayload>
    ) => {

      console.log('payload ----- ', action)

      const newState = {
          ...state,
        heroes: action.payload ? action.payload.data : {}
      }

      console.log('new state ----- ', newState)

      return newState},

    [LOAD_HEROES_FAIL]: (state: IStoreState.IPlayer, action: Action<{}>) => ({
      ...state,
      heroes: {}
    })
  },
  initialState
)
