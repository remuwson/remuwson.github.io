import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>

      <h1>Calculator</h1>
      <main>
        <section className='Wynik'></section>
        <div id='liczby1'>
          <p>Number: {count}</p><br />
          <button onClick={() => setCount(count + 1)}>+1</button>
          <button onClick={() => setCount(count - 1)}>-1</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </main>

    </>
  )
}

export default App
