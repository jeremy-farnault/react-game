export interface ITile {
  uuid: string
  columnIndex: number
  lineIndex: number
  posX: number
  posY: number
  state: TileState
}

export enum TileState {
  empty
}

export enum TileColors {
  empty = 'orange'
}
