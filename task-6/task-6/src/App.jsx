import { useState } from 'react'
import Reactlogo from './assets/react.svg'
import logo from './logo.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://in.linkedin.com/in/sarthak-naik-84a058266" target="_blank">
          <img src={logo} className="logo" alt="logo" style={{ width: '250px', height: '300px', borderRadius: '50%' }} />
        </a>

      </div>
      <h1>Sarthak Pankaj Naik</h1>
      <img src={Reactlogo} alt="react logo" />
      <div className="card">

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
