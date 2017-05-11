const React = require('react');

export default class DigitalClicker extends React.Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    };
    this.handleTheClick = this.handleTheClick.bind(this);
  }

  handleTheClick() {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    });
  }
  render() {
    return (
      <button onClick={this.handleTheClick}>{this.state.timesClicked}</button>
    )
  }
}
