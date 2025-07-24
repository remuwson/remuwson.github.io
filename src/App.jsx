import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [One, setOne] = useState(1)
  return (
    <>

      <h1>Calculator</h1>
      <main>
        <section className='Wynik'></section>
        <div id='liczby1'>
          <button>Count</button>
        </div>
      </main>

    </>
  )
}

export default App
