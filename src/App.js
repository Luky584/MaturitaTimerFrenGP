import logo from './logo.svg';
import './App.css';
import BarContainer from "./components/BarContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Maturita Timer</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <BarContainer></BarContainer>
      </header>
    </div>
  );
}

export default App;
