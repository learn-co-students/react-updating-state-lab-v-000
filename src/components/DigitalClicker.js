// Code DigitalClicker Component Here
const React = require('react');

class DigitalClicker extends React.Component {
    constructor () {
        super ()
        this.state = {
            timesClicked: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick (event) {
        this.setState({
            timesClicked: ++this.state.timesClicked
        });
    }

    render () {
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
        )
    }
}
module.exports = DigitalClicker;