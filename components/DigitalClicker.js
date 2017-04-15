import React from 'react'; 

export default class DigitalClicker extends React.Component {
  constructor() {
    super();  
    this.state = {
      timesClicked: 0 
    }
    this.handleClick = this.handleClick.bind(this); 
  }
  
  handleClick(event) {
    var clicks = this.state.timesClicked; 
    this.setState({
      timesClicked: clicks + 1, 
    }) 
  }

  render() {
    return (
       <button onClick={this.handleClick}>{this.state.timesClicked}</button> 
        ) 
  }
}

