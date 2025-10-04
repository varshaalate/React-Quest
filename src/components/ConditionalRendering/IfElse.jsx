import React from 'react'

const IfElse = () => {
    const isLoggedIn  = false
  return (
    <div>
        <h1>Conditional Rendering</h1>

        <div>
            <h3>If Else</h3>
            <h6>{isLoggedIn ? 'Welcome User' : 'Please Login'}</h6>
        </div>
      
    </div>
  )
}

export default IfElse
