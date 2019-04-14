import React, { Component } from "react";
import PlayArea from "./components/PlayArea";

class App extends Component {
  render() {
    return <PlayArea />;
  }
}

export default App;

// pre-deal:
//    player makes a bet;

// initial deal:
//    deal player's hand
//    deal dealer's hand (one card face down)

// dealer offers insurance if he has ace face up (2 to 1 payment in case hole card is worth 10)

//  if dealer has an ace or 10-worth card face-up, he checks for blackjack. If he has one, he shows it immediately.
//  if dealer hs blackjack, all bets except insurance lose, if player has blackjack too, bets bounce

//  if dealer has no BJ, player phase starts:
//  player can: stand, hit, double (player dobles his bet, and gets dealt one last card), split (if player has pair or any 10's cards he can double his bet, and separate cards into individual hands. Dealer deals 1 card to each card (if aces were split, one and only card). Player proceeds playing hands normally)

// if player is not bust, dealer phase starts. with 16 or less, dealer hits, with 17+ dealer stands.

// if dealer is not bust, hands resolve. winning hand pays 1-1, except for players blackjack, which pays 3 to 2.
