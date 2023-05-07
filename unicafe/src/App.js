import { useState } from 'react'

const StatisticLine = (line) => {
  return (
    <tr><td>{line.text}</td><td>{line.value}</td></tr>
  )
}

const Statistics = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = good / all * 100

  if (all > 0) return (
    <div>
    <StatisticLine text="good" value={good} />
    <StatisticLine text="neutral" value={neutral} /> 
    <StatisticLine text="bad" value={bad} /> 
    <StatisticLine text="all" value={all} /> 
    <StatisticLine text="average" value={average} />
    <StatisticLine text="positive" value={positive + " %"} /> 
    </div>
  )

  return (
    <p>
      No feedback given
    </p>
  )
}

const Button = (props) => (
  <button onClick={props.click}>
    {props.text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <p>
        <Button click={increaseGood} text="good" />
        <Button click={increaseNeutral} text="neutral" />
        <Button click={increaseBad} text="bad" />
      </p>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
    
  )
 
}

export default App