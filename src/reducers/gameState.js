import { CHANGE_GAME_PHASE } from "../actions/gameState";
import { PLAYER_MADE_BET } from "../actions/bank";

// Game Phases
export const PRE_DEAL = "pre_deal";
export const CHECKING_DEALER_BJ = "checking_dealer_bj";
export const PLAYER_PHASE = "player_phase";
export const DEALER_PHASE = "dealer_phase";

function gameStateReducer(state = PRE_DEAL, action) {
  switch (action.type) {
    case PLAYER_MADE_BET:
      if (state === PRE_DEAL) {
        return { state: CHECKING_DEALER_BJ };
      }
      return state;
    case CHANGE_GAME_PHASE:
      return action.payload;
    default:
      return state;
  }
}

export default gameStateReducer;
