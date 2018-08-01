import createSagaMiddleware from "redux-saga";
import { reducers } from "./reducers";

import {
  applyMiddleware,
  compose,
  createStore as _createStore,
  Store
} from "redux";

import root from "./saga";
import { StoreState } from "../types";
import { DefaultTiles } from "../utils/defaults";

export default function createStore(): Store {
  const sagaMiddleware = createSagaMiddleware();

  const middleWares = [sagaMiddleware];

  // tslint:disable:no-any
  const devToolsExtension = (window as any).devToolsExtension
    ? (window as any).devToolsExtension()
    : (f: any) => f;

  const enhancers = compose<any>(
    applyMiddleware(...middleWares),
    devToolsExtension
  ); // tslint:enable:no-any

  const store = _createStore(
    reducers,
    {
      tiles: DefaultTiles
    } as StoreState,
    enhancers
  );

  sagaMiddleware.run(root);

  return store;
}
