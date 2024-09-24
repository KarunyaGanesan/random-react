import { useState } from "react";

function App() {
    const [randomNumber, setRandomNumber] = useState(0);
  
    const generateRandomNumber = () => {
      const number = Math.floor(Math.random() * 900 )+100; 
      setRandomNumber(number);
    };
  
    return (
      <div className="app">
        <div className="container">
          <h1 className="title">Random Number Generator</h1>
          <p className="number-display animate">{randomNumber}</p>
          <button className="generate-btn" onClick={generateRandomNumber}>
            Generate Number
          </button>
        </div>
      </div>
    );
  }
  
  export default App;