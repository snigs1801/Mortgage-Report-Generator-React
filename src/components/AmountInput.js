import React from "react";

const AmountInput = ({ labelName, targetName, targetValue, setMortgageAmount }) => {

  const regex = /^[0-9]*$/;
  
  // mortgage amount input component
  return (
    <div className="input-group">
      <label>{labelName}</label>
      <div className="input-box">
        <div className="add-on right-align">CAD</div>
        <input
          type="text"
          name={targetName}
          className="left-align"
          value={targetValue}
          placeholder="Mortgae Amount"
          onChange={e => (e.target.value !== '' && regex.test(e.target.value)) ? setMortgageAmount(e.target.value) : setMortgageAmount('') }
        />
      </div>
    </div>
  );
};

export default AmountInput;