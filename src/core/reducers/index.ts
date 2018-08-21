import battlefield from './battlefield'
import player from './player'

import { combineReducers } from 'redux'

export default combineReducers({
  player,
  battlefield
})
