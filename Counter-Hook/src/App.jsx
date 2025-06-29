import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCount] = useState(0)
  if (counter < 0) {
    window.alert('value must be positive');
    counter=0;
    setCount(counter);
  }
  //  let counter=0;
  function addValue() {
    counter = counter + 1;
    // console.log('jhgdjshgjh'+ Math.random());
    
    setCount(counter);
  }
  function removeValue() {
    counter = counter - 1;
    // console.log("jhgdjshgjh" + Math.random());
    setCount(counter);
  }
  return (
    <>
     <h1>Counter Value Is : {counter}</h1>
    <button onClick={addValue}>Add Value : {counter}</button>   
    <button onClick={removeValue}>Remove Value : {counter}</button>          
    </>
  )
  
  

}

export default App
