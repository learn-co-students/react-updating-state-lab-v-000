import React from 'react';
// Code DigitalClicker Component Here

export default class DigitalClicker extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            timesClicked:0
        }
    }
    handleClick = ()=>{
        this.setState(previousState=>{
            return {
                timesClicked: previousState.timesClicked+1
            }
        })
    }
    render(){
        return(
            <button onClick={this.handleClick}>{this.state.timesClicked}</button>

        )
    }
}