import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import FuncComponent from './components/FunComponent';

function App() {
  return (
    <div className="App">
      <h1>Hello React App</h1>
      <Hello></Hello>
      <FuncComponent/>
    </div>
  );
}

export default App;
