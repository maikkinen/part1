import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Header = ( props ) => {
  
  return (
    <h1> {props.text} </h1>
  )
}

const Button = ({ text, teeJotain }) => {
  return (
    <button style={{color: "blue", backgroundColor: "yellow", border: "solid", marginBottom: 10}} onClick={ teeJotain }>
      { text }
    </button>
  )    
}

// OOH IM SOO PROUD OF THIS <3 <3

const StatusText = ({text, number}) => {
  return (
    <p style={{marginTop: 0, marginBottom: 0}}>{text} : {number}</p>
  )
}

const Statistics = ({text1, text2, text3, nr1, nr2, nr3}) => {

  const sum = (a, b, c) => a+b+c
  const avg = (a, b, c) => ( a * 1 + b * 0 + c * (-1) ) / (a+b+c)
  const positive = (a, b, c) => a / (a + b + c) * 100
  const summa = sum(nr1,nr2,nr3)

  
  if ( summa > 0) {
    return (
        //<h2>statistics</h2>
        <table>
        <tbody>
          <tr>
            <td><StatusText text={"good"} number={nr1}/></td>
          </tr>
          <tr>           
            <td><StatusText text={"neutral"} number={nr2}/></td>
          </tr>
          <tr>
           <td><StatusText text={"bad"} number={nr3}/></td>
          </tr>
          <tr>
            <td>total : {sum(nr1, nr2, nr3)}</td>
          </tr>
          <tr>
            <td>average : {avg(nr1, nr2, nr3)}</td>
          </tr>
          <tr>
            <td>positive : {positive(nr1, nr2, nr3)} %</td>
          </tr>
        </tbody>
      
      </table>
    )
  }
  return (
    <div>
      <p>No feedback given yet.</p>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const giveFeedback = "give feedback"

  const handleClickAbastraction = (value, setValue) => {
    setValue(value + 1)
  }

  return (
    <div>
      <Header text={giveFeedback} />
      <Button text={"good"} teeJotain = {() => handleClickAbastraction(good, setGood)} />
      <Button text={"neutral"} teeJotain = {() => handleClickAbastraction(neutral, setNeutral)} />
      <Button text={"bad"} teeJotain = {() => handleClickAbastraction(bad, setBad)} />
      <Statistics text1={"good"} text2={"neutral"} text3={"bad"} nr1={good} nr2={neutral} nr3={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)