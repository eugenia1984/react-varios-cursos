import './App.css';

function TicTacToe() {
  return (
    <div className="grid">
      <Square position={0}/>
      <Square position={1}/>
      <Square position={2}/>
      <Square position={3}/>
      <Square position={4}/>
      <Square position={5}/>
      <Square position={6}/>
      <Square position={7}/>
      <Square position={8}/>
    </div>
  );
}

function Square({ position }) {
  return <div className="square">{position}</div>;
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
        { TicTacToe() }
    </div>
  );
}

export default App;