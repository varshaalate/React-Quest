import React, { useRef } from 'react'

const Focus = () => {
    const inputRef = useRef(null)

   const handleClick = () =>{
        inputRef.current.focus()
    }

  return (
    <div>
        <h1>Set Foucus Using Use Effect</h1>
      <input type="text" ref={inputRef} placeholder='Click below button to focus' />
      <button onClick={handleClick}>click me</button>
    </div>
  )
}

export default Focus
