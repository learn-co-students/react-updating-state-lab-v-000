// Code DigitalClicker Component Here

import React from 'react';

export default class DigitalClicker extends React.Component {

    constructor(){
        super();

        this.state = {
            timesClicked: 0
        };
    }
    
    incrementClick = () => {
        let newClickValue = this.state.timesClicked + 1;
        this.setState({
            timesClicked: newClickValue
        });
    }
    

    
    render() {
        return (
            <button onClick={this.incrementClick}>{this.state.timesClicked}</button>
        );
    }
} 