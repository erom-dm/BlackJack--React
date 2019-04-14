import React from "react";

export const validate = (values, props) => {
  const errors = {};

  // console.log("<<< VALIDATE PROPS >>>")
  // console.log(props)

  if (!values.bet) {
    errors.bet = "Required";
  } else if (isNaN(Number(values.bet))) {
    errors.bet = "Must be a number";
  } else if (Number(values.bet) <= 0) {
    errors.bet = "Must be a positive number";
  } else if (parseInt(Number(values.bet)) !== Number(values.bet)) {
    errors.bet = "Must be an integer";
  } else if (Number(values.bet > props.playerBR)) {
    errors.bet = "Can't bet more than your bankroll";
  }

  return errors;
};

export const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <div className="bet-input-area">
      <input
        {...input}
        placeholder={label}
        type={type}
        className="bet-input-field"
      />
      {touched &&
        ((error && <span className="bet-validation-error">{error}</span>) ||
          (warning && (
            <span className="bet-validation-warning">{warning} </span>
          )))}
    </div>
  </div>
);
