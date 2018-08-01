import {Actions} from '../actions'
import * as constants from '../constants/index'
import { StoreState } from '../../types'

export function reducers(state: StoreState, action: Actions): StoreState {
  switch (action.type) {
    case constants.LOAD_DATA:
      return {...state, tiles: []}
    default:
      return state
  }
}
