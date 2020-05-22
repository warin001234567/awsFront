import React, { useState } from "react";
import { createStore } from "redux";
import authReducer from "../store/reducer/auth";
import { Provider } from "react-redux";
import Home from "./home";

const store = createStore(authReducer);

const App = (props) => {
  return (
    <Provider store={store}>
      <Home></Home>
    </Provider>
  );
};

export default App;
