import React, { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = total > 0 ? roundToDecimal((good - bad) / total) : 0;
  const positive = total > 0 ? roundToDecimal((good / total) * 100) : 0;

  if (total === 0) {
    return <div>No feedback given</div>;
  }

  return (
    <table>
      <tbody>
        <StatisticFeedback text="good" value={good} />
        <StatisticFeedback text="neutral" value={neutral} />
        <StatisticFeedback text="bad" value={bad} />
        <StatisticFeedback text="total" value={total} />
        <StatisticFeedback text="average" value={average} />
        <StatisticFeedback text="positive" value={positive + " %"} />
      </tbody>
    </table>
  );
};

const StatisticFeedback = ({ text, value }) => (
  <tr>
    <td>{text + ':'}</td>
    <td>{value}</td>
  </tr>
);

// Round to two decimal places
const roundToDecimal = (num) => Math.round(num * 100 + Number.EPSILON) / 100;


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};



export default App;
