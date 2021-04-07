// Code DigitalClicker Component Here
import React, {Component} from 'react'
class DigitalClicker extends Component {
  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }

  render() {
    return(
      <button onClick={event=> this.setState(state=> ({timesClicked: state.timesClicked + 1})) }>
        {this.state.timesClicked}
      </button>
    )
  }

}

export default DigitalClicker