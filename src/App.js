import logo from './logo.svg';
import './App.css';
import BarContainer from "./components/BarContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Maturita Timer</h1>
        <BarContainer></BarContainer>

        <p className="copyright">
          Made with React<img src={logo} className="App-logo" alt="logo" />
          <br/>
          © Lukáš Lanča 2021
        </p>
      </header>
    </div>
  );
}

export default App;
