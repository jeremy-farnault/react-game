import { IStoreState } from "../../types";
import {
  DECREMENT_ACTION_POINTS, DRAW_CARD,
  INCREMENT_ACTION_POINTS, INITIALIZE_DECK_HAND,
  LOAD_ALL_CARDS_FAIL,
  LOAD_ALL_CARDS_START,
  LOAD_ALL_CARDS_SUCCESS,
  LOAD_ALL_HEROES_FAIL,
  LOAD_ALL_HEROES_START,
  LOAD_ALL_HEROES_SUCCESS,
  LOAD_PLAYERS_FAIL,
  LOAD_PLAYERS_START,
  LOAD_PLAYERS_SUCCESS, PLAY_CARD,
  SET_HERO_NEW_POSITION,
  SET_HERO_SELECTED,
  SET_HEROES_ORDER, SET_NEXT_CURRENT_HERO
} from "../constants";
import { ICard, ICards, ICardsBattlefield, ICardsBattlefieldPlayer, IHeroBattlefield, IHeroes } from "../models";

import * as _ from "lodash";
import { Action, handleActions } from "redux-actions";

const initialState: IStoreState.ISession = {
  allCards: {},
  allHeroes: {},
  players: {},
  heroesFight: [],
  cardsFight: {}
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

export interface ISetHeroSelectedPayload {
  heroId: string
  playerId: string
  setSelected: boolean
}

export interface ISetHeroNewPositionPayload {
  heroId: string
  playerId: string
  tileX: number
  tileY: number
  prevTileX: number
  prevTileY: number
}

export interface ISetHeroesOrderPayload {
  allHeroesPlayers: IHeroBattlefield[]
}

export interface IChangeActionPointsPayload {
  playerId: string
  heroId: string
  heroIndex: number
}

export interface IDrawCardPayload {
  playerId: string
}

export interface IPlayCardPayload {
  playerId: string,
  card: ICard
}

export default handleActions(
  {
    // LOAD ALL HEROES ACTIONS
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

    // LOAD ALL CARDS ACTIONS
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

    // LOAD PLAYERS ACTIONS
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
    }),

    // UPDATE PLAYERS ACTIONS
    [SET_HERO_SELECTED]: (
      state: IStoreState.ISession,
      action: Action<ISetHeroSelectedPayload>
    ) => {
      const newPLayers = state.players;
      if (action.payload && action.payload.playerId && action.payload.heroId) {
        Object.keys(newPLayers)
          .forEach((playerId: string) => Object.keys(newPLayers[playerId].heroes)
            .forEach((heroId: string) => newPLayers[playerId].heroes[heroId].selected = false));
        newPLayers[action.payload.playerId].heroes[action.payload.heroId].selected = action.payload.setSelected;
      }
      return ({
        ...state,
        players: newPLayers
      });
    },
    [SET_HERO_NEW_POSITION]: (
      state: IStoreState.ISession,
      action: Action<ISetHeroNewPositionPayload>
    ) => {
      const newPLayers = state.players;
      if (action.payload && action.payload.playerId && action.payload.heroId) {
        newPLayers[action.payload.playerId].heroes[action.payload.heroId].tileX = action.payload.tileX;
        newPLayers[action.payload.playerId].heroes[action.payload.heroId].tileY = action.payload.tileY;
      }
      return ({
        ...state,
        players: newPLayers
      });
    },

    // HEROES ORDER ACTIONS
    [SET_HEROES_ORDER]: (
      state: IStoreState.ISession,
      action: Action<ISetHeroesOrderPayload>
    ) => {
      return ({
        ...state,
        heroesFight: action.payload ? action.payload.allHeroesPlayers : []
      });
    },
    [SET_NEXT_CURRENT_HERO]: (
      state: IStoreState.ISession,
      action: Action<null>
    ) => {
      const newOrder = state.heroesFight.slice(1);
      newOrder.push(state.heroesFight[0]);
      return ({
        ...state,
        heroesFight: newOrder
      });
    },

    // HEROES ACTION POINTS ACTIONS
    [INCREMENT_ACTION_POINTS]: (
      state: IStoreState.ISession,
      action: Action<IChangeActionPointsPayload>
    ) => {
      const newHeroes = state.heroesFight.slice();
      if (!!action.payload &&
        newHeroes[action.payload.heroIndex].playerId === action.payload.playerId &&
        newHeroes[action.payload.heroIndex].id === action.payload.heroId) {
        newHeroes[action.payload.heroIndex].currentActionPoints++;
      }
      return ({ ...state, heroesFight: newHeroes });
    },
    [DECREMENT_ACTION_POINTS]: (
      state: IStoreState.ISession,
      action: Action<IChangeActionPointsPayload>
    ) => {
      const newHeroes = state.heroesFight.slice();
      if (!!action.payload &&
        newHeroes[action.payload.heroIndex].playerId === action.payload.playerId &&
        newHeroes[action.payload.heroIndex].id === action.payload.heroId) {
        newHeroes[action.payload.heroIndex].currentActionPoints--;
      }
      return ({ ...state, heroesFight: newHeroes });
    },

    // CARDS BATTLEFIELD ACTIONS
    [INITIALIZE_DECK_HAND]: (
      state: IStoreState.ISession,
      action: Action<{}>
    ) => {
      const cardsFightTemp = Object.keys(state.players).map(k => {
        const playerCards = Object.keys(state.players[k].cards).map(c => state.players[k].cards[c]);
        const hand = _.range(3).map(i => {
          const index = Math.floor(Math.random() * playerCards.length);
          const card = playerCards[index];
          playerCards.splice(index, 1);
          return card;
        });
        return {
          currentHand: hand,
          currentDeck: playerCards,
          playerId: k
        };
      });
      const cardsFight: ICardsBattlefield = {
        [cardsFightTemp[0].playerId]: {
          currentDeck: cardsFightTemp[0].currentDeck,
          currentHand: cardsFightTemp[0].currentHand
        },
        [cardsFightTemp[1].playerId]: {
          currentDeck: cardsFightTemp[1].currentDeck,
          currentHand: cardsFightTemp[1].currentHand
        }
      }
      return ({ ...state, cardsFight });
    },
    [DRAW_CARD]: (
      state: IStoreState.ISession,
      action: Action<IDrawCardPayload>
    ) => {
      const id = action.payload ? action.payload.playerId : "";
      state.cardsFight[id].currentDeck.splice(0, 1);
      state.cardsFight[id].currentHand.push(_.first(state.cardsFight[id].currentDeck) as ICard);
      const newCardsPlayer: ICardsBattlefieldPlayer = {
        currentHand: state.cardsFight[id].currentHand,
        currentDeck: state.cardsFight[id].currentDeck
      };
      return ({ ...state, cardsFight: state.cardsFight[id] = newCardsPlayer });
    },
    [PLAY_CARD]: (
      state: IStoreState.ISession,
      action: Action<IPlayCardPayload>
    ) => {
      const id = action.payload ? action.payload.playerId : "";
      state.cardsFight[id].currentDeck.push((action.payload as IPlayCardPayload).card);
      const indexCard = state.cardsFight[id].currentHand.findIndex((c: ICard) => !!action.payload && c === action.payload.card);
      state.cardsFight[id].currentHand.splice(indexCard, 1);
      const newCardsPlayer: ICardsBattlefieldPlayer = {
        currentHand: state.cardsFight[id].currentHand,
        currentDeck: state.cardsFight[id].currentDeck
      };
      return ({ ...state, cardsFight: state.cardsFight[id] = newCardsPlayer });
    }
  },
  initialState
);
