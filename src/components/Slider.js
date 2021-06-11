import React from 'react';

export default class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            img:["https://source.unsplash.com/assets/photo-1433959352364-9314c5b6eb0b-ef3fe6b0fe97031bbaf5d39b9e9382c4662a45ab1b8bb0f395cb9ddf62d4739a.jpg","https://source.unsplash.com/WLUHO9A_xik/1600x900","https://source.unsplash.com/daily"],
            index:0
        }
    }
    next=()=>{
        this.setState({
            index: this.state.index+1,
        })
        if (this.state.index>=2){
            this.setState({
                index: 0,
            })
        }
    }
    previous=()=>{
        this.setState({
            index: this.state.index-1,
        })
        if (this.state.index<=0){
            this.setState({
                index: 2,
            })
        }
    }
    render() {
        return(
            <div>
                 <button onClick={this.previous}>
                    previous
                </button>
                <img src={this.state.img[this.state.index]} height='200px' width='200px' alt="no image" />
                <button onClick={this.next}>
                    next
                </button>
            </div>
        )
    }
}