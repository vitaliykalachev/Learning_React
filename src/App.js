import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import FuncComponent from './components/FunComponent';
import MyClass from './components/MyClass';



function App() {
  return (
    <div className="App">
      <h1>Hello React App</h1>
      <Hello name="Vitaliy" lastname="Kalachev"></Hello>
      
      <MyClass email="vitaliy.kalachev@gmail.com"/>
    </div>
  );
}

export default App;
