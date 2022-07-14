import './App.css';

function TicTacToe() {
  return <div>Hello from React!</div>;
}

function Square() {
  return <div>Square</div>;
}

function Circle() {
  return <div>Circle</div>;
}

function Cross() {
  return <div>Cross</div>;
}


function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        { TicTacToe() }
        { Square() }
        { Circle() }
        { Cross() }
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;