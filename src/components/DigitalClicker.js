import React, { Component } from 'react';
export default class DigitalClicker extends Component{
    constructor(){
        super();
        this.state = {
            timesClicked: 0
        }
    }

    handleClick = () => {
        this.setState(prevState => ({
            timesClicked: prevState.timesClicked+1
        }), () => console.log(this.state.timesClicked))
    }


    render(){
        return(
            <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        )
    }
}