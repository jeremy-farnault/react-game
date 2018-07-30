import createSagaMiddleware from 'redux-saga'

import {applyMiddleware, compose, createStore as _createStore, Store} from 'redux'
import {reducers} from '../reducers/index'
import {StoreState} from '../types/index'

import root from './saga'
import {Applicant, IdAttempt, PreAccount} from './models'
import {FilterStatus} from '../components/Navigation'

export default function createStore(): Store<StoreState> {
  const sagaMiddleware = createSagaMiddleware()

  const middleWares = [sagaMiddleware]

  // tslint:disable:no-any
  const devToolsExtension = (window as any).devToolsExtension
    ? (window as any).devToolsExtension()
    : (f: any) => f

  const enhancers = compose<any>(applyMiddleware(...middleWares), devToolsExtension) // tslint:enable:no-any

  const store = _createStore<StoreState>(
    reducers,
    {
      data: {},
      searchTerm: '',
      token: '',
      deleteValidationLoading: false,
      bankStatementPhotoUrl: '',
      validateLoading: false,
      filter: FilterStatus.all,
      preAccountDetails: {
        applicants: [] as Applicant[],
        preAccount: {} as PreAccount,
        idAttempts: [] as IdAttempt[]
      }},
    enhancers
  )

  sagaMiddleware.run(root)

  return store
}
