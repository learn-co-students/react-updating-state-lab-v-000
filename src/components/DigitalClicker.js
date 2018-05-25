// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component{
  constructor(){
    super();
  this.state = {
    timesClicked: 0
  }
}
  clicked = () => {this.setState({
    timesClicked: ++this.state.timesClicked
  })
}
  render(){
    return(
      <button onClick={this.clicked}>{this.state.timesClicked}</button>
    );
  }
}

export default DigitalClicker
