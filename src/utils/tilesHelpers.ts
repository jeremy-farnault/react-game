import { ITile, TileState } from "../core/models";
import { INewTile } from "../core/reducers/battlefield";

import * as PF from 'pathfinding'

export const getNewTileStateByHeroStatus = (tiles: ITile[][], heroCharacteristic: number, heroX: number, heroY: number,
                                            state: TileState, areHeroesWall: boolean): INewTile[] => {
  const finder = new PF.AStarFinder();
  const result: INewTile[] = []
  // Create a grid to with the walkable nodes
  // 0 -> tile available, 1 -> hero as wall, 2 -> hero as non wall
  const matrix: number[][] = tiles.map((line: ITile[]) => line.map((t: ITile) => t.state === TileState.idleHero && areHeroesWall ? 1 : 0))
  const gridMaster = new PF.Grid(matrix);
  matrix.forEach((line: number[], lineInd: number) => line.forEach((tile: number, colInd: number) => {
    if (tile === 0 && Math.abs(colInd - heroX) <= heroCharacteristic + 1 && Math.abs(lineInd - heroY) <= heroCharacteristic + 1) {
      const grid = gridMaster.clone();
      const path = finder.findPath(heroX, heroY, colInd, lineInd, grid);
      if (path.length <= heroCharacteristic + 1) {
        result.push({
          tileX: colInd,
          tileY: lineInd,
          tileState: tiles[lineInd][colInd].state === TileState.idleHero ? TileState.idleHero : state
        })
      }
    }
  }))
  return result
}
