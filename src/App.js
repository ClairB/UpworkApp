import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Second React Push
        </a>
      </header>
    </div>
  );
}

export default App;

const element = /*#__PURE__*/React.createElement("h1", null, "Hello, world!");
const container = document.getElementById('root');
ReactDOM.render(element, container);


