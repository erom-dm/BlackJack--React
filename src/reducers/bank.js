import { bank, playerBankroll, dealerBankroll } from "../util/initialState.js";
import {
  PLAYER_MADE_BET,
  CHANGE_BANK_VALUE,
  CHANGE_PLAYER_BR_VALUE,
  CHANGE_DEALER_BR_VALUE
} from "../actions/bank";

function bankReducer(state = { bank, playerBankroll, dealerBankroll }, action) {
  switch (action.type) {
    case PLAYER_MADE_BET:
      const bet = Number(action.payload.bet);
      return {
        ...state,
        bank: state.bank + bet,
        playerBankroll: state.playerBankroll - bet
      };
    case CHANGE_BANK_VALUE:
      return {
        ...state,
        bank: action.payload.bet
      };
    case CHANGE_PLAYER_BR_VALUE:
      const result = playerBankroll + action.payload.value;
      return {
        ...state,
        playerBankroll: result
      };
    case CHANGE_DEALER_BR_VALUE:
      const result2 = dealerBankroll + action.payload.value;
      return {
        ...state,
        dealerBankroll: result2
      };
    default:
      return state;
  }
}

export default bankReducer;
