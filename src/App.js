import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h2>serialize xss</h2>
        </div>
      </header>
    </div>
  );
}

export default App;
