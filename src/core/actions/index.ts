import * as constants from "../constants";
import {
  ILoadTilesSuccessPayload,
  IUpdateTilesPayload
} from "../reducers/battlefield";
import {
  IChangeActionPointsPayload, IDrawCardPayload,
  ILoadAllCardsSuccessPayload,
  ILoadAllHeroesSuccessPayload,
  ILoadPlayersSuccessPayload, IPlayCardPayload,
  ISetHeroesOrderPayload,
  ISetHeroNewPositionPayload,
  ISetHeroSelectedPayload, IUpdateHeroStatePayload
} from "../reducers/session";

import { createAction } from "redux-actions";

// Heroes loading

export const loadPlayersStart = createAction(constants.LOAD_PLAYERS_START);
export const loadPlayersSuccess = createAction<ILoadPlayersSuccessPayload>(
  constants.LOAD_PLAYERS_SUCCESS
);
export const loadPlayersFail = createAction(constants.LOAD_PLAYERS_FAIL);

// Tiles Loading

export const loadTilesStart = createAction(constants.LOAD_TILES_START);
export const loadTilesSuccess = createAction<ILoadTilesSuccessPayload>(
  constants.LOAD_TILES_SUCCESS
);
export const loadTilesFail = createAction(constants.LOAD_TILES_FAIL);

// Tiles Resetting

export const resetTiles = createAction(constants.RESET_TILES);

// Tiles Updating

export const updateTiles = createAction<IUpdateTilesPayload>(
  constants.UPDATE_TILES
);

// All Heroes loading

export const loadAllHeroesStart = createAction(constants.LOAD_ALL_HEROES_START);
export const loadAllHeroesSuccess = createAction<ILoadAllHeroesSuccessPayload>(
  constants.LOAD_ALL_HEROES_SUCCESS
);
export const loadAllHeroesFail = createAction(constants.LOAD_ALL_HEROES_FAIL);

// All Cards loading

export const loadAllCardsStart = createAction(constants.LOAD_ALL_CARDS_START);
export const loadAllCardsSuccess = createAction<ILoadAllCardsSuccessPayload>(
  constants.LOAD_ALL_CARDS_SUCCESS
);
export const loadAllCardsFail = createAction(constants.LOAD_ALL_CARDS_FAIL);

// Update Heroes

export const setHeroSelected = createAction<ISetHeroSelectedPayload>(constants.SET_HERO_SELECTED);
export const setHeroNewPosition = createAction<ISetHeroNewPositionPayload>(constants.SET_HERO_NEW_POSITION);
export const updateHeroState = createAction<IUpdateHeroStatePayload>(constants.UPDATE_HEROES_STATE);

// Set Heroes order

export const setHeroesOrder = createAction<ISetHeroesOrderPayload>(constants.SET_HEROES_ORDER);
export const setNextCurrentHero = createAction(constants.SET_NEXT_CURRENT_HERO);

// Heroes action points

export const incrementActionPoints = createAction<IChangeActionPointsPayload>(constants.INCREMENT_ACTION_POINTS);
export const decrementActionPoints = createAction<IChangeActionPointsPayload>(constants.DECREMENT_ACTION_POINTS);
export const resetActionPoints = createAction<IChangeActionPointsPayload>(constants.RESET_ACTION_POINTS);

// Set and update cards Battlefield

export const initializeDeckHand = createAction(constants.INITIALIZE_DECK_HAND);
export const drawCard = createAction<IDrawCardPayload>(constants.DRAW_CARD);
export const playCard = createAction<IPlayCardPayload>(constants.PLAY_CARD);
