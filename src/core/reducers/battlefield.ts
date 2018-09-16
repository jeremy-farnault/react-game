import { IStoreState } from "../../types";
import {
  LOAD_TILES_FAIL,
  LOAD_TILES_START,
  LOAD_TILES_SUCCESS,
  UPDATE_TILES
} from "../constants";
import { ITile, TileState } from "../models";

import { Action, handleActions } from "redux-actions";

const initialState: IStoreState.IBattlefield = {
  tiles: [] as ITile[][]
};

export interface ILoadTilesSuccessPayload {
  data: ITile[][]
}

export interface IUpdateTilesPayload {
  data: INewTile[]
}

export interface INewTile {
  tileX: number
  tileY: number
  tileState: TileState
}

export default handleActions(
  {
    // LOAD TILES ACTIONS
    [LOAD_TILES_START]: (state: IStoreState.IBattlefield, action: Action<{}>) => ({
      ...state
    }),
    [LOAD_TILES_SUCCESS]: (
      state: IStoreState.IBattlefield,
      action: Action<ILoadTilesSuccessPayload>
    ) => ({
      ...state,
      tiles: action.payload ? action.payload.data : []
    }),
    [LOAD_TILES_FAIL]: (state: IStoreState.IBattlefield, action: Action<{}>) => ({
      ...state,
      tiles: []
    }),

    // UPDATE TILES ACTIONS
    [UPDATE_TILES]: (
      state: IStoreState.IBattlefield,
      action: Action<IUpdateTilesPayload>
    ) => {
      const newTiles = state.tiles.slice();
      if (action.payload) {
        action.payload.data.forEach((t: INewTile) => {
          newTiles[t.tileY][t.tileX].state = t.tileState;
        });
      }
      return ({
        ...state,
        tiles: newTiles
      });
    }
  },
  initialState
);
