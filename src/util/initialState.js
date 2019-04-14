export const DECK = [
  { id: 1, val: "2s", hu: true },
  { id: 2, val: "2c", hu: true },
  { id: 3, val: "2d", hu: true },
  { id: 4, val: "2h", hu: true },
  { id: 5, val: "3s", hu: true },
  { id: 6, val: "3c", hu: true },
  { id: 7, val: "3d", hu: true },
  { id: 8, val: "3h", hu: true },
  { id: 9, val: "4s", hu: true },
  { id: 10, val: "4c", hu: true },
  { id: 11, val: "4d", hu: true },
  { id: 12, val: "4h", hu: true },
  { id: 13, val: "5s", hu: true },
  { id: 14, val: "5c", hu: true },
  { id: 15, val: "5d", hu: true },
  { id: 16, val: "5h", hu: true },
  { id: 17, val: "6s", hu: true },
  { id: 18, val: "6c", hu: true },
  { id: 19, val: "6d", hu: true },
  { id: 20, val: "6h", hu: true },
  { id: 21, val: "7s", hu: true },
  { id: 22, val: "7c", hu: true },
  { id: 23, val: "7d", hu: true },
  { id: 24, val: "7h", hu: true },
  { id: 25, val: "8s", hu: true },
  { id: 26, val: "8c", hu: true },
  { id: 27, val: "8d", hu: true },
  { id: 28, val: "8h", hu: true },
  { id: 29, val: "9s", hu: true },
  { id: 30, val: "9c", hu: true },
  { id: 31, val: "9d", hu: true },
  { id: 32, val: "9h", hu: true },
  { id: 33, val: "10s", hu: true },
  { id: 34, val: "10c", hu: true },
  { id: 35, val: "10d", hu: true },
  { id: 36, val: "10h", hu: true },
  { id: 37, val: "Js", hu: true },
  { id: 38, val: "Jc", hu: true },
  { id: 39, val: "Jd", hu: true },
  { id: 40, val: "Jh", hu: true },
  { id: 41, val: "Qs", hu: true },
  { id: 42, val: "Qc", hu: true },
  { id: 43, val: "Qd", hu: true },
  { id: 44, val: "Qh", hu: true },
  { id: 45, val: "Ks", hu: true },
  { id: 46, val: "Kc", hu: true },
  { id: 47, val: "Kd", hu: true },
  { id: 48, val: "Kh", hu: true },
  { id: 49, val: "As", hu: true },
  { id: 50, val: "Ac", hu: true },
  { id: 51, val: "Ad", hu: true },
  { id: 52, val: "Ah", hu: true }
];

function getRandomInt(min, max) {
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
export const dealerHand = {};
export const playerHand = {};
export const board = {};

export const bank = 0;
export const playerBankroll = 10000;
export const dealerBankroll = 0;
