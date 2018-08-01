import {takeEvery} from 'redux-saga/effects'
import * as constants from '../constants'

function* loadData() {
  yield null
}

function* root() {
  yield takeEvery(constants.LOAD_DATA, loadData)
}

export default root
