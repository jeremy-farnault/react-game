import battlefield from './battlefield'
import players from './players'
import session from './session'

import { combineReducers } from 'redux'

export default combineReducers({
  players,
  battlefield,
  session
})
