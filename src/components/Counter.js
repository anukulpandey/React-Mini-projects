import React from 'react';

export default class Counter extends React.Component {
    constructor(props){
    super(props);
        this.state={
            count:0,
        };
    }
    increment=()=>{
        this.setState({
            count:this.state.count+1,
        });
    }
    decrement=()=>{
        this.setState({
            count:this.state.count-1,
        });
    }
    render(){
        return (
            <div>
                <p>Counter:{this.state.count}</p>
                <button  style={{borderRadius:'5px',border:'0.25px solid grey',padding:'5px',margin:'10px'}}onClick={this.increment}>increment</button>
                <button  style={{borderRadius:'5px',border:'0.25px solid grey',padding:'5px',margin:'10px'}}onClick={this.decrement}>decrement</button>
            </div>
        )
    }
}