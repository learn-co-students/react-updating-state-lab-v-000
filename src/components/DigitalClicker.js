// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component {
  constructor(){
    super();
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    let clicks = this.state.timesClicked
    this.setState({
      timesClicked:  clicks+1
    })
  }

  render() {
    return(
      <button onClick={this.handleClick}>
        {this.state.timesClicked}
      </button>
    );
  }
}

export default DigitalClicker
