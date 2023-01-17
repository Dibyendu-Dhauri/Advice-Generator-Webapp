import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [advice, setAdvide] = useState('');

  useEffect(()=> {
    quoteGenerate()
  
  },[])
  
    const  quoteGenerate = () => {
      axios
        .get("https://api.adviceslip.com/advice")
        .then((response) => {
          // console.log(response.data.slip.advice);
          setAdvide(response.data.slip.advice);
        })
        .catch();
    }

  return (
    <div className="App">
      <div className="card">
        <h1 className="heading">{advice}</h1>
      <button onClick={quoteGenerate} className="button">
        <span>GIVE ME ADVICE</span>
      </button>


      </div>
      
    </div>
  );
}

export default App;
