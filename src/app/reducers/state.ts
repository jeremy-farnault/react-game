import { TileModel } from 'app/models'
import { RouterState } from 'react-router-redux'

export interface RootState {
  tiles: RootState.TileState
  router: RouterState
}

export namespace RootState {
  export type TileState = TileModel[]
}
