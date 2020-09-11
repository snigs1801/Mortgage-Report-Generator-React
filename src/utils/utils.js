export const calculateMonthlyPayment = (
  mortgageAmount,
  interestRate,
  downPayment,
  mortgageTerm
) =>
  roundNumber(
    calculatePrinciple(mortgageAmount, interestRate, downPayment, mortgageTerm) 
  );

export const calculatePrinciple = (
  mortgageAmount,
  interestRate,
  downPayment,
  mortgageTerm
) => {
  const monthlyRate = interestRate / 100 / 12;
  const payments = 12 * mortgageTerm;

  const x = Math.pow(1 + monthlyRate, payments);
  return roundNumber(
    ((mortgageAmount - (mortgageAmount * downPayment) / 100) * x * monthlyRate) /
      (x - 1)
  );
};
export const roundNumber = num => {
  return Math.round(num * 100) / 100;
};

export const generateSummaryData = (
  mortgageAmount,
  mortgageTerm,
  monthlyPayment
) => {
  const data = [];
  const numberOfPayments = 12 * mortgageTerm ;
  const interestPaid = roundNumber(numberOfPayments * monthlyPayment - mortgageAmount) ;
  const total = roundNumber(numberOfPayments * monthlyPayment);
  data.push({
    label: "Mortgage Amount",
    value: mortgageAmount
  });
  if (numberOfPayments !== 0) {
    data.push({ label: "Number Of Payments:", value: numberOfPayments });
  }
  if (monthlyPayment !== 0) {
    data.push({ label: "Mortgage Payment:", value: monthlyPayment });
  }
  if (interestPaid !== 0) {
     data.push({ label: "Interest Payments:", value: interestPaid });
  }
  if (total !== 0) {
     data.push({ label: "Total Cost:", value: total });
  }

  return data;
};
