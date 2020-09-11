import React, { useState, Fragment } from "react";
import AmountInput from "./AmountInput";
import PercentageInput from "./PercentageInput";
import AmotizationOption from "./AmotizationOption";
import PaymentSummary from "./PaymentSummary";
import { calculateMonthlyPayment } from "../utils/utils.js";

const MortgageForm = () => {

  // set initial state values (react hooks methods used)

  const [mortgageAmount, setMortgageAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [mortgageTerm, setMortgageTerm] = useState('');
  const [showSummary, setShowSummary] = useState(false);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  // enables and disables the calculate button 
  const ifSubmitDisabled =
    mortgageAmount === '' ||
    mortgageTerm === '' ||
    downPayment === '' ||
    interestRate === ''
  ;

  // handles the calculate button click
  const calculate = e => {
    e.preventDefault();
    setMonthlyPayment(
      calculateMonthlyPayment(
        mortgageAmount,
        interestRate,
        downPayment,
        mortgageTerm
      )
    );

    // show summary set is set to 'true'
    setShowSummary(true);
  };

  // returns the entire Mortgage Form
  // Used React Fragment Pattern to return multiple elements
  // The payment summary is 'hidden' by default and is visible when form is submitted

  return (
    <Fragment>
      <form className="form-group" onSubmit={calculate}>
        <AmountInput
          labelName="Mortgage Amount"
          targetName="mortgageAmount"
          targetValue={mortgageAmount}
          setMortgageAmount={setMortgageAmount}
        />
        <PercentageInput
          labelName="Interest Rate"
          targetName="interestRate"
          targetValue={interestRate}
          setInterestRate={setInterestRate}
        />
        <div className="input-group">
          <label>Down Payment</label>
          <div className="input-box">
            <input
              type="number"
              name="downPayment"
              className="right-flat"
              value={downPayment}
              placeholder="DownPayment Rate"
              onChange={e => setDownPayment(e.target.value)}
            />
            <div className="add-on left-align">%</div>
          </div>
        </div>
        <div className="input-group">
          <label>Amortization Period</label>
          <div className="radio-group">
            <AmotizationOption
              mortgageTerm={mortgageTerm}
              targetValue="5"
              setMortgageTerm={setMortgageTerm}
            />
            <AmotizationOption
              mortgageTerm={mortgageTerm}
              targetValue="10"
              setMortgageTerm={setMortgageTerm}
            />
            <AmotizationOption
              mortgageTerm={mortgageTerm}
              targetValue="15"
              setMortgageTerm={setMortgageTerm}
            />
            <AmotizationOption
              mortgageTerm={mortgageTerm}
              targetValue="20"
              setMortgageTerm={setMortgageTerm}
            />
            <AmotizationOption
              mortgageTerm={mortgageTerm}
              targetValue="25"
              setMortgageTerm={setMortgageTerm}
            />
          </div>
        </div>
        <input
          type="submit"
          value="Calculate"
          className="calculate-btn"
          disabled={ifSubmitDisabled}
        />
      </form>

      <PaymentSummary
        show={showSummary}
        mortgageAmount={mortgageAmount}
        interestRate={interestRate}
        downPayment={downPayment}
        mortgageTerm={mortgageTerm}
        monthlyPayment={monthlyPayment}
        setShowSummary={setShowSummary}
      />
    </Fragment>
  );
};

export default MortgageForm;
