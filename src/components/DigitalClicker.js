import React from 'react'

export default class DigitalClicker extends React.Component {
    constructor() {
        super();
        this.state = {
            timesClicked: 0
        };
    }

    handleOnClick = () => {
        let newClick = this.state.timesClicked + 1
        this.setState({
            timesClicked: newClick
        })
    }

    render() {
        return (
            <button onClick={this.handleOnClick}>{this.state.timesClicked}</button>
        )
    }

}





