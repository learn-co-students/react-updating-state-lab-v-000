import React from 'react';
 
class DigitalClick extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      timesClicked: 0,
    };
  }
 
	handleClick = () => {
	  this.setState({
	    timesClicked: this.state.timesClicked += 1
	  }, () => console.log(this.state.timesClicked)) // prints true
	}

  render() {
    return (
      <div>
        <p>I have been clicked {this.state.timesClicked} times!</p>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    );
  }
}
 
export default DigitalClick;
