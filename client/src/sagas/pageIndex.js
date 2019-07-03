import { call, put, takeEvery, takeLatest, select } from "redux-saga/effects";
import Taro from "@tarojs/taro";
import { clearData, setLastPageNum } from "../actions/index";
import { makeLastPageNum } from "../selects/pageIndex";
import {
  getPageIndexDate,
  getUpdateData,
  getIndexTotal
} from "../services/pageIndex";
import {
  PAGE_INDEX_GET,
  PAGE_INDEX_SET,
  PAGE_INDEX_UPPER,
  PAGE_INDEX_LOWER
} from "../constants/index";
// worker Saga : 将在 PAGE_INDEX_SET action 被 dispatch 时调用
function* fetchData(action) {
  try {
    const { pageNum } = action;
    const data = yield call(getPageIndexDate, pageNum);
    yield put({ type: PAGE_INDEX_SET, data });
  } catch (e) {
    // yield put({ type: PAGE_INDEX_SET, message: e.message });
  }
}

// worker Saga : 将在 PAGE_INDEX_SET action 被 dispatch 时调用
function* fetchUpdate(action) {
  try {
    yield put(clearData());
    let storeLastPageNum = 0;
    storeLastPageNum = yield select(makeLastPageNum);
    if (storeLastPageNum == 0) {
      const { total } = yield call(getIndexTotal);
      storeLastPageNum = Math.floor(total / 20);
    }
    const randomNum = 0 + Math.floor(Math.random() * (storeLastPageNum - 1));

    Taro.showNavigationBarLoading();
    const data = yield call(getPageIndexDate, randomNum);

    yield put(setLastPageNum(storeLastPageNum == 0 ? 0 : storeLastPageNum - 1));

    Taro.hideNavigationBarLoading();
    Taro.stopPullDownRefresh();
    yield put({ type: PAGE_INDEX_SET, data });
  } catch (e) {
    // yield put({ type: PAGE_INDEX_SET, message: e.message });
  }
}
// worker Saga : 将在 PAGE_INDEX_SET action 被 dispatch 时调用
function* fetchLower(action) {
  try {
    const { pageNum } = action;
    Taro.showNavigationBarLoading();
    Taro.showToast({
      title: "加载中",
      icon: "loading"
      // duration: 1000
    });
    const data = yield call(getPageIndexDate, pageNum);
    console.log("continueload");
    Taro.showToast({
      title: "加载成功",
      icon: "success"
      // duration: 1000
    });
    Taro.hideNavigationBarLoading();
    yield put({ type: PAGE_INDEX_SET, data });
  } catch (e) {
    // yield put({ type: PAGE_INDEX_SET, message: e.message });
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
  yield takeLatest(PAGE_INDEX_UPPER, fetchUpdate);
  yield takeLatest(PAGE_INDEX_LOWER, fetchLower);
}

export default mySaga;
