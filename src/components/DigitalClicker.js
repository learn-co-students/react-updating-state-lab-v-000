// Code DigitalClicker Component Here

import React, { Component } from 'react';

export default class DigitalClicker extends Component {
	constructor(props) {
		super()

		this.state = {
			timesClicked: 0
		}
	}

	clickHandler = () => {
		this.setState(previousState => {
			return {
				timesClicked: 1 + previousState.timesClicked
			}
		})
	}

	render(){
		return(
			<button onClick={this.clickHandler}>{this.state.timesClicked}</button>
			)
	}
}