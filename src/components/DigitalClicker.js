

import React, { Component } from 'react'

export default class DigitalClicker extends Component {
    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    countClick = () => {
        this.setState({
            timesClicked: this.state.timesClicked += 1
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.countClick}>{this.state.timesClicked}</button>
            </div>
        )
    }
}