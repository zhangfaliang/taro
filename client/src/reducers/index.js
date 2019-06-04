import { combineReducers } from 'redux'
import counter from './counter.js'
import pageIndex from './pageIndex';

export default combineReducers({
  counter,
  pageIndex
})