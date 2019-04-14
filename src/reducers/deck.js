import { DECK, shuffleDeck, dealerHand, playerHand } from "../util/initialState.js";
import { REMOVE_CARD_FROM_DECK } from "../actions/deck";
import { DEAL_CARD } from "../actions/deck";

const deck = shuffleDeck(DECK);

function deckReducer(state = { deck, dealerHand, playerHand }, action) {
  switch (action.type) {
    case REMOVE_CARD_FROM_DECK:
      // let tempState = { state };
      // tempState[action.payload] = null;
      // return tempState;
      return state;
    case DEAL_CARD:
      const deck = [...state.deck];
      const card = deck.pop();
      if(action.payload === 'player'){
        const pHand = [...state.playerHand];
        pHand.push(card);
        return {...state, deck, playerHand:[...pHand]}
      } else if (action.payload === 'dealer'){
        const dHand = [...state.dealerHand];
        if (dHand.length > 0){
          dHand.push({...card, hu: false})
        } else {
          dHand.push(card);
        }
        return {...state, deck, dealerHand:[...dHand]}
      }
      return state;
    default:
      return state;
  }
}

export default deckReducer;
