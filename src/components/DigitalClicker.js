import React from 'react';

export default class DigitalClicker extends React.Component {
    constructor() {
        super();
        this.state = {
            timesClicked: 0
        }
    }

    handleClick = () => {
        const addClick = this.state.timesClicked + 1
        this.setState(
            {timesClicked: addClick}
        )
    }

    render() {
        return (
            <label>
                <button onClick={this.handleClick}>{this.state.timesClicked}</button>
            </label>
        )
    }

}