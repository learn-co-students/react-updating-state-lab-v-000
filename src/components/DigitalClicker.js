// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component {
	constructor(){
		super()
		this.state = {
			timesClicked: 0
		}
	}

	handleClick = () => {
		this.setState({
			timesClicked: this.state.timesClicked + 1
		}, () => console.log(this.state.timesClicked))
	}

	render() {
		return (
			<div>
				<p>Clicked {this.state.timesClicked} times</p>
				<button onClick={this.handleClick}>{this.state.timesClicked}</button>
			</div>
		)
	}
}

export default DigitalClicker