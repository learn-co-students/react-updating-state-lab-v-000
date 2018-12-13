// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
    state = {timesClicked: 0};

    onButtonClick = () => {
        let clicked = this.state.timesClicked + 1;
        this.setState({timesClicked: clicked})
    }

    render() {

        return (
            <button onClick={this.onButtonClick}>
                {this.state.timesClicked}
            </button>
        );
    }
}

export default DigitalClicker;