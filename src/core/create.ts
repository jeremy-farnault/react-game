import { IStoreState } from '../types'
import { DefaultTiles } from '../utils/defaults'
import { reducers } from './reducers'
import root from './saga'

import { applyMiddleware, compose, createStore, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'

export default function createReduxStore(): Store {
  const sagaMiddleware = createSagaMiddleware()

  const middleWares = [sagaMiddleware]

  // tslint:disable:no-any
  const devToolsExtension = (window as any).devToolsExtension
    ? (window as any).devToolsExtension()
    : (f: any) => f

  const enhancers = compose<any>(
    applyMiddleware(...middleWares),
    devToolsExtension
  ) // tslint:enable:no-any

  const store = createStore(
    reducers,
    {
      tiles: DefaultTiles
    } as IStoreState,
    enhancers
  )

  sagaMiddleware.run(root)

  return store
}
