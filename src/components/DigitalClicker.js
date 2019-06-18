// Code DigitalClicker Component Here

import React from 'react';

export default class DigitalClicker extends React.Component {

    constructor() {
        super();

        this.state = {
            timesClicked: 0
        };
    }

    handleClick = () => {
        this.setState({
            timesClicked: this.state.timesClicked + 1      
        })
    }

    render() {
        const count = this.state.timesClicked                

        return (
            <div>
                <button onClick= {this.handleClick}>{count}</button>
            </div>
        )
    }


}