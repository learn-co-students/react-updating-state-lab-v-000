import React from 'react'

export default class DigitalClicker extends React.Component {
	constructor() {
		super();
	 
	  	// Define the initial state:
	  	this.state = {
		  timesClicked: 0
		}
	}
	 
	handleClick = () => {
		this.setState({
			timesClicked: this.state.timesClicked+= 1
		})
	}
	
	// Update timesClicked when button is clicked
	render() {
	    return (
	      <div>
	        <p>Digital Clicker</p>
	        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
	      </div>
	    )
	}
}
