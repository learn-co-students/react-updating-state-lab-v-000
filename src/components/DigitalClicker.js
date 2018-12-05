// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component{
    constructor(){
        super();

        this.state = {
            timesClicked: 0,
        };
    }

    handleClick = () => {
        this.setState(prevState => ({
            timesClicked: prevState.timesClicked+1
        }), () => console.log(this.state.timesClicked))
    }
    
    render(){
        return (
            <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        )
    }
}

// <label>`${this.state.timesClicked}:` </label>