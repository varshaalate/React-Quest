import React, { createContext, useContext, useState } from 'react'
import Header from './Header';
export const LanguageContext  = createContext()

const Language = () => {

    const [language , setLanguage] = useState("English");

    const onChange = () =>{
        setLanguage((prev) => (prev === "English" ? "Mararthi" : "English"))
    }

  return (
    <div>
      <h1>Use Context For Language</h1>
      <LanguageContext.Provider value={language}>
        <p>{language}</p>
        <button onClick={onChange}>Change the Language</button>
        <Header/>
      </LanguageContext.Provider>
    </div>
  )
}

export default Language
