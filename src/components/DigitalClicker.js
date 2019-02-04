// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {

    state = {
        timesClicked: 0,
    }

    handleIt = (event) => {
        this.setState({timesClicked: this.state.timesClicked + 1});
    }

    render() {
        return (
            
            <button onClick={this.handleIt} >{this.state.timesClicked}</button>
        )
    }
}
