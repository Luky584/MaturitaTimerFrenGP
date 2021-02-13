import logo from './logo.svg';
import frengp_logo from './frengp_logo.png';
import './App.css';
import BarContainer from "./components/BarContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Maturita Timer</h1>
        <BarContainer></BarContainer>

        <p className="copyright">
          <img src={frengp_logo} className="frengp-logo" alt="logo"/> FrenGP.cz
          <br/>
          Made with React<img src={logo} className="App-logo" alt="logo" />
          <br/>
          © Lukáš Lanča 2021
        </p>
      </header>
    </div>
  );
}

export default App;
