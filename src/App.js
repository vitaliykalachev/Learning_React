import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import FuncComponent from './components/FunComponent';
import MyClass from './components/MyClass';
import Name from './components/Name';
import Example from './components/Example';
import Example2 from './components/Example2';

function App() {

  function clicked() {
    alert('Inside App.js')
}
  return (
    <div className="container">
      <Name/>
      <Example names = {['Python', 'Java', 'JavaScript', 'C#']}/>
      <Example2 names = {['React', 'React Native', 'Django', 'Flask']}/>
    </div>
  );
}

export default App;
