// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
    constructor() {
        super();
        this.state = {
            timesClicked: 0
        }
    }

    handleClick = () => {
        this.setState({ timesClicked: this.state.timesClicked += 1}, () => (this.state.timesClicked))
      }

    render() {
        return (
           <div><button onClick={this.state.timesClicked + 1}>{this.state.handleClick}</button></div>)
           this.setState ({timesClicked: this.state.timesClicked + 1})
        }

        render() {
            return (<button onClick={this.handleClick}>{this.state.timesClicked}</button>)
        }
}

export default DigitalClicker;