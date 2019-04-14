export const CHANGE_BANK_VALUE = "CHANGE_BANK_VALUE";
export const CHANGE_PLAYER_BR_VALUE = "CHANGE_PLAYER_BR_VALUE";
export const CHANGE_DEALER_BR_VALUE = "CHANGE_DEALER_BR_VALUE";
export const PLAYER_MADE_BET = "PLAYER_MADE_BET";

export function playerMadeBet(bet) {
  return {
    type: PLAYER_MADE_BET,
    payload: bet
  };
}

export function changeBankValue(bet) {
  return {
    type: CHANGE_BANK_VALUE,
    payload: bet
  };
}

export function changePlayerBrValue(value) {
  return {
    type: CHANGE_PLAYER_BR_VALUE,
    payload: value
  };
}

export function changeDealerBrValue(value) {
  return {
    type: CHANGE_DEALER_BR_VALUE,
    payload: value
  };
}
