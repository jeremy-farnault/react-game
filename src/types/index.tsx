import { ICards, IHeroes, ITile } from "../core/models";

export namespace IStoreState {
  export interface IRootState {
    battlefield: IBattlefield
    player: IPlayer
    session: ISession
  }
  export interface IBattlefield {
    tiles: ITile[][]
  }
  export interface IPlayer {
    heroes: IHeroes
  }
  export interface ISession {
    allCards: ICards
    allHeroes: IHeroes
  }
}
