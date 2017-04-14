const React = require('react');

class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0,
    };

    this.buttonClick = this.buttonClick.bind(this)
  }

  buttonClick() {
    this.setState({
      timesClicked: ++this.state.timesClicked
    })
  }

  render() {
    return (
      <button onClick={this.buttonClick}>{this.state.timesClicked}</button>
    );
  }
};

module.exports = DigitalClicker;