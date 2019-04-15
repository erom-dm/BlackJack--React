import React, { Component } from "react";
import "./component-style.scss";
import Hand from "./Hand";
import Bank from "./Bank";
import ActionBar from "./ActionBar";
import { connect } from "react-redux";
import { turnACard } from "../actions/deck";
import { CHECKING_DEALER_BJ } from "../util/gamePhases";

class PlayArea extends Component {
  /*dealaCard(deck) {
    const cardNum = this.getRandomInt(0, 51);
    const card = deck[cardNum];
    this.props.removeCardFromDeck(cardNum);
    return card;
  }*/

  /*shuffleDeck(deck) {
    const arr = [];
    const iterations = deck.length;

    for (let i = 0; i < iterations; i++) {
      const len = deck.length;
      const index = getRandomInt(0, len);

      arr.push(deck[index]);
      deck.splice(index, 1);
    }
    return arr;
  }*/

  static checkDealerBlackJack(dealerHand, gamePhase){
    if (gamePhase === CHECKING_DEALER_BJ){
      if (dealerHand[0].hu === true && dealerHand[0].val >= 10){
        console.log('BJ check initiated --------------->>>>>');
        if (dealerHand[0].val + dealerHand[1].val === 21){
          console.log('!!!DEALER HAS BJ!!!');
          turnACard(dealerHand[1].id, 'dealer')
        }
      }
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    PlayArea.checkDealerBlackJack(this.props.state.deck.dealerHand, this.props.state.gameState)
  }

  render() {
    const { bank, deck, gameState} = this.props.state;

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
    turnACard,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayArea);
