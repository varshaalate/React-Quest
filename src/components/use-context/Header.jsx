import React, { useContext } from 'react'
import { LanguageContext } from './Language'

const Header = () => {
    const contex = useContext(LanguageContext)
  return (
    <div>
        <h4>Selected Language in header is  {contex}</h4>
    </div>
  )
}

export default Header
