import React, { useState } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from "../store/reducer/auth";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import Home from "./home";

const rootReducer = combineReducers({
  auth: authReducer,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = (props) => {
  return (
    <Provider store={store}>
      <Home></Home>
    </Provider>
  );
};

export default App;
