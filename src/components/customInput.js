import React, { Fragment } from "react";

const customInput = props => {
  const { input, type, placeholder, classN } = props;
  return (
    <Fragment>
      <input
        {...input}
        className={classN}
        type={type}
        placeholder={placeholder}
      />
    </Fragment>
  );
};

export default customInput;
