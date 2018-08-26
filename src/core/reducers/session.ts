import { IStoreState } from "../../types";
import {
  LOAD_ALL_CARDS_FAIL,
  LOAD_ALL_CARDS_START,
  LOAD_ALL_CARDS_SUCCESS,
  LOAD_ALL_HEROES_FAIL,
  LOAD_ALL_HEROES_START,
  LOAD_ALL_HEROES_SUCCESS
} from "../constants";
import { ICards, IHeroes } from "../models";

import { Action, handleActions } from "redux-actions";

const initialState: IStoreState.ISession = {
  allCards: {},
  allHeroes: {}
};

export interface ILoadAllHeroesSuccessPayload {
  data: IHeroes
}

export interface ILoadAllCardsSuccessPayload {
  data: ICards
}

export default handleActions(
  {
    [LOAD_ALL_HEROES_START]: (state: IStoreState.IPlayer, action: Action<{}>) => ({
      ...state
    }),
    [LOAD_ALL_HEROES_SUCCESS]: (
      state: IStoreState.IPlayer,
      action: Action<ILoadAllHeroesSuccessPayload>
    ) => ({
      ...state,
      heroes: action.payload ? action.payload.data : {}
    }),
    [LOAD_ALL_HEROES_FAIL]:
      (state: IStoreState.IPlayer, action: Action<{}>) => ({
        ...state,
        heroes: {}
      }),
    [LOAD_ALL_CARDS_START]: (state: IStoreState.IPlayer, action: Action<{}>) => ({
      ...state
    }),
    [LOAD_ALL_CARDS_SUCCESS]: (
      state: IStoreState.IPlayer,
      action: Action<ILoadAllCardsSuccessPayload>
    ) => ({
      ...state,
      cards: action.payload ? action.payload.data : {}
    }),
    [LOAD_ALL_CARDS_FAIL]:
      (state: IStoreState.IPlayer, action: Action<{}>) => ({
        ...state,
        cards: {}
      })
  },
  initialState
);
