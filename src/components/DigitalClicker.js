// Code DigitalClicker Component Here
import React, { Component } from 'react';

// I like putting the concise export component info up here
export default class DigitalClicker extends Component {
    constructor() {
        super();
        // here we initially set the state
        this.state = {
            timesClicked: 0
        }
    }
    
    // here, we create an arrow function to handle the state change
    // when the button is clicked.
    handleClick = () => {
        this.setState({
            timesClicked: this.state.timesClicked + 1
        })
    }

    // here, we render the State information we set in the Constructor() and
    // set in handleClick().
    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.timesClicked}
            </button>
        )
    }
}