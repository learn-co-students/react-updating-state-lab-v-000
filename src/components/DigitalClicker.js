// Code DigitalClicker Component Here
import React from 'react'; 

export default class DigitalClicker extends React.Component {
	constructor() {
		super(); 
		this.state = {
			timesClicked: 0
		}

		this.getClick = this.getClick.bind(this);

	}

	getClick() {
		 	this.setState(
		 		{timesClicked: this.state.timesClicked + 1}
		 		); 
		}

	render () {
		return(<div>
		<button onClick={this.getClick}>{this.state.timesClicked}</button>
		</div>)
	}
}