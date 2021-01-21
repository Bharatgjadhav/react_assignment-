import { computeHeadingLevel } from "@testing-library/react"
import React from "react"
import ReactDOM from "react-dom"

/* const App=()=>{
  const course="half stack application development"
  const part1="fundamentals of react"
  const ex1=10
  const part2="using props to pass data"
  const ex2=7
  const part3="state of a component"
  const ex3=14

  return(
    <div>
      <h1>
        {course}
      </h1>
      <p>
        {part1} {ex1}
      </p>
      <p>
        {part2} {ex2}
      </p>
      <p>
        {part3} {ex3}
      </p>
      <p>Number of exercise {ex1+ex2+ex3}</p>
    </div>
  )
}

 */

const App=()=>{
  const course="half stack development"
  const parts=[
   {
    name :"fundamentals of react",
    exercises : 10
  },

  {
    name:"using props to pass data",
    exercise:7
  },

  {
    name:"state of a compopnet ",
    exercise:14
  }
  ]
}
ReactDOM.render(<App/>, document.getElementById("root"))