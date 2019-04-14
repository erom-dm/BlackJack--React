import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import deck from "./deck";
import bank from "./bank";
import gameState from "./gameState";

let reducers = combineReducers({
  deck,
  bank,
  gameState,
  form: formReducer
});

export default reducers;
