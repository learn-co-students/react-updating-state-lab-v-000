const React = require('react');

class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let newCount = this.state.timesClicked + 1
    this.setState({
      timesClicked: newCount
    })
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    );
  }
}

module.exports = DigitalClicker;
