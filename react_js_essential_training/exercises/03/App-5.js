import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [ emotion, setEmotion ] = useState("happy");
  const [ secondary, setSecondary] = useState("tired");

  useEffect(() => {
    console.log(`It´s ${emotion} right now`)
  }, [emotion]);

  useEffect( () => {
    console.log(`It´s ${secondary} around here`)
  }, [secondary]);

  return (
    <div className="App">
      <h1>Current emotion is {emotion}!</h1>
      <button 
        className="Btn"
        onClick={() => setEmotion("sad")}
      >Sad</button>
      <button 
        className="Btn"
        onClick={() => setEmotion("exited")}
      >Exited</button>
      <h2>Current secondary emotion is {secondary}</h2>
      <button 
        className="Btn"
        onClick={() => setSecondary("grateful")}
      >Grateful</button>
    </div>
  );
}

export default App;