import { ICards, IHeroes, ITile } from "../core/models";

export namespace IStoreState {
  export interface IRootState {
    battlefield: IBattlefield
    players: IPlayers
    session: ISession
  }
  export interface IBattlefield {
    tiles: ITile[][]
  }
  export interface IPlayers {
    [id: string]: IPlayer
  }
  export interface IPlayer {
    heroes: IHeroes
  }
  export interface ISession {
    allCards: ICards
    allHeroes: IHeroes
  }
}
