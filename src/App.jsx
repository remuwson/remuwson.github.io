import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return (
    <>

      <h1>Calculator</h1>
      <main>
        <section className='Wynik'></section>
        <div id='liczby1'>
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
        <div id='liczby2'>
          <button>4</button>
          <button>5</button>
          <button>6</button>
        </div>
        <div id='liczby3'>
          <button>7</button>
          <button>8</button>
          <button>9</button>
        </div>
        <div id='wynik'>
          <button>0</button>
          <button>Calculate</button>
        </div>
      </main>
      
    </>
  )
}

export default App
