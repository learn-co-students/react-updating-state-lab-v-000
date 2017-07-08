// Code DigitalClicker Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class DigitalClicker extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			timesClicked: 0
		}
	}

	incrementCount = () => {
		var currentClicks = this.state.timesClicked + 1
		this.setState({timesClicked: currentClicks})
		}
	
	render(){
		return(
			<button onClick={this.incrementCount}>{this.state.timesClicked}</button>
			)
	}
}