import React, { useState } from 'react'

function Counter() {

  const [count,setCount] = useState(0)

  const increment=()=>{
    setCount(count + 1)
    console.log(count)
  }

  const decrement = ()=>{
    setCount(count -1)

  }

  const reset=()=>{
    setCount( 0)
  }

  return (
    <>
    <div>
      <button onClick={increment}>+</button>
      <h1>counter:{count}</h1>
      <button onClick={decrement}>-</button>

      
    </div>
    <div>
      <button onClick={reset}>Reset</button>
      </div>
    </>
  )
}

export default Counter
