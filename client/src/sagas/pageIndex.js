import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getPageIndexDate } from '../services/pageIndex';
import { PAGE_INDEX_GET,PAGE_INDEX_SET} from '../constants/index';
// worker Saga : 将在 PAGE_INDEX_SET action 被 dispatch 时调用
function* fetchData(action) {
   try {
      const data = yield call(getPageIndexDate);
      yield put({type: PAGE_INDEX_SET, data});
   } catch (e) {
      yield put({type: PAGE_INDEX_SET, message: e.message});
   }
}

/*
  也可以使用 takeLatest

  不允许并发，dispatch 一个 `PAGE_INDEX_SET` action 时，
  如果在这之前已经有一个 `PAGE_INDEX_SET` action 在处理中，
  那么处理中的 action 会被取消，只会执行当前的
*/
function* mySaga() {
  yield takeEvery(PAGE_INDEX_GET, fetchData);
}

export default mySaga;