// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component {
	constructor(props) {
		super();
		this.state = {
			timesClicked: 0
		}
	}

	buttonClickIncrement = () => {
		this.setState({
		  timesClicked: this.state.timesClicked + 1
		})
	}

	render() {
		return (
			<button onClick={this.buttonClickIncrement}>{this.state.timesClicked}</button>
		)
	}

}

export default DigitalClicker;