import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Resume from './Resume.jsx'
import Demo from './Demo.jsx'

function App() {
  const [data,setdata] = useState("My Name is");
  const fun = () =>{
    setdata("AMAN KUMAR RAI")
  }

  return (
    <>
      <h2> {data} </h2>
      <button onClick = {()=>fun()}> Click </button>
    </>
  )
}

export default App
