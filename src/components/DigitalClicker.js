import React, {Component} from 'react'

class DigitalClicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timesClicked: 0
        }
    }

    handleClick = () =>{
        const timesClicked=this.state.timesClicked;
        this.setState({timesClicked: timesClicked +1});
    }

    render() {
        return (
            <div><button type="button" id="button" onClick={this.handleClick}>{this.state.timesClicked}</button></div>
        )
    }
}

export default DigitalClicker;