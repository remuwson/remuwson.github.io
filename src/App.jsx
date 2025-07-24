import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState("Counter");
  return (
    <>

      <h1>Calculator</h1>
      <main>
        <button onClick={() => setCurrentPage("Counter")}>Counter</button>
        <button onClick={() => setCurrentPage("Description")}>Description</button>
        <section className='Wynik'></section>
        {currentPage === "Counter" && 
        <div id='liczby1'>
          <p>Number: {count}</p><br />
          <button onClick={() => setCount(count + 1)}>+1</button>
          <button onClick={() => setCount(count - 1)}>-1</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>}
        {currentPage === "Description" && 
        <div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>}
      </main>

    </>
  )
}

export default App
