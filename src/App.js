import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import FuncComponent from './components/FunComponent';
import MyClass from './components/MyClass';
import Name from './components/Name';
import Example from './components/Example';
import Example2 from './components/Example2';
import Form from './components/Form';
import MyFragment from './components/MyFragment';
import ComponentA from './components/ComponentA';


export const MyContext = React.createContext()


function App() {

  function clicked() {
    alert('Inside App.js')
}
  return (
    <div className="container">
      
      <MyContext.Provider value = "This is a value from context">

      <ComponentA />
     
      </MyContext.Provider>
      {/* <Name/>
      <Example names = {['Python', 'Java', 'JavaScript', 'C#']}/>
      <Example2 names = {['React', 'React Native', 'Django', 'Flask']}/>
      <Form/>  */}
      {/* <MyFragment/> */}

    </div>
  );
}

export default App;
