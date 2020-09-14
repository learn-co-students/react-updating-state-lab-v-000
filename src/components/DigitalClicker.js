import React, {Component} from 'react';

export default class DigitalClicker extends Component {
    
    constructor() {
        super();
        this.state = {
            timesClicked: 0
        }
    }

    updateState = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }


        
    render() {
      return(
          <button onClick={this.updateState}>{this.state.timesClicked}</button>
      )
    }
}