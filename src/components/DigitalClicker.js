// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends Component {

    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    updateClicks = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.updateClicks}>{this.state.timesClicked}</button>
            </div>
        )
    }
}