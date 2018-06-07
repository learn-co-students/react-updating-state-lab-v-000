import React from 'react';

export default class DigitalClicker extends React.Component {
    constructor() {
        super();
        // define the initial state
        this.state = {
            timesClicked: 0,
        };
    }

    increaseClick = () => {
        this.setState({
            timesClicked: ++this.state.timesClicked,
        })
    }


    render (){
        return (
           <button onClick={this.increaseClick}>{this.state.timesClicked}</button> 
        );
    }
}

