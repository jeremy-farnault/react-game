import battlefield from './battlefield'
import player from './player'
import session from './session'

import { combineReducers } from 'redux'

export default combineReducers({
  player,
  battlefield,
  session
})
