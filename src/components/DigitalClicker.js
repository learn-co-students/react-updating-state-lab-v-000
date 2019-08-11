import React from 'react'
// import { timingSafeEqual } from 'crypto';

export default class DigitalClicker extends React.Component {

	constructor(){
		super()
		this.state = {
			timesClicked: 0
		}
	}
	
	updateTimer = () => {
		this.setState({
			timesClicked: this.state.timesClicked + 1
		})
	}
	
	render(){
		return (
			<div>
				<button onClick={this.updateTimer}>
					{this.state.timesClicked}
				</button>
				<br></br>
				<br></br>
			</div>
		)
 	}   
}