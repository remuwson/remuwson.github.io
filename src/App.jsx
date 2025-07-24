import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Test from "../sites/test"; // zakładam że masz taki plik
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState("Counter");

  return (
    <Router>
      <div>
        <h1>Calculator</h1>

        <nav>
          <Link to="/">Main Page</Link> |
          <Link to="/test">Test</Link>
        </nav>

        <Routes>
          <Route path="/test" element={<Test />} />

          <Route path="/" element={
            <main>
              <div id='buttons'>
                <button onClick={() => setCurrentPage("Counter")}>Counter</button>
                <button onClick={() => setCurrentPage("Description")}>Description</button>
              </div>

              {currentPage === "Counter" &&
                <div id='liczby1'>
                  <button id='numbers'>Number: {count}</button>
                  <button onClick={() => setCount(count + 1)}>+1</button>
                  <button onClick={() => setCount(count - 1)}>-1</button>
                  <button onClick={() => setCount(0)}>Reset</button>
                </div>}

              {currentPage === "Description" &&
                <div>
                  <p>Lorem Ipsum is simply dummy text...</p>
                  <p>Lorem Ipsum is simply dummy text...</p>
                  <p>Lorem Ipsum is simply dummy text...</p>
                </div>}
            </main>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
