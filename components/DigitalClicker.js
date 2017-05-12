const React = require('React');

export default class DigitalClicker extends React.Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    }
    this.incrementClicker = this.incrementClicker.bind(this);
  }

  incrementClicker() {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    });
  }

  render() {
    return (
      <button onClick={this.incrementClicker}>{this.state.timesClicked}</button>
    );
  }
}
