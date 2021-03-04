import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
//import {Greet} from './components/Greet' for named export
import Hello from './components/Hello'
import Welcome from './components/Welcome'

class App extends Component{
  render(){
    return(
    <div className="App">
      <Greet name="Steve" heroName="Captain America"></Greet>
      <Greet name="Tony" heroName="Iron Man"></Greet>
      <Greet name="Bruce" heroName="Hulk"></Greet>
      {/*<Welcome></Welcome>
      <Hello />*/}
    </div>
    );
  }
}

export default App
