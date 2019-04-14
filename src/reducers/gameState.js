import { CHANGE_GAME_PHASE } from "../actions/gameState";
import { PLAYER_MADE_BET } from "../actions/bank";
import {PRE_DEAL, CHECKING_DEALER_BJ} from "../util/gamePhases";

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
