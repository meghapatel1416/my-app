import React, { useState } from 'react'

export const Counter = () => {
    let [counter,setcounter] = useState(0);

    const incr = () => {
        setcounter(counter + 1);
        console.log(counter)

    }
    const decr = () => {
      setcounter(counter - 1);
      console.log(counter)
    }
    const multi = () => {
      setcounter(counter * 2);
      console.log(counter)
    }
  return (
    
    <div>{counter}
    <button onClick={incr}>+</button>
    <button onClick={decr}>-</button>
    <button onClick={multi}>*</button>
    </div>
  )
}
