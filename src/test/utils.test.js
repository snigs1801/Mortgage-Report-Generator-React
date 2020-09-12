import { calculateMonthlyPayment, generateSummaryData } from "../utils/utils.js";

test('calculatePrinciple', () => {
    expect(calculateMonthlyPayment(100000, 5, 20, 20)).toBe(527.96);
});

test('calculatePrinciple', () => {
	const data = generateSummaryData(100000,20,527.96)
    expect(data.length).toBe(5);
});
