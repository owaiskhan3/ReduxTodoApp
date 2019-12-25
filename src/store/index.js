import reducer from "./reducers";

import { createStore } from "redux";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log("store", store.getState());

export default store;
