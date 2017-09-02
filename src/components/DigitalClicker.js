import React from 'react';

export default class DigitalClicker extends React.Component {
    constructor() {
        super()

        this.state = {
            timesClicked: 0
        }
    }

    clickHandler = () => {
        let clicks = this.state.timesClicked + 1
        this.setState({
            timesClicked: clicks
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>{this.state.timesClicked}</button>
            </div>
        )
    }
}