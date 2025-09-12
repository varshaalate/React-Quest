import React, { useEffect, useState } from 'react'

const CounterUseEcceft = () => {

  const [count ,setCount] = useState(0);
  useEffect(()=>{
    console.log("count" , count);
  })
  return (
    <div>
        <h1>Use Effect Counter</h1>
        <button onClick={()=>setCount(prev=>prev+1)}>Click Me</button>
      
    </div>
  )
}

export default CounterUseEcceft
