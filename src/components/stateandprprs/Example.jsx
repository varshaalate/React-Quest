import React, { useState } from 'react'

const Example = ({title}) => {
    const [count , setCount] = useState(0)
  return (
    <div>
        <h1>{title}</h1>
        <div>{count}</div>
      <button onClick={()=>setCount(count+1)}> Increment</button>
      <button onClick={()=>setCount(count-1)}>Decremet</button>
    </div>
  )
}

export default Example
