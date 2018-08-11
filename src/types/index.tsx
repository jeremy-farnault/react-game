import { IHeroes, ITile } from '../core/models'

export interface IStoreState {
  [key: string]: any
  tiles: ITile[][]
  heroes: IHeroes
}
