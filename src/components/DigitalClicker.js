// Code DigitalClicker Component Here
import React, {Component} from 'react';

export default class DigitalClicker extends Component {
constructor() {
    super()
    this.state = {
        timesClicked: 0
    }
}

handleClick=()=>{
    this.setState(state=>{
        return{
            timesClicked:state.timesClicked + 1
        }
    })
}

render() {
    return(
        <div>
            <button id="btnCounter" onClick={this.handleClick}>{this.state.timesClicked}</button>
        </div>
    )
}

}

