import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <nav>
            <img src={logo} className="App-logo" alt="logo" />
          </nav>
        </header>
        <div>
          <h1>Fun facts about React</h1>
          <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, inclding mobile apps</li>
          </ul>
        </div>
        <footer>
          <p>2022 Maria Eugenia Costa development. All rights reserved.</p>
        </footer>
    </div>
  );
}

export default App;
