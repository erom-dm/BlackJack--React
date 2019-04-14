import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { changeGamePhase } from "../actions/gameState";
import { playerMadeBet } from "../actions/bank";
import BettingInput from "./BetInput";

class ActionBar extends Component {
  state = {
    bet: 0
  };

  submit = value => {
    return this.props.playerMadeBet(value);
  };

  render() {
    const phase = this.props.phase;
    return (
      <div className="actionBar">
        {phase === "pre-deal" ? (
          <BettingInput onSubmit={this.submit} />
        ) : (
          <Fragment>
            <button className="hit">hit</button>
            <button className="fold">fold</button>
          </Fragment>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    phase: state.gameState,
  };
}

const mapDispatchToProps = {
  changePhase: changeGamePhase,
  playerMadeBet
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionBar);
