import { PLAYER_MADE_BET } from "../actions/bank";
import { dealCard } from "../actions/deck";
import { PRE_DEAL } from "../reducers/gameState";

const dealer = store => next => action => {
  const state = store.getState();
  const dispatch = store.dispatch;

  if (action.type === PLAYER_MADE_BET && state.gameState === PRE_DEAL) {
    dispatch(dealCard("player"));
    dispatch(dealCard("dealer"));
    dispatch(dealCard("player"));
    dispatch(dealCard("dealer"));
  }

  return next(action);
};

export default dealer;
