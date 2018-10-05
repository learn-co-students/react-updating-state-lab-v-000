import React from 'react'

export default class DigitalClicker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timesClicked: 0,
        }
    }
    incrementCount = () => {
        this.setState(
            { timesClicked: this.state.timesClicked +1 }
            )
    }
    render() {
        return (
            <button onClick={this.incrementCount}>{this.state.timesClicked}</button>
        )
    }
}