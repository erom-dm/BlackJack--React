import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { validate, renderField } from "./form validation/SyncValidationForm";

class BettingInput extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className={"betting-form"}>
        <Field
          className={"bettingField"}
          name="bet"
          component={renderField}
          type="text"
          label="Amount"
        />
        <button className="bet" type="submit">
          Bet
        </button>
      </form>
    );
  }
}

export default reduxForm({ form: "newBet", validate })(BettingInput);
