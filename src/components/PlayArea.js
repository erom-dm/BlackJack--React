import React, { Component } from "react";
import "./component-style.scss";
import Hand from "./Hand";
import Bank from "./Bank";
import ActionBar from "./ActionBar";
import { connect } from "react-redux";
import { turnACard } from "../actions/deck";
import { dealerBlackJack } from "../actions/gameState";
import * as Phase from "../util/gamePhases";

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

  checkDealerBlackJack(dealerHand){
    const { turnACard, dealerBlackJack } = this.props;
    if (dealerHand[0].hu === true && dealerHand[0].val >= 10){
      console.log('BJ check initiated --------------->>>>>');
      if (dealerHand[0].val + dealerHand[1].val === 21){
        console.log('!!!DEALER HAS BJ!!!');
        turnACard(dealerHand[1].id, 'dealer');
        dealerBlackJack();
      }
    }
  }

  resolveRound(){

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { dealerHand, gameState } = this.props.state;
    const currentPhase = gameState.phase;

    switch (currentPhase){
      case Phase.CHECKING_DEALER_BJ:
        this.checkDealerBlackJack(dealerHand);
        if (gameState.dealer_bj){
          this.resolveRound();
        }
        return;
      case Phase.DEALER_PHASE:

        return;
      default:
        return;
    }
  }

  render() {
    const { bank, deck } = this.props.state;

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
    dealerHand: state.deck.dealerHand,
    state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    turnACard: dispatch(turnACard()),
    dealerBlackJack: dispatch(dealerBlackJack()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayArea);
