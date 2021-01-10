// Code DigitalClicker Component Here
import React, { Component } from 'react';

    class DigitalClicker extends Component { 
        
        constructor() {
            super();

            this.state = {timesClicked: 0}
        }

        handleClicker = () => {
            this.setState(prevState => ({timesClicked: prevState.timesClicked+1}))
        }

        render() {
            return(
                <div>
                    <button className="click" onClick={this.handleClicker}>{this.state.timesClicked}</button>
                </div>
            )
        }

    }

export default DigitalClicker;