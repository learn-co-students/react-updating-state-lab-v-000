// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {
	constructor(props) {
		super(props)
		this.state = {
			timesClicked: 0
		}
	}

	clickCounting = () => {
		const clickCounter = this.state.timesClicked + 1
		this.setState( {timesClicked: clickCounter} )
	}


	render() {
		return ( 
			<button onClick={this.clickCounting}>{this.state.timesClicked}</button>
		)
	}
}