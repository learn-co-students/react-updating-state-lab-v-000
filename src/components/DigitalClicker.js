// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component{
    constructor(){
        super()

        this.state = {
            timesClicked: 0,
        }

        this.incrementValue = this.incrementValue.bind(this);
    }

    incrementValue() {
        this.setState((prevState) =>{
            return {timesClicked: prevState.timesClicked + 1};
        })
    }
    render(){
        return (
            <button onClick={this.incrementValue}>{this.state.timesClicked}</button>
        )
    }
}


export default DigitalClicker;