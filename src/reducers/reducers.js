import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import deck from "./deck";
import bankReducer from "./bank";
import gameState from "./gameState";

let reducers = combineReducers({
  deck,
  bank: bankReducer,
  gameState,
  form: formReducer
});

export default reducers;
