//TODO: remove fv property in DECK when no longer needed

export const DECK = [
  { id: 1, fv: "2s", val: 2, suit: 'spades', hu: true },
  { id: 2, fv: "2c", val: 2, suit: 'clubs', hu: true },
  { id: 3, fv: "2d", val: 2, suit: 'diamonds', hu: true },
  { id: 4, fv: "2h", val: 2, suit: 'hearts', hu: true },
  { id: 5, fv: "3s", val: 3, suit: 'spades', hu: true },
  { id: 6, fv: "3c", val: 3, suit: 'clubs', hu: true },
  { id: 7, fv: "3d", val: 3, suit: 'diamonds', hu: true },
  { id: 8, fv: "3h", val: 3, suit: 'hearts', hu: true },
  { id: 9, fv: "4s", val: 4, suit: 'spades', hu: true },
  { id: 10, fv: "4c", val: 4, suit: 'clubs', hu: true },
  { id: 11, fv: "4d", val: 4, suit: 'diamonds', hu: true },
  { id: 12, fv: "4h", val: 4, suit: 'hearts', hu: true },
  { id: 13, fv: "5s", val: 5, suit: 'spades', hu: true },
  { id: 14, fv: "5c", val: 5, suit: 'clubs', hu: true },
  { id: 15, fv: "5d", val: 5, suit: 'diamonds', hu: true },
  { id: 16, fv: "5h", val: 5, suit: 'hearts', hu: true },
  { id: 17, fv: "6s", val: 6, suit: 'spades', hu: true },
  { id: 18, fv: "6c", val: 6, suit: 'clubs', hu: true },
  { id: 19, fv: "6d", val: 6, suit: 'diamonds', hu: true },
  { id: 20, fv: "6h", val: 6, suit: 'hearts', hu: true },
  { id: 21, fv: "7s", val: 7, suit: 'spades', hu: true },
  { id: 22, fv: "7c", val: 7, suit: 'clubs', hu: true },
  { id: 23, fv: "7d", val: 7, suit: 'diamonds', hu: true },
  { id: 24, fv: "7h", val: 7, suit: 'hearts', hu: true },
  { id: 25, fv: "8s", val: 8, suit: 'spades', hu: true },
  { id: 26, fv: "8c", val: 8, suit: 'clubs', hu: true },
  { id: 27, fv: "8d", val: 8, suit: 'diamonds', hu: true },
  { id: 28, fv: "8h", val: 8, suit: 'hearts', hu: true },
  { id: 29, fv: "9s", val: 9, suit: 'spades', hu: true },
  { id: 30, fv: "9c", val: 9, suit: 'clubs', hu: true },
  { id: 31, fv: "9d", val: 9, suit: 'diamonds', hu: true },
  { id: 32, fv: "9h", val: 9, suit: 'hearts', hu: true },
  { id: 33, fv: "10s", val: 10, suit: 'spades', hu: true },
  { id: 34, fv: "10c", val: 10, suit: 'clubs', hu: true },
  { id: 35, fv: "10d", val: 10, suit: 'diamonds', hu: true },
  { id: 36, fv: "10h", val: 10, suit: 'hearts', hu: true },
  { id: 37, fv: "Js", val: 10, suit: 'spades', hu: true },
  { id: 38, fv: "Jc", val: 10, suit: 'clubs', hu: true },
  { id: 39, fv: "Jd", val: 10, suit: 'diamonds', hu: true },
  { id: 40, fv: "Jh", val: 10, suit: 'hearts', hu: true },
  { id: 41, fv: "Qs", val: 10, suit: 'spades', hu: true },
  { id: 42, fv: "Qc", val: 10, suit: 'clubs', hu: true },
  { id: 43, fv: "Qd", val: 10, suit: 'diamonds', hu: true },
  { id: 44, fv: "Qh", val: 10, suit: 'hearts', hu: true },
  { id: 45, fv: "Ks", val: 10, suit: 'spades', hu: true },
  { id: 46, fv: "Kc", val: 10, suit: 'clubs', hu: true },
  { id: 47, fv: "Kd", val: 10, suit: 'diamonds', hu: true },
  { id: 48, fv: "Kh", val: 10, suit: 'hearts', hu: true },
  { id: 49, fv: "As", val: 11, suit: 'spades', hu: true },
  { id: 50, fv: "Ac", val: 11, suit: 'clubs', hu: true },
  { id: 51, fv: "Ad", val: 11, suit: 'diamonds', hu: true },
  { id: 52, fv: "Ah", val: 11, suit: 'hearts', hu: true }
];

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function shuffleDeck(deck) {
  const arr = [];
  const iterations = deck.length;

  for (let i = 0; i < iterations; i++) {
    const len = deck.length;
    const index = getRandomInt(0, len - 1);

    arr.push(deck[index]);
    deck.splice(index, 1);
  }
  return arr;
}
export const dealerHand = [];
export const playerHand = [];
export const board = [];

export const bank = 0;
export const playerBankroll = 10000;
export const dealerBankroll = 0;
