import { useState } from 'react'
import { useEffect } from 'react';
import React from 'react'
import './App.css'

function App() {
  const [num, setNum] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(()=>{
    alert('I am clicked');
  }, [num])
  return (
    <div className="App">
      <p>useEffect is a hook in React that allows you to perform side effects from within a functional component . It lets you synchronize a component with an external system. useeffect always expect a function</p>
      <p>useState is a built-in function that comes with the React library . It allows you to add state to a functional component .

        The useState hook returns an array with two values: the current state and a function to update it . The hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called .</p>
      <h3>Num:{num}</h3>
      <h3>Count:{count}</h3>
      <button onClick={() => { setNum(num + 1) }}>Num +</button> | <button onClick={() => { setCount(count - 1) }}>Count -</button><br></br><br></br>
      <button onClick={() => { setNum(num - 1) }}>Num -</button> | <button onClick={() => { setCount(count + 1) }}>Count +</button>
      <p>After Every render useeffect will active and alert will come</p>
      <p>Click on num buttons alert will come and click on count alert will not come</p>
    </div>
  )
}

export default App
