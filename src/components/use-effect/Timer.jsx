import React, { useEffect, useState } from 'react'

const Timer = () => {

    const [second , setSecond] = useState(0);

   useEffect(()=>{
       const interval =  setInterval(()=>setSecond(s=>s+1),1000)
       return ()=>clearInterval(interval)

    },[]);

    // afetr comma  these is dependancy array i will tell the how many times it will render
    //[] it will render only  first time  Run this effect only once, when the component first mounts.
    //itf it is not given then useEffect runs after every render.Each render sets up a new interval.The cleanup (clearInterval(interval)) runs before the next effect, so technically the old interval gets removed, and a new one starts.
  return (
    <div>
        <h1>Timer using Use Effect</h1>
      <p>Timer  : {second}</p>
    </div>
  )
}

export default Timer
