import { useState } from 'react'
import './App.css'
import Example from './components/stateandprprs/Example'
import Example1 from './components/stateandprprs/Example1'
import Example2 from './components/use-context/Example2'
import Language from './components/use-context/Language'
import Calculation from './components/use-context/Calculation'
import Focus from './components/use-effect/Focus'
import Counter from './components/use-effect/Counter'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Example title = "Calculator"/>
      <Example1 title= "Button On and OFF"/>
      <Example2/>
      <Language/>
      <Calculation/>
      <Focus/>
      <Counter/>
      
    </>
  )
}

export default App
