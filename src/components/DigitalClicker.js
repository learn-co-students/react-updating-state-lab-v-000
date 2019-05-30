// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
    constructor() {
        super();
        this.state = {
            timesClicked: 0
        }
    }

    increment = () => {
        console.log(this.state.timesClicked)
        let newValue = this.state.timesClicked + 1
        this.setState({
            timesClicked: newValue 
        })
    }

    render() {
        return (
            <button onClick={this.increment}>{this.state.timesClicked}</button>
        )
    }
}

export default DigitalClicker