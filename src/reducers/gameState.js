import { CHANGE_GAME_PHASE } from "../actions/gameState";
import { PLAYER_MADE_BET } from "../actions/bank";

const PRE_DEAL = "pre-deal";
const DEALING = "dealing";

function gameStateReducer(state = "pre-deal", action) {
  switch (action.type) {
    case PLAYER_MADE_BET:
      if (state === PRE_DEAL) {
        return {
          state: DEALING
        };
      }
      return state;
    case CHANGE_GAME_PHASE:
      return action.payload;
    default:
      return state;
  }
}

export default gameStateReducer;
