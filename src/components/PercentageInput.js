import React from "react";

const PercentageInput = ({ labelName, targetName, targetValue, setInterestRate }) => {

  // Percentage Input component
  return (
    <div className="input-group">
      <label>{labelName}</label>
      <div className="input-box">
        <input
          className="right-align"
          type="number"
          name={targetName}
          value={targetValue}
          placeholder="Mortgage Rate"
          onChange={e => setInterestRate(e.target.value)}
        />
        <div className="add-on left-align">%</div>
      </div>
    </div>
  );
};

export default PercentageInput;
