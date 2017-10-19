import React from 'react'
export default class DigitalClicker extends React.Component {
  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }
  clicked = () => {
    this.setState({
      timesClicked: this.state.timesClicked+=1
    })
  }

  render(){
    return <button onClick={this.clicked}>{this.state.timesClicked}</button>
  }
}




// The component renders out a button with a label that shows the timesClicked value.
// This means that, at the start, your button should just say 0.
// Whenever the button is clicked, update the state by incrementing the timesClicked by 1.