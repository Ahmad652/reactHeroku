import logo from './logo.svg';
import './App.css';


function App() {
  const clicks = () => {
    window.top.dummy();
    window.postMessage("child frame", "*");
  }
  
  const clicks = () => {
    window.postMessage("child frame", "*");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={clicks}>
          click here
        </button>
        <button onClick={clicks2}>
          click here2
        </button>
      </header>
    </div>
  );
}

export default App;
