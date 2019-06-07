export const CHANGE_GAME_PHASE = "CHANGE_GAME_PHASE";
export const DEALER_BLACKJACK = "DEALER_BLACKJACK";

export function changeGamePhase(phase) {
  return {
    type: CHANGE_GAME_PHASE,
    payload: phase
  };
}

export function dealerBlackJack() {
  return {
    type: DEALER_BLACKJACK,
  }
}
