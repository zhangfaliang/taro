import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "../reducers/index";
import mySaga from "../sagas";
const sagaMiddleware = createSagaMiddleware();
let middlewares = [sagaMiddleware];
export default function configStore() {
  // mount it on the Store
  const store = createStore(reducer, applyMiddleware(...middlewares));
  // then run the saga
  sagaMiddleware.run(mySaga);
  return store;
}

// create the saga middleware
