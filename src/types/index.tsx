import { IHeroes, ITile } from '../core/models'

export namespace IStoreState {
  export interface IRootState {
    battlefield: IBattlefield
    player: IPlayer
  }
  export interface IBattlefield {
    tiles: ITile[][]
  }
  export interface IPlayer {
    heroes: IHeroes
  }
}
