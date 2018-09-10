// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
    constructor() {
        super();
        this.state = {
            timesClicked: 0,
        };
    }

    handleClick = () => {
        this.setState({
            timesClicked: this.state.timesClicked + 1,
        })
    }

    render() {
        return (
            <button onClick={this.handleClick} value={this.state.timesClicked}>{this.state.timesClicked}</button>
        );
    }
}

export default DigitalClicker