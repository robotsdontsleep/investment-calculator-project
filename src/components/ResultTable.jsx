import { calculateInvestmentResults, formatter } from "../util/investment";
export default function ResultTable({ data }) {
  const results = calculateInvestmentResults(data);

  const initialInvestment =
    results.length !== 0 &&
    results[0].valueEndOfYear -
      results[0].interest -
      results[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results &&
          results.map((year) => {
            const totalInterest =
              year.valueEndOfYear -
              year.annualInvestment * year.year -
              initialInvestment;
            return (
              <tr key={year.year}>
                <td>{year.year}</td>
                <td>{formatter.format(year.valueEndOfYear)}</td>
                <td>{formatter.format(year.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(year.annualInvestment)}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
