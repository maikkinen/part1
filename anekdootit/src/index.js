import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({text, handleClick}) => {

  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const randomNumero = () => { 
  const nr = Math.floor(Math.random() * 7);
  return nr
}


const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [votes, setvotes] = useState( Array(7).fill(0) )

    const vote = (selected) => {
      const kopioituvotesLista = [ ...votes]
      kopioituvotesLista[selected] += 1
      setvotes(kopioituvotesLista)
    }

    const handleClick = (value, setValue) => {
      setValue(randomNumero())
    }

    const maxNumber = (votes) => {
      console.log('votes next')
      console.log(votes)
      const max = Math.max(...votes)
      console.log('max next')
      console.log(max)
//      console.log(Math.max([3,4])); //Nan  <------------- tätä sä koitit Mai
//      console.log(Math.max(...[3,4])); //4
      return max
    }

    return (
      <div>
        <h2>Hear this beautiful lil thing about coding.</h2>
        {anecdotes[selected]} 
        <p style={{margin: 0, color: "#20B2AA" }}>has {votes[selected]} votes</p>
        <Button 
          text={"next pls"}
          handleClick={ () => handleClick(selected, setSelected)}
        />
        <Button
          text={"ooh this one is smart"}
          handleClick={ () => vote(selected) }
        />
        <h2>Fellow coders have appreciated this one the most.</h2>
        {anecdotes[ votes.indexOf(Math.max(...votes)) ]} 
        {console.log('max', maxNumber(votes))}
        <p style={{margin: 0, color: "#20B2AA" }}>has {maxNumber(votes)} votes</p> 
        
      </div>
    )
  }
  
  const anecdotes = [
    'If it hurts, do it more often...seems to apply to coding and Norwegian',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Mikä erottaa kokeneen ja kokemattoman Javascript-ohjelmoijan? Kokeneet käyttävät 10-100 kertaa enemmän console.logia.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
