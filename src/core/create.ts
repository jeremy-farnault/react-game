import reducer from './reducers/index'
import root from './saga'

import { applyMiddleware, compose, createStore as _createStore, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { IStoreState } from "../types";

export const initialState: {data: IStoreState.IRootState} = {data: {battlefield: {tiles: []}, session: {allHeroes: {}, allCards: {}, players: {}}}}

export function createStore(data?: any): Store<IStoreState.IRootState> {
  const sagaMiddleware = createSagaMiddleware()

  const middleWares = [sagaMiddleware]

  // tslint:disable:no-any
  const devToolsExtension = (window as any).devToolsExtension
    ? (window as any).devToolsExtension()
    : (f: any) => f

  const finalCreateStore = compose<any>(applyMiddleware(...middleWares), devToolsExtension)(_createStore)

  const createdStore = finalCreateStore(reducer, data)

  sagaMiddleware.run(root)

  initialState.data = createdStore.getState()

  return createdStore
}

const store = createStore()

export default store
