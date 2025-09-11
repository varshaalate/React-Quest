import {createContext, useState } from 'react'
import Child from './Child';
export const ThemeContext = createContext(); 

const Example2 = () => {

const [theme , setTheme] = useState('light'); 

const toggleTheme = () =>{
    setTheme((prev) => (prev=== 'light' ? "dark" : 'light'))
}
  return (
        <ThemeContext.Provider value={theme}>
            <div>
                <h1>Use Context Toggle theme</h1>
                <p>{theme}</p>
                <button onClick={toggleTheme}>Toggle</button>
                <Child/>
            </div>

        </ThemeContext.Provider>
      
  )
}

export default Example2
