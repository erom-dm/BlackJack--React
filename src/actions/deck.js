export const REMOVE_CARD_FROM_DECK = "REMOVE_CARD_FROM_DECK";
export const DEAL_CARD = "DEAL_CARD";
export const TURN_A_CARD = "TURN_A_CARD";

export function removeCardFromDeck(cardNum) {
  return {
    type: REMOVE_CARD_FROM_DECK,
    payload: cardNum
  };
}

export function dealCard(cardReceiver) {
  return {
    type: DEAL_CARD,
    payload: cardReceiver
  };
}

export function turnACard(card_id, card_location) {
  return {
    type: TURN_A_CARD,
    payload: {card_id, card_location}
  };
}

