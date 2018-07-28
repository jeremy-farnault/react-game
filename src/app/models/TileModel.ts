/** TileMVC model definitions **/
import State = TileModel.TileState

export interface TileModel {
  id: number
  state: State
  columnIndex: number
  lineIndex: number
}

export namespace TileModel {
  export enum TileState {
    IDLE = 'idle'
  }
}
