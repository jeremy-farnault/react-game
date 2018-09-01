import { ICards, IHeroes, IPlayer, ITile } from "../core/models";

export namespace IStoreState {
  export interface IRootState {
    battlefield: IBattlefield
    players: {
      [id: string]: IPlayer
    }
    session: ISession
  }
  export interface IBattlefield {
    tiles: ITile[][]
  }
  export interface IPlayers {
    [id: string]: IPlayer
  }
  export interface ISession {
    allCards: ICards
    allHeroes: IHeroes
  }
}
