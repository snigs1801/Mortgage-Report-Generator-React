import React from "react";

// radio button component
const AmotizationOption = ({ mortgageTerm, targetValue, setMortgageTerm }) => {
  return (
    <label
      className={mortgageTerm === Number(targetValue) ? "selected-input" : null}
    >
      <input
        type="radio"
        name="mortgageTerm"
        value={targetValue}
        onChange={e => setMortgageTerm(Number(e.target.value))}
      />
      {targetValue}
    </label>
  );
};

export default AmotizationOption;
