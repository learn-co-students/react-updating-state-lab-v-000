// Code DigitalClicker Component Here
import React from "react"

class DigitalClicker extends React.Component{
  constructor(){
    super();
    this.state = {
      timesClicked: 0
    }
  }

//Everytime We click the button increment timeClicked by 1
  handleClick = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1}, console.log(this.state.timesClicked)
    )
  }

  render(){
    return(
      <div>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    );
  }
}

export default DigitalClicker
