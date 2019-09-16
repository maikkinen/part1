import React from 'react';
import ReactDOM from 'react-dom';

const Header = ( props ) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

const Part = ({text, nr}) => {
    return (
        <div>
            <p>{text} {nr}</p>
        </div>
    )

} 


const Course = ( {courseParts} ) => {
    // console.log(content)
    return (
        <div>
          <Part text={courseParts[0].name} nr={courseParts[0].exercises}/>
          <Part text={courseParts[1].name} nr={courseParts[1].exercises}/>
          <Part text={courseParts[2].name} nr={courseParts[2].exercises}/>
        </div>
    )
}

const Total = ( props ) => {
    return (
        <div>
            <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
        </div>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a componentinus maximus',
                exercises: 14,
                id: 3
            }
        ]
    }
    
    return (
        <div>
            <Header course={course.name} />
            <Course courseParts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();