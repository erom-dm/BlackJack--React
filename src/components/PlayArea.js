import React, { Component } from "react";
import "./component-style.scss";
import Hand from "./Hand";
import Bank from "./Bank";
import ActionBar from "./ActionBar";
import { connect } from "react-redux";
import { removeCardFromDeck } from "../actions/deck";

class PlayArea extends Component {
  dealaCard(deck) {
    const cardNum = this.getRandomInt(0, 51);
    const card = deck[cardNum];
    this.props.removeCardFromDeck(cardNum);
    return card;
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  shuffleDeck(deck) {
    const arr = [];
    const iterations = deck.length;

    for (let i = 0; i < iterations; i++) {
      const len = deck.length;
      const index = this.getRandomInt(0, len);

      arr.push(deck[index]);
      deck.splice(index, 1);
    }
    return arr;
  }

  render() {
    const { bank, board, deck, gameState, hands } = this.props.state;

    return (
      <div className="playAreaContainer">
        <div className="dealerZone">
          <Bank val={bank.dealerBankroll} cName="bank dealerBankroll" />
          <Hand
            className="dealerHand"
            cards={this.props.state.deck.dealerHand}
          />
        </div>

        <div className="boardZone">
          <Bank val={bank.bank} cName="bank boardBank" />
        </div>

        <div className="actionBarZone">
          <ActionBar />
        </div>

        <div className="playerZone">
          <Bank val={bank.playerBankroll} cName="bank playerBankroll" />
          <Hand
            className="playerHand"
            c1={deck[this.getRandomInt(0, 51)]}
            c2={deck[this.getRandomInt(0, 51)]}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeCardFromDeck
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayArea);
