// Redux alone, not Toolkit was using this Logic in comments below
// import { applyMiddleware } from "redux";
// import reduxThunk from "redux-thunk";
// import reducers from "../reducers";
// import counterReducer from "../reducers/counterReducer";

//Action Creator Redux Chrome DevTools code
// const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// const store = configureStore(reducers, enhancer(applyMiddleware(reduxThunk)));


// Now with Redux Toolkit...

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../reducers/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

export default store;
