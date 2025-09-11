import React, { useContext } from 'react'
import { ThemeContext } from './Example2';

const Child = () => {
    const theme = useContext(ThemeContext)
  return (
    <div>
      <h2>Child also knows theme is: {theme}</h2>
    </div>
  )
}

export default Child
