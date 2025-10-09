import { useState } from 'react'
import './App.css'
import Example from './components/stateandprprs/Example'
import Example1 from './components/stateandprprs/Example1'
import Example2 from './components/use-context/Example2'
import Language from './components/use-context/Language'
import Calculation from './components/use-context/Calculation'
import Counter from './components/use-ref/Counter'
import Focus from './components/use-ref/Focus'
import CounterUseEcceft from './components/use-effect/CounterUseEcceft'
import Timer from './components/use-effect/Timer'
import RoutesExapmple from './components/routes/RoutesExapmple'
import Home from './components/routes/home'
import EventHandling from './components/enenthandling/EventHandling'
import IfElse from './components/ConditionalRendering/ifElse'
import ListAndKeys from './components/Listandkeys/ListAndKeys'
import ListandKeysObject from './components/Listandkeys/ListandKeysObject'
import Component from './components/Listandkeys/Component'
import User from './components/Listandkeys/User'
import Uncontrolled from './components/FormsAndUncontrolled/Uncontrolled'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <RoutesExapmple/>
      <Example title = "Calculator"/>
      <Example1 title= "Button On and OFF"/>
      <Example2/>
      <Language/>
      <Calculation/>
      <Focus/>
      <Counter/>
      <CounterUseEcceft/>
      <Timer/>
      <Home/> */}
      {/* <EventHandling/> */}
      {/* <IfElse/> */}
      {/* <ListAndKeys/> */}
      {/* <ListandKeysObject/> */}
      {/* <Component/> */}
      <Uncontrolled/>
      
    </>
  )
}

export default App
