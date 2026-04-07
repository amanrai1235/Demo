import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Resume from './Resume.jsx'
import Demo from './Demo.jsx'

function App() {
  const fruit=(name)=>{
    alert(name)
  }
 
  return (
    <>
      <h1> Event Handling </h1>
      <button onClick={()=>fruit("Apple")}> Apple </button>
      <br/> <br/>
      <button onClick={()=>fruit("Banana")}> Banana </button>
    </>
  )
}

export default App
