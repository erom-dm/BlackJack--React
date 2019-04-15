import { DECK, shuffleDeck, dealerHand, playerHand } from "../util/initialState.js";
import { REMOVE_CARD_FROM_DECK } from "../actions/deck";
import { DEAL_CARD } from "../actions/deck";
import { TURN_A_CARD } from "../actions/deck";

const deck = shuffleDeck(DECK);

function deckReducer(state = { deck, dealerHand, playerHand }, action) {
  let pHand;
  let dHand;
  let deck;
  switch (action.type) {
    case REMOVE_CARD_FROM_DECK:
      // let tempState = { state };
      // tempState[action.payload] = null;
      // return tempState;
      return state;
    case DEAL_CARD:
      deck = [...state.deck];
      const card = deck.pop();
      if(action.payload === 'player'){
        pHand = [...state.playerHand];
        pHand.push(card);
        return {...state, deck, playerHand:[...pHand]}
      } else if (action.payload === 'dealer'){
        dHand = [...state.dealerHand];
        if (dHand.length > 0){
          dHand.push({...card, hu: false})
        } else {
          dHand.push(card);
        }
        return {...state, deck, dealerHand:[...dHand]}
      }
      return state;
    case TURN_A_CARD:
      const {card_id, card_location} = action.payload;
      if (card_location === 'dealer'){
        debugger;
        dHand = [...state.dealerHand].map((card) => {
          if(card.id === card_id){
            card.hu = !card.hu
          }
        });
        return {...state, dealerHand:[...dHand]}
      } else if (card_location === 'player'){
        pHand = [...state.playerHand].map((card) => {
          if(card.id === card_id){
            card.hu = !card.hu
          }
        });
        return {...state, playerHand:[...pHand]}
      } else {
        deck = [...state.deck].map((card) => {
          if(card.id === card_id){
            card.hu = !card.hu
          }
        });
        return {...state, deck}
      }
    default:
      return state;
  }
}

export default deckReducer;
