import React, {useState} from "react"
import ReactDOM from "react-dom"
/* 
const Hello = (props) => {
    const bornYear = () => {
      const yearNow = new Date().getFullYear()
      return yearNow - props.age
    }
    return (
      <div>
        <p>
          Hello {props.name}, you are {props.age} years old
        </p>
        <p>So you were probably born in {bornYear()}</p>
      </div>
    )
    }
const App = () => {
  const name = 'Peter'
  const age = 10
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Hello name="vasant" age={24}/>
      <Hello name="vishwanath" age={23}/>
    </div>
  )
} */ 
  //const Hello = (props) => {
  /* const name = props.name
  const age = props.age */
  //const {name,age}=props// destructuring 

  /* const bornYear = () => new Date().getFullYear() - age */
 /*  const bornYear=()=>{return new Date().getFullYear()- age}

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
} */
/* const Hello = ({ name,age})=>{
const bornYear=()=>new Date().getFullYear -age
return(
  <div>
  <p> Hello {name}, you are {age} years old </p>
  <p>So you were propabaly born in {bornYear()}</p>
  </div>
)
}
const App = () => {
  const name = 'Peter'
  const age = 10
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Hello name="vasant" age={24}/>
      <Hello name="adarsh" age={23}/>
    </div>
  )
  }
ReactDOM.render(<App/>, document.getElementById("root")) */
const App=()=>{
  const [counter,setCounter]=useState(0)
  setTimeout(
    ()=>setCounter(counter+1),100
  )
  return (
    <div>{counter}</div>
  )

}
ReactDOM.render(<App/>,document.getElementById("root"))