import './App.css';
import React , {Component} from 'react';
import Header from './components/Header'
import {Body} from './components/Body'
import Slider from './components/Slider';

class App extends Component {
  state={
    visible:true,
  }
  render(){
    const buttonText = this.state.visible?'hide':'show';
  return (
    <div className="App">
     {this.state.visible?<Slider/>:null}
     <button style={{borderRadius:'5px',border:'0.25px solid grey',padding:'5px',margin:'10px'}} onClick={()=>{this.setState({visible:!this.state.visible})}}>{buttonText}</button>
    </div>
  )
}
}

export default App;
