// Code DigitalClicker Component Here
import React from 'react';
 
class DigitalClicker extends React.Component {
    constructor() {
        super();

        this.state = {
        timesClicked: 0
        };
    }
 
    onClick = () => {
        this.setState(lastState => ({ timesClicked: lastState.timesClicked + 1 }));
    }
 
    render() {
        return (
            <button onClick={this.onClick}>{this.state.timesClicked}</button>
        );
    }
}
 
export default DigitalClicker;