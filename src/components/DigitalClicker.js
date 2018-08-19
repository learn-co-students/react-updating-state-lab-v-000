// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends Component {

    // Constructor for using/initializing state
    constructor() {
        super();
        
        // Define the initial state:
        this.state = {
          timesClicked: 0
        };
    }
    
    // Function for updating state
    updateStateFunction = () => {
        this.setState({
            timesClicked: this.state.timesClicked + 1
        }, () => {console.log('updated timesClicked : ', this.state.timesClicked)})
    }
    
    render() {
        return (
          <div className="digitalclicker">
           <button onClick={this.updateStateFunction}>{this.state.timesClicked}</button>
          </div>
        );
    }
}
