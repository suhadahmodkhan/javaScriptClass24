import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from  "./Home"
import Task from './Task'
import Info from './Info'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>Vite + React</h1>
      <Home name="suhad" />
     <Task name="html" isDone={"true"}/>
     <Task name="css" isDone={"true"}/>
     <Task name="js" isDone={"true"}/>
     <Task name="react" isDone={"running"}/>
     <Task name="authentication" isDone={"false"}/>
     <Task name="backend" isDone={"false"}/> */}
     <Info/>
    </>
  )
}

export default App
