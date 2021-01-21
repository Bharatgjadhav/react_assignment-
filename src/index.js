import React from "react"
import ReactDom from "react-dom"

const Part=()=>{
  <h1>part0</h1>
}
const Part1=()=>{
  <h2>Part1</h2>
}
const Part2=()=>{
  <h1>Part2</h1>
}

const App=()=>{
  return(
    <div>
      <Part/>
      <Part1/>
      <Part3/>

    </div>
  )
}






ReactDom.render(<App/>,document.getElementById("root"))
