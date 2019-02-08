// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends Component {
    constructor() {
        super();

        this.state = {
            timesClicked: 0
        };
    };

    handleClick = () => {
        const increaseClick = ++this.state.timesClicked
        this.setState({
            timesClicked: increaseClick
        });
    };

    render() {
        return (
            <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        );
    };
};