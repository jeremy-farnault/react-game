import reducer from './reducers/index'
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
    reducer,
    enhancers
  )

  sagaMiddleware.run(root)

  return store
}
