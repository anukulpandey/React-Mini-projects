import './App.css';
import React , {Component} from 'react';
import Header from './components/Header'
import {Body} from './components/Body'
import Slider from './components/Slider';

class App extends Component {
  render(){
  const add=(a,b)=>a+b;
  
  return (
    <div className="App">
     <Slider/>
    </div>
  )
}
}

export default App;
