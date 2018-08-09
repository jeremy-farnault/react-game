import * as constants from '../constants'
import { createAction } from 'redux-actions'

export interface IAction {
  type: string
}

export type Actions = ILoadData

// Heroes loading

export const loadHeroesStart = createAction(constants.LOAD_HEROES_START)



export interface ILoadData extends IAction {
  type: constants.LOAD_HEROES_START
}

export function loadData(): ILoadData {
  return {
    type: constants.LOAD_DATA
  }
}
