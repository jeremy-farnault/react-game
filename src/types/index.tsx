import { IHeroes, ITile } from '../core/models'

export namespace IStoreState {
  export interface IRootState {
    battlefield: IBattlefield
    player: IPlayer
  }
  export interface IBattlefield {
    [key: string]: any
    tiles: ITile[][]
  }
  export interface IPlayer {
    [key: string]: any
    heroes: IHeroes
  }
}
