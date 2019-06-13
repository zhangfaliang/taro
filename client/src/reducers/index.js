import { combineReducers } from 'redux'
import counter from './counter.js'
import pageIndex from './pageIndex';
import answerDetail from './answer';

export default combineReducers({
  counter,
  pageIndex,
  answerDetail
})