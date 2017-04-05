import React from 'react';

class DigitalClicker extends React.Component  {
  constructor() {
    super()

    this.state = {
      timesClicked: 0,
    };

    this.incrementClick = this.incrementClick.bind(this)

  }

  incrementClick()  {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    });
  }

  render()  {
    return(
      <div>
        <button onClick={this.incrementClick}>{this.state.timesClicked}</button>
      </div>
      );
  }
}

module.exports = DigitalClicker