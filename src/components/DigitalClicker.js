// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {
	constructor() {
    super();
 
    this.state = {
      timesClicked: 0
    };
  }

  increaseClickCount = () => {
  	this.setState({
  		timesClicked: this.state.timesClicked+1
  	})
  }

	render () {
		return (
			<button onClick={this.increaseClickCount}>
				{this.state.timesClicked}
			</button>
		)
	}
}