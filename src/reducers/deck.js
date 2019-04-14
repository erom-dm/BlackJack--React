import {
  DECK,
  shuffleDeck,
  dealerHand,
  playerHand
} from "../util/initialState.js";
import { REMOVE_CARD_FROM_DECK } from "../actions/deck";
import { DEAL_CARD } from "../actions/deck";

const shuffled = shuffleDeck(DECK);

function deckReducer(state = { shuffled, dealerHand, playerHand }, action) {
  switch (action.type) {
    case REMOVE_CARD_FROM_DECK:
      // let tempState = { state };
      // tempState[action.payload] = null;
      // return tempState;
      return state;
    case DEAL_CARD:
      return state;
    default:
      return state;
  }
}

export default deckReducer;
