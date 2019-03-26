import React from 'react';

export default class DigitalClicker extends React.Component {
	constructor() {
		super()
		this.state = {
			timesClicked: 0
		}
	}

	increment = () => {
		const newCount = this.state.timesClicked + 1
		this.setState({
			timesClicked: newCount
		})
	}


	render() {
	    return (
	      <button onClick={this.increment}>
	        {this.state.timesClicked}
	      </button>
    	)
	}
}