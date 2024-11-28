export default function Form({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
  onChange,
}) {
  return (
    <form className="input-group">
      <div id="user-input">
        {" "}
        <label htmlFor="initialInvestment">Initial investment</label>
        <input
          type="number"
          name="initialInvestment"
          value={initialInvestment}
          onChange={onChange}
        ></input>
      </div>
      <div id="user-input">
        {" "}
        <label htmlFor="annualInvestment">Annual investment</label>
        <input
          type="number"
          name="annualInvestment"
          value={annualInvestment}
          onChange={onChange}
        ></input>
      </div>
      <div id="user-input">
        {" "}
        <label htmlFor="expectedReturn">Expected return</label>
        <input
          type="number"
          name="expectedReturn"
          value={expectedReturn}
          onChange={onChange}
        ></input>
      </div>
      <div id="user-input">
        {" "}
        <label htmlFor="duration">Duration</label>
        <input
          type="number"
          name="duration"
          min={0}
          value={duration}
          onChange={onChange}
        ></input>
      </div>
    </form>
  );
}
