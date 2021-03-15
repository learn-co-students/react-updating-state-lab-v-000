// Code DigitalClicker Component Here
import React, {Component} from 'react';

export default class DigitalClicker extends Component {
    constructor() {
        super();
        this.state = {
            timesClicked: 0
        }
    }

    handleButton = (event) => {
        this.setState(previousState => {
            return {timesClicked: previousState.timesClicked + 1}
        })
    }

    render() {
        return <div><button onClick={this.handleButton} name={this.state.timesClicked}>{this.state.timesClicked}</button></div>
    }
}