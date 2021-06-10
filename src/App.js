import './App.css';
import React , {Component} from 'react';
import Header from './components/Header'
import {Body} from './components/Body'
import Counter from './components/Counter';

class App extends Component {
  render(){
  const add=(a,b)=>a+b;
  
  return (
    <div className="App">
     <Counter/>
    </div>
  )
}
}

export default App;
