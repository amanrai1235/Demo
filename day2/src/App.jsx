import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Resume from './Resume.jsx'
import Demo from './Demo.jsx'

function App() {
  // const name = "AMAN KUMAR RAI";
  // const course = "B.Tech";
  // const university_roll_no = "2300100100059";
  // const clg = " UCER ";

  // let y = 20;
  // y = 30; // can change the value 

  // const x = 25;
  // // const x = 35; // already declared 

  // var a = 5;
  // var a = 15; // latest wali value print krega 

  // function fun(){
  //   return " fun is called ";
  // }
  // function sum(a,b){
  //   return a+b;
  // }

  function calc(a,b,op){
    if(op=='+'){
      return a+b;
    }
    if(op=='-'){
      return a-b;
    }
    if(op=='*'){
      return a*b;
    }
    else{
      return "invalid";
    }
  }
  return (
    <>
      {/* <Resume></Resume> */}
      {/* <Demo></Demo> */}

      <div>
        <h1> jsx with curly braces </h1>
        {/* <h2> 1. Use variables with jsx </h2> */}
        {/* <h3> My Name :- {name} </h3>
        <h3> My Course :- {course} </h3>
        <h3> My University Roll No :- {university_roll_no} </h3>
        <h3> My College :- {clg} </h3> */}

        {/* <h3> let example 'y' :- {y} </h3>
        <h3> const example 'x' :- {x} </h3>
        <h3> var example 'a' :- {a} </h3>
        <h3>Sum of three no. x , y & a :- {x+y+a} </h3> */}

        {/* <h2> 2. Use Functions with jsx </h2>
        <h3> Example of Function :- {fun()} </h3>
        <h3> Example of Paramiterized function :- {sum(12,3)} </h3> */}

        <h3> Sum :- {calc(10, 20, "+")}</h3>
        <h3> Differnce :- {calc(50, 30, "-")}</h3>
        <h3> Multiplication :- {calc(5, 2, "*")}</h3>
      </div>
    </>
  )
}

export default App
