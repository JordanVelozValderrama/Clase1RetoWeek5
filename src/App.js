import logo from './logo.svg';
import './App.css';

function App() {
  const actionobj = event => document.getElementById('result').innerText=document.getElementById('txt_fullname').value;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Full Name
        </p>
        <input id="txt_fullname" onKeyUp={actionobj} type="text"/>
        <label id="result"></label>
      </header>
    </div>
  );
}

export default App;
