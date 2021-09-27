import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <div id="like_button_container"></div>
          <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
          <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
          <script src="like_button.js"></script>
          const domContainer = document.querySelector('#like_button_container');
          ReactDOM.render(e(LikeButton), domContainer);
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
