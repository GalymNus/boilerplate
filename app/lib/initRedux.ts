import {
  /*applyMiddleware, */ createStore,
  combineReducers,
  compose
} from "redux";

import * as reducers from "../ducks";
import config from "../config";

// Get the Redux DevTools extension and fallback to a no-op function
let devtools = (f: any) => f;

// if (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__) {
// devtools = window.__REDUX_DEVTOOLS_EXTENSION__();
// }
const rootReducer = combineReducers({ ...reducers });

const initStore = (initialState = config.initialState) => {
  // const initialStateWithCookie = getStateFromCookies(initialState, Paths);
  return createStore(
    rootReducer,
    initialState,
    compose(
      // applyMiddleware(reduxCookiesMiddleware(Paths)),
      devtools
    )
  );
};

export default initStore;
