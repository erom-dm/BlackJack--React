import { CHANGE_GAME_PHASE } from "../actions/gameState";
import { PLAYER_MADE_BET } from "../actions/bank";
import {PRE_DEAL, CHECKING_DEALER_BJ} from "../util/gamePhases";

function gameStateReducer(state = {phase: PRE_DEAL, dealer_bj: false}, action) {
  switch (action.type) {
    case PLAYER_MADE_BET:
      if (state.phase === PRE_DEAL) {
        return {...state, phase: CHECKING_DEALER_BJ};
      }
      return state;
    case CHANGE_GAME_PHASE:
      return {...state, phase: action.payload};
    default:
      return state;
  }
}

export default gameStateReducer;
