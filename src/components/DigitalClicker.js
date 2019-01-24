// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {

    constructor(props) {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    clicked = () => {
        let newClicks = this.state.timesClicked + 1
        this.setState({
            timesClicked: newClicks
        })
    }


    render() {

        return (
            <button onClick={this.clicked}>{this.state.timesClicked}</button>
        )

    }


}