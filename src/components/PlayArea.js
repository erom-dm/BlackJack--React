import React, { Component } from "react";
import "./component-style.scss";
import Hand from "./Hand";
import Bank from "./Bank";
import ActionBar from "./ActionBar";
import { getRandomInt } from "../util/initialState"
import { connect } from "react-redux";
import { removeCardFromDeck } from "../actions/deck";

class PlayArea extends Component {
  dealaCard(deck) {
    const cardNum = this.getRandomInt(0, 51);
    const card = deck[cardNum];
    this.props.removeCardFromDeck(cardNum);
    return card;
  }

  shuffleDeck(deck) {
    const arr = [];
    const iterations = deck.length;

    for (let i = 0; i < iterations; i++) {
      const len = deck.length;
      const index = getRandomInt(0, len);

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
          <Hand className="dealerHand" cards={deck.dealerHand} />
        </div>

        <div className="boardZone">
          <Bank val={bank.bank} cName="bank boardBank" />
        </div>

        <div className="actionBarZone">
          <ActionBar />
        </div>

        <div className="playerZone">
          <Bank val={bank.playerBankroll} cName="bank playerBankroll" />
          <Hand className="playerHand" cards={deck.playerHand}/>
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
