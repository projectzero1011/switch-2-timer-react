import { useState } from 'react'
import switch2Logo from './assets/switch2imgmini.png'
import CountDown from './CountDown'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="title">
        <img src={switch2Logo}></img>
      </div>
      <div class="coming-soon">
        <h3 id="header">Count Down:</h3>
      </div>
      <div class="countdown">
        <CountDown/>
      </div>
    </>
  )
}

export default App
