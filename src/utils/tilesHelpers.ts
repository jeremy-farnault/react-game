import { ITile, TileState } from "../core/models";
import { INewTile } from "../core/reducers/battlefield";

import * as PF from 'pathfinding'

export const getNewTileStateByHeroStatus = (tiles: ITile[][], heroCharacteristic: number, heroX: number, heroY: number, state: TileState): INewTile[] => {
  const finder = new PF.AStarFinder();
  const result: INewTile[] = []
  // Create a grid to with the walkable nodes
  const matrix: number[][] = tiles.map((line: ITile[]) => line.map((t: ITile) => t.state !== TileState.idleHero ? 0 : 1))
  const gridMaster = new PF.Grid(matrix);
  matrix.forEach((line: number[], lineInd: number) => line.forEach((tile: number, colInd: number) => {
    if (tile === 0 && Math.abs(colInd - heroX) <= heroCharacteristic + 1 && Math.abs(lineInd - heroY) <= heroCharacteristic + 1) {
      const grid = gridMaster.clone();
      const path = finder.findPath(heroX, heroY, colInd, lineInd, grid);
      if (path.length <= heroCharacteristic + 1) {
        result.push({
          tileState: state,
          tileX: colInd,
          tileY: lineInd
        })
      }
    }
  }))
  return result
}
