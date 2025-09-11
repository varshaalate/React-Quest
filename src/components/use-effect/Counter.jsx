import React, { useRef, useState } from 'react'

const Counter = () => {
  const [render, setRender] = useState(0); 
  const countRef = useRef(0);

  const onHandleIncrement = () => {
    countRef.current = countRef.current + 1; 
    setRender(render + 1); 
  };

  return (
    <div>
      <h1>Counter using useRef</h1>
      <p>{countRef.current}</p>
      <button onClick={onHandleIncrement}>Increment</button>
    </div>
  )
}

export default Counter;
