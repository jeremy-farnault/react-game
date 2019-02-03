import {
  IHeroBattlefield,
  IHeroBattlefieldState,
  ITile,
  ITileStateToHeroBattlefieldState,
  TileState
} from "../core/models";
import { INewTile } from "../core/reducers/battlefield";
import { IUpdateHeroState, IUpdateHeroStatePayload } from "../core/reducers/session";

import * as PF from "pathfinding";

export const getNewTileStateByHeroStatus = (tiles: ITile[][], heroCharacteristic: number, heroX: number, heroY: number,
                                            state: TileState): INewTile[] => {
  const finder = new PF.AStarFinder();
  const result: INewTile[] = [];
  // Create a grid to with the walkable nodes
  const matrix: number[][] = tiles.map((line: ITile[]) =>
    line.map((t: ITile) => (t.state !== TileState.empty && t.state !== TileState.heroDead) ? 1 : 0));
  const gridMaster = new PF.Grid(matrix);
  matrix.forEach((line: number[], lineInd: number) => line.forEach((tile: number, colInd: number) => {
    if (tile === 0 && Math.abs(colInd - heroX) <= heroCharacteristic + 1 && Math.abs(lineInd - heroY) <= heroCharacteristic + 1) {
      const grid = gridMaster.clone();
      const path = finder.findPath(heroX, heroY, colInd, lineInd, grid);
      if (path.length <= heroCharacteristic + 1) {
        const st = tiles[lineInd][colInd].state
        const isHeroDeadMove = st === TileState.heroDead && state === TileState.heroMovement
        result.push({
          tileX: colInd,
          tileY: lineInd,
          tileState: st === TileState.idleHero ? TileState.idleHero : (isHeroDeadMove ? TileState.heroDeadMovement : state)
        });
      }
    }
  }));
  return result;
};

export const getNewHeroStatus = (tiles: ITile[][], heroCharacteristic: number, heroX: number, heroY: number,
                                 state: TileState, currentHeroes: IHeroBattlefield[]): IUpdateHeroStatePayload => {
  const finder = new PF.AStarFinder();
  const result: IUpdateHeroState[] = [];
  const matrix: number[][] = tiles.map((line: ITile[]) => line.map(() => 0));
  const gridMaster = new PF.Grid(matrix);
  matrix.forEach((line: number[], lineInd: number) => line.forEach((tile: number, colInd: number) => {
    if (Math.abs(colInd - heroX) <= heroCharacteristic + 1 && Math.abs(lineInd - heroY) <= heroCharacteristic + 1) {
      const grid = gridMaster.clone();
      const path = finder.findPath(heroX, heroY, colInd, lineInd, grid);
      if (path.length <= heroCharacteristic + 1 &&
        tiles[lineInd][colInd].state !== TileState.empty &&
        tiles[lineInd][colInd].state !== TileState.empty) {
        const heroOnTile = currentHeroes.find((h: IHeroBattlefield) =>
          h.tileX === colInd && h.tileY === lineInd);
        if (!!heroOnTile && heroOnTile.playerId !== currentHeroes[0].playerId) {
          result.push({
            newState: IHeroBattlefieldState[ITileStateToHeroBattlefieldState[state]] as IHeroBattlefieldState,
            playerId: heroOnTile.playerId,
            heroId: heroOnTile.id
          })
        }
      }
    }
  }));
  return {newStateHeroes: result};
};
