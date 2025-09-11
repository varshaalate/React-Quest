import React, { useContext } from 'react'
import { MyContext } from './Calculation'

const IncremantDecrement = () => {

    const {count , onHandleIncremet ,onHandleDecremet} = useContext(MyContext);

  return (
    <div>
        <p>Count: {count}</p>
      <button onClick={onHandleIncremet}>+1</button>
      <button onClick={onHandleDecremet}>-1</button>
    </div>
  )
}

export default IncremantDecrement
