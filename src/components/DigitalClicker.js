// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
    state = {
        timesClicked: 0
    }
    handleClick = (e) => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked +1
            }
        })
    }

    render() {
        return (
            <div className='digital-clicker'>
                <button onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
        );
    }
}

export default DigitalClicker;