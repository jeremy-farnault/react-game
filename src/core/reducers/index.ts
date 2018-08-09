import { IStoreState } from '../../types'
import { Actions } from '../actions'
import * as constants from '../constants/index'

export function reducers(state: IStoreState, action: Actions): IStoreState {
  switch (action.type) {
    case constants.LOAD_DATA:
      return { ...state, tiles: [] }
    default:
      return state
  }
}





import { createAction, handleActions, Action } from 'redux-actions'
import config from '../../../utils/config'
import {ReduxState} from '../../../interfaces/reduxState'
import {ObCoreType} from '../../ObCoreType'

export const LOAD_QUESTION_START = 'OB/APP/LOAD_QUESTION/START'
export const LOAD_QUESTION_SUCCESS = 'OB/APP/LOAD_QUESTION/SUCCESS'
export const LOAD_QUESTION_FAIL = 'OB/APP/LOAD_QUESTION/FAIL'
export const LOAD_SESSION_START = 'OB/APP/LOAD_SESSION/START'
export const LOAD_SESSION_SUCCESS = 'OB/APP/LOAD_SESSION/SUCCESS'
export const LOAD_SESSION_FAIL = 'OB/APP/LOAD_SESSION/FAIL'
export const CHECK_SESSION_START = 'OB/APP/CHECK_SESSION/START'
export const CHECK_APPLICATION_LOCKED_START = 'OB/APP/CHECK_APPLICATION_LOCKED/START'
export const RESTORE_SESSION_START = 'OB/APP/RESTORE_SESSION/START'
export const RENEW_AUTH_TOKEN = 'OB/APP/RENEW_AUTH_TOKEN'
export const CHANGE_PROCESS = 'OB/APP/CHANGE_PROCESS'
export const CHANGE_PIN_CODE_STATUS = 'OB/APP/CHANGE_PIN_CODE_STATUS'
export const CREATE_PRE_ACCOUNT = 'OB/APP/CREATE_PRE_ACCOUNT'
export const RESET_STATE = 'OB/APP/RESET_STATE'

export type LoadQuestionStartPayload = {
  id: string
}

export type LoadQuestionSuccessPayload = ObCoreType.BlockState

export type LoadQuestionFailPayload = {}

export type LoadSessionStartPayload = {
  id: string
}

export type LoadSessionSuccessPayload = {
  data: ReduxState.Session
}

export type LoadSessionFailPayload = {}

type payloadUnionTypes = LoadQuestionStartPayload | LoadQuestionSuccessPayload | LoadQuestionFailPayload
  | LoadSessionStartPayload | LoadSessionSuccessPayload | LoadSessionFailPayload

type changeProcessPayload = {
  startProcess: boolean
  showRoadMap: boolean
  showTermsOfUse: boolean
  showEnterPin: boolean
}

type changePinCodeStatusPayload = {
  pinCodeStatus: 'initial' | 'success' | 'failure' | 'locked',
  pinCodeLockOuted?: Date
}

const initialState: ReduxState.AppContainer = {
  mainControl: undefined,
  mainBlock: null,
  questionLoaded: false,
  sessionLoaded: false,
  process: {
    startProcess: false,
    showRoadMap: false,
    showTermsOfUse: false,
    showEnterPin: false
  },
  pinCodeStatus: 'initial',
  pinCodeLockOuted: null
}

export default handleActions<ReduxState.AppContainer, any>({
  [LOAD_QUESTION_START]: (state: ReduxState.AppContainer, action: Action<LoadQuestionStartPayload>) => ({
    ...state
  }),
  [LOAD_QUESTION_SUCCESS]: (state: ReduxState.AppContainer, action: Action<LoadQuestionSuccessPayload>) => ({
    ...state,
    mainBlock: action.payload
  }),
  [LOAD_QUESTION_FAIL]: (state: ReduxState.AppContainer, action: Action<LoadQuestionFailPayload>) => ({
    ...state,
    mainBlock: null
  }),
  [LOAD_SESSION_START]: (state: ReduxState.AppContainer, action: Action<LoadSessionStartPayload>) => ({
    ...state
  }),
  [LOAD_SESSION_SUCCESS]: (state: ReduxState.AppContainer, action: Action<LoadSessionSuccessPayload>) => ({
    ...state,
    sessionLoaded: true
  }),
  [LOAD_SESSION_FAIL]: (state: ReduxState.AppContainer, action: Action<LoadSessionFailPayload>) => ({
    ...state,
    sessionLoaded: false
  }),
  [CHECK_SESSION_START]: (state: ReduxState.AppContainer, action: Action<null>) => ({
    ...state
  }),
  [CHECK_APPLICATION_LOCKED_START]: (state: ReduxState.AppContainer, action: Action<null>) => ({
    ...state
  }),
  [RESTORE_SESSION_START]: (state: ReduxState.AppContainer, action: Action<null>) => ({
    ...state
  }),
  [RENEW_AUTH_TOKEN]: (state: ReduxState.AppContainer, action: Action<null>) => ({
    ...state
  }),
  [CHANGE_PROCESS]: (state: ReduxState.AppContainer, action: Action<changeProcessPayload>) => ({
    ...state,
    process: action.payload
  }),
  [CHANGE_PIN_CODE_STATUS]: (state: ReduxState.AppContainer, action: Action<changePinCodeStatusPayload>) => ({
    ...state,
    ...action.payload
  }),
  [CREATE_PRE_ACCOUNT]: (state: ReduxState.AppContainer, action: Action<null>) => ({
    ...state
  })
}, initialState)

export const loadQuestionStart = createAction<LoadQuestionStartPayload>(LOAD_QUESTION_START)
export const loadQuestionSuccess = createAction<LoadQuestionSuccessPayload>(LOAD_QUESTION_SUCCESS)
export const loadQuestionFail = createAction<LoadQuestionFailPayload>(LOAD_QUESTION_FAIL)
export const loadSessionStart = createAction<LoadSessionStartPayload>(LOAD_SESSION_START)
export const loadSessionSuccess = createAction<LoadSessionSuccessPayload>(LOAD_SESSION_SUCCESS)
export const loadSessionFail = createAction<LoadSessionFailPayload>(LOAD_SESSION_FAIL)
export const checkSessionStart = createAction(CHECK_SESSION_START)
export const checkApplicationLockedStart = createAction(CHECK_APPLICATION_LOCKED_START)
export const restoreSessionStart = createAction(RESTORE_SESSION_START)
export const renewAuthToken = createAction(RENEW_AUTH_TOKEN)
export const changeProcess = createAction<changeProcessPayload>(CHANGE_PROCESS)
export const changePinCodeStatus = createAction<changePinCodeStatusPayload>(CHANGE_PIN_CODE_STATUS)
export const createPreAccount = createAction(CREATE_PRE_ACCOUNT)
export const resetState = createAction(RESET_STATE)



import { combineReducers } from 'redux'
import App from './App'
import MainControl from './MainControl'
import ErrorPage from './ErrorPage'

export default combineReducers({
  App,
  MainControl,
  ErrorPage
})