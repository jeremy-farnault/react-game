import { ITile, TileState } from "../core/models";
import { INewTile } from "../core/reducers/battlefield";

import * as PF from 'pathfinding'

export const getNewTileStateByHeroStatus = (tiles: ITile[][], heroCharacteristic: number, heroX: number, heroY: number, state: TileState): INewTile[] => {
  const finder = new PF.AStarFinder();
  const result: INewTile[] = []
  // Create a grid to with the walkable nodes
  const matrix: number[][] = tiles.map((col: ITile[]) => col.map((t: ITile) => t.state !== TileState.idleHero ? 0 : 1))
  const gridMaster = new PF.Grid(matrix);
  matrix.forEach((col: number[], colInd: number) => col.forEach((t: number, i: number) => {
    if (t === 0 && i <= heroCharacteristic + 1 && colInd <= heroCharacteristic + 1) {
      const grid = gridMaster.clone();
      const path = finder.findPath(heroX, heroY, colInd, i, grid);
      if (path.length <= heroCharacteristic + 1) {
        result.push({
          tileState: state,
          tileX: i,
          tileY: colInd
        })
      }
    }
  }))
  return result
}
