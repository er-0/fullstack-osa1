const Header = (header) => {
  return <h1>{header.course}</h1>
}

const Part = (props) => {
  return (
    <>
    <p>{props.part} {props.exercise}</p>
    </>
  )
}

const Content = (content) => {
  console.log(content)
  return (
    <div>
      <Part part={content.parts[0].name} exercise={content.parts[0].exercises} />
      <Part part={content.parts[1].name} exercise={content.parts[1].exercises} />
      <Part part={content.parts[2].name} exercise={content.parts[2].exercises} />
    </div>  
  )
}

const Total = (props) => {
  return <div>
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  </div>
}
  
  
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
      <div>
        <Header course={course.name} />
        <Content parts={course.parts}/>
        <Total parts={course.parts} />
      </div>
  )
}
  

export default App