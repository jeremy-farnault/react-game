import { IStoreState } from "../../types";
import {
  LOAD_PLAYERS_FAIL,
  LOAD_PLAYERS_START,
  LOAD_PLAYERS_SUCCESS
} from "../constants";

import { Action, handleActions } from "redux-actions";

const initialState: IStoreState.IRootState = {
  battlefield: {} as IStoreState.IBattlefield,
  session: {} as IStoreState.ISession,
  players: {} as IStoreState.IPlayers
};

export interface ILoadPlayersSuccessPayload {
  data: IStoreState.IPlayers
}

export default handleActions(
  {
    [LOAD_PLAYERS_START]: (state: IStoreState.IPlayers, action: Action<{}>) => ({
      ...state
    }),
    [LOAD_PLAYERS_FAIL]: (state: IStoreState.IPlayers, action: Action<{}>) => ({
      ...state,
      players: {} as IStoreState.IPlayers
    }),
    [LOAD_PLAYERS_SUCCESS]: (
      state: IStoreState.IPlayers,
      action: Action<ILoadPlayersSuccessPayload>
    ) => ({
      ...state,
      players: action.payload ? action.payload.data : {} as IStoreState.IPlayers
    }),
  },
  initialState
);
