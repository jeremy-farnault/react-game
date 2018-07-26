import {createAction} from 'redux-actions'

export const CHANGE_TILE_STATE = 'HR/TILES/STATE/CHANGE_TILE_STATE'

export type changeTileStatePayloadType = {
  columnIndex: number,
  lineIndex: number,
  state: TileStates
}

export const changeTileState = createAction<changeTileStatePayloadType>(CHANGE_TILE_STATE)

