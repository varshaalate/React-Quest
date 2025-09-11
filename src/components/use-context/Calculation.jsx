import React, { createContext, useState } from 'react'
import IncremantDecrement from './IncremantDecrement';
export const MyContext = createContext()

const Calculation = () => {

    const [count, setCount]=useState(0);

    const onHandleIncremet=()=>{
        setCount((prev)=>prev+1)
    }

    const onHandleDecremet =() =>{
        setCount(prev => prev-1)
    }

  return (
    <div>
        <h1>Use context Incremet and Decrement</h1>
        <button onClick={onHandleIncremet}>Increment</button>
        <button onClick={onHandleDecremet}>Decrement</button>
        <MyContext.Provider value={{count , onHandleDecremet ,onHandleIncremet}}>
            <IncremantDecrement/>
        </MyContext.Provider>

    </div>
  )
}

export default Calculation
