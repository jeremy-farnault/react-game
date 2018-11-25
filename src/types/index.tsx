import { ICards, ICardsBattlefield, IHeroBattlefield, IHeroes, IPlayer, ITile } from "../core/models";

export namespace IStoreState {
  export interface IRootState {
    battlefield: IBattlefield
    session: ISession
  }
  export interface IBattlefield {
    tiles: ITile[][]
  }
  export interface ISession {
    allCards: ICards
    allHeroes: IHeroes
    players: IPlayers
    heroesFight: IHeroBattlefield[]
    cardsFight: ICardsBattlefield
  }
  export interface IPlayers {
    [id: string]: IPlayer
  }
}
