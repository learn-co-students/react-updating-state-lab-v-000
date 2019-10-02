import React from 'react';

class DigitalClicker extends React.Component {
    constructor() {
        super();

        this.state = {
            timesClicked: 0
        };
    }

    handleClick = () => {
        this.setState({
            timesClicked: this.state.timesClicked + 1
        }, () => console.log(this.state.timesClicked));
    }

    render () {
        return (
            <div>

            <button id="cheese" onClick={this.handleClick}><label for="cheese">{this.state.timesClicked}</label></button>
            </div>
        );
    }
}

export default DigitalClicker;
