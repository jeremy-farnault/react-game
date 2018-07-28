import { createAction } from 'redux-actions'
import { TileModel } from 'app/models'

export namespace TileActions {
  import TileState = TileModel.TileState

  export enum Type {
    CHANGE_TILE_STATE = 'HR/TILES/STATE/CHANGE_TILE_STATE'
  }

  export type changeTileStatePayloadType = {
    columnIndex: number,
    lineIndex: number,
    state: TileState
  }

  export const changeTileState = createAction<changeTileStatePayloadType>(Type.CHANGE_TILE_STATE)
}

export type TileActions = Omit<typeof TileActions, 'Type'>
