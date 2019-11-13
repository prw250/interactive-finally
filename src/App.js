import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { tsPropertySignature } from '@babel/types';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Button name = {"First Button"}  />
      <Button name = {"Second Button"}  />
      <Button name = {"Third Button"}  />
      </header>
    </div>
  );
}

function Button(props) {
  const [count, setCount] = useState(0);
  const [buttonStyle, changeStyle] = useState("");

  
  function handleClick(){
    setCount(count + 1);
    if (count > 1)
    changeStyle("clicked");
  }
  return (
    <div>
      <button className={buttonStyle} onClick={handleClick}> {props.name} </button>
    </div>
  );
}


    
export default App;
