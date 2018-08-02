import { IStoreState } from '../../types'
import { Actions } from '../actions'
import * as constants from '../constants/index'

export function reducers(state: IStoreState, action: Actions): IStoreState {
  switch (action.type) {
    case constants.LOAD_DATA:
      return { ...state, tiles: [] }
    default:
      return state
  }
}
