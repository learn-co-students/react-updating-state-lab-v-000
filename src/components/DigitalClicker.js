import React from 'react'

export default class DigitalClicker extends React.Component {
    constructor() {
        super();
        
        this.state = {
            timesClicked: 0
        }
    }
    
    handleClick = () => {
        this.setState({
            timesClicked: this.state.timesClicked + 1
        })
    }
    
    render() {
        return (
            <div>
                <button label={this.state.timesClicked} onClick={this.handleClick}>You've clicked me {this.state.timesClicked} times!</button>
            </div>
        )
    }
}