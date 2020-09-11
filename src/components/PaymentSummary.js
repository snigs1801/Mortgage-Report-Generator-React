import React from "react";
import { generateSummaryData } from "../utils/utils.js";

// Payment Summary component
const PaymentSummary = ({
  show,
  mortgageAmount,
  mortgageTerm,
  monthlyPayment,
  setShowReport
}) => {
  const summaryClasses = show ? "summaryDisplay" : "summaryHide";
  const summaryData = generateSummaryData(mortgageAmount, mortgageTerm, monthlyPayment);

  return (
    <div className={summaryClasses}>
        <h2>Your Mortgage Report</h2>
        <div className="results">
        {summaryData.map((data, index) =>
            <div key={data.label + index} className="resultRow">
                <div className="resultLabel">{data.label}</div>
                <div className="resultValue">{data.value}</div>
            </div>
        )}
        </div>
    </div>

  );
};

export default PaymentSummary;
