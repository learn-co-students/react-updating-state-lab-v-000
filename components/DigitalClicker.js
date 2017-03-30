const React = require('react');

class DigitalClicker extends React.Component {

  constructor() {
    super();

    this.state = {
      timesClicked: 0
    }

    this.tick = this.tick.bind(this);
  }

  tick() {
    let newTick = this.state.timesClicked + 1;
    this.setState({
      timesClicked: newTick
    });
  }

  render() {
    return(
      <button onClick={this.tick}>{this.state.timesClicked}</button>
    );
  }

}

module.exports = DigitalClicker;
