import { PLAYER_MADE_BET } from "../actions/bank";
import { dealCard } from "../actions/deck";

const dealer = store => next => action => {
  const state = store.getState();
  const dispatch = store.dispatch;

  if (action.type === PLAYER_MADE_BET && state.gameState === "pre-deal") {
    dispatch(dealCard("player"));
    dispatch(dealCard("player"));
    dispatch(dealCard("dealer"));
    dispatch(dealCard("dealer"));
  }

  const returnValue = next(action);
  return returnValue;
};

export default dealer;
