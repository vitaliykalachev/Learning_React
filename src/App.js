import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import FuncComponent from './components/FunComponent';
import MyClass from './components/MyClass';



function App() {
  return (
    <div className="App">
      <h1>Hello React App</h1>
      <Hello></Hello>
      <FuncComponent/>
      <MyClass/>
    </div>
  );
}

export default App;
