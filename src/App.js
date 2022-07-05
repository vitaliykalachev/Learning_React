import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import FuncComponent from './components/FunComponent';
import MyClass from './components/MyClass';



function App() {

  function clicked() {
    alert('Class Component Clicked')
}
  return (
    <div className="container">
      <h1>Hello React App</h1>
      <Hello name="Vitaliy" ></Hello>
      
      <MyClass email="vitaliy.kalachev@gmail.com" myclick = {clicked}/>
    </div>
  );
}

export default App;
