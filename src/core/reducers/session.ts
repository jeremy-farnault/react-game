import { IStoreState } from "../../types";
import {
  LOAD_ALL_CARDS_FAIL,
  LOAD_ALL_CARDS_START,
  LOAD_ALL_CARDS_SUCCESS,
  LOAD_ALL_HEROES_FAIL,
  LOAD_ALL_HEROES_START,
  LOAD_ALL_HEROES_SUCCESS, LOAD_PLAYERS_FAIL, LOAD_PLAYERS_START, LOAD_PLAYERS_SUCCESS
} from "../constants";
import { ICards, IHeroes } from "../models";

import { Action, handleActions } from "redux-actions";

const initialState: IStoreState.ISession = {
  allCards: {},
  allHeroes: {},
  players: {}
};

export interface ILoadAllHeroesSuccessPayload {
  data: IHeroes
}

export interface ILoadAllCardsSuccessPayload {
  data: ICards
}

export interface ILoadPlayersSuccessPayload {
  data: IStoreState.IPlayers
}

export default handleActions(
  {
    [LOAD_ALL_HEROES_START]: (state: IStoreState.ISession, action: Action<{}>) => ({
      ...state
    }),
    [LOAD_ALL_HEROES_SUCCESS]: (
      state: IStoreState.ISession,
      action: Action<ILoadAllHeroesSuccessPayload>
    ) => ({
      ...state,
      allHeroes: action.payload ? action.payload.data : {}
    }),
    [LOAD_ALL_HEROES_FAIL]:
      (state: IStoreState.ISession, action: Action<{}>) => ({
        ...state,
        allHeroes: {}
      }),
    [LOAD_ALL_CARDS_START]: (state: IStoreState.ISession, action: Action<{}>) => ({
      ...state
    }),
    [LOAD_ALL_CARDS_SUCCESS]: (
      state: IStoreState.ISession,
      action: Action<ILoadAllCardsSuccessPayload>
    ) => ({
      ...state,
      allCards: action.payload ? action.payload.data : {}
    }),
    [LOAD_ALL_CARDS_FAIL]:
      (state: IStoreState.ISession, action: Action<{}>) => ({
        ...state,
        allCards: {}
      }),
    [LOAD_PLAYERS_START]: (state: IStoreState.ISession, action: Action<{}>) => ({
      ...state
    }),
    [LOAD_PLAYERS_FAIL]: (state: IStoreState.ISession, action: Action<{}>) => ({
      ...state,
      players: {} as IStoreState.IPlayers
    }),
    [LOAD_PLAYERS_SUCCESS]: (
      state: IStoreState.ISession,
      action: Action<ILoadPlayersSuccessPayload>
    ) => ({
      ...state,
      players: action.payload ? action.payload.data : {} as IStoreState.IPlayers
    })
  },
  initialState
);
