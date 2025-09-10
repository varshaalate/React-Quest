import React, { useState } from 'react'

const Example1 = ({title}) => {
    const [state , setState] = useState("on");

    function onChange(){
        setState((prev)=>(prev === 'on' ? "off" : 'on'))
    }


  return (
    <div>
      <h1>{title}</h1>
      <p>{state}</p>
      <button onClick={onChange}> Button</button>
    </div>
  )
}

export default Example1
