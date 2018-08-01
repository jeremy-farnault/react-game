import * as constants from '../constants'

export interface IAction {
  type: string
}

export type Actions = ILoadData

// Data Fetching

export interface ILoadData extends IAction {
  type: constants.LOAD_DATA
}

export function loadData(): ILoadData {
  return {
    type: constants.LOAD_DATA
  }
}
