import React from 'react'

export default class DigitalClicker extends React.Component {
  constructor() {
    super()
    
    // Define initial state
    this.state = {
      timesClicked: 0
    }
  }
  
  handleClick = () => {
    // Update state 
    this.setState({
      timesClicked: ++this.state.timesClicked
    })
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.timesClicked}
        </button>
      </div>
      )
  }
  
}