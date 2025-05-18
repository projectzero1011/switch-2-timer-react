import switch2Logo from './assets/switch2imgmini.png'
import CountDown from './CountDown'
import './App.css'

function App() {
  const launchDate = "06/05/2025 12:01 AM";

  return (
    <>
      <div className="title">
        <img src={switch2Logo}></img>
      </div>
      <div className="coming-soon">
        <h3 id="header">Count Down:</h3>
      </div>
      <div id="countdown">
        <CountDown launch={launchDate}/>
      </div>
    </>
  )
}

export default App
