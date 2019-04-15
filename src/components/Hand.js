import React, { Component } from "react";
import Card from "./Card";

class Hand extends Component {

  render() {
    return (
      <div className="hand">
        {
          this.props.cards.map((card) => {
            return <Card value={card.fv} headsUp={card.hu} key={card.id}/>
          })
        }
      </div>
    );
  }
}

export default Hand;
