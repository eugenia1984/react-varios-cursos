import './App.css';
import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />  
      <Footer />  
    </div>
  );
}

export default App;
