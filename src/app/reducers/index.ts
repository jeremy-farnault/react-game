import { combineReducers } from 'redux'
import { RootState } from './state'
import { tilesReducer } from './tiles'
import { routerReducer, RouterState } from 'react-router-redux'

export { RootState, RouterState }

// NOTE: current type definition of Reducer in 'react-router-redux' and 'redux-actions' module
// doesn't go well with redux@4
export const rootReducer = combineReducers<RootState>({
  todos: tilesReducer as any,
  router: routerReducer as any
})
