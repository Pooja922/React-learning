import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Greet from './components/Greet'
//import {Greet} from './components/Greet' for named export
//import Hello from './components/Hello'
//import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'

class App extends Component{
  render(){
    return(
    <div className="App">
      {/*<Greet name="Steve" heroName="Captain America">
        <p>This is a children class</p>
      </Greet>
      <Greet name="Tony" heroName="Iron Man">
        <button>Action</button>
      </Greet>
      <Greet name="Bruce" heroName="Hulk">
        <button>Action1</button>
      </Greet>
      <Welcome name="Steve" heroName="Captain America">
        <button>Action2</button>
      </Welcome>
      <Welcome name="Tony" heroName="Iron Man">
        <button>Action3</button>
      </Welcome>
      {/*<Hello />*/}
      <Message/>
      <Counter/>
    </div>
    );
  }
}

export default App
