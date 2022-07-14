import './App.css';

function TicTacToe() {
  return (
    <div className="grid">
      <Square position="0"/>
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
}

function Square() {
  return <div className="square">Square</div>;
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