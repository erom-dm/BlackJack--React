import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers/reducers.js";
import middleware from "./middleware/middleware";
import {composeWithDevTools} from 'redux-devtools-extension'
import App from "./App";

import "./styles.scss";

const store = createStore(reducers, composeWithDevTools(middleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
