// const React = require('react');
import React from 'react'

class DigitalClicker extends React.Component {

  constructor() {
    super();

    this.state = {
      timesClicked: 0,
      test: 'work'
    };

    this.handClick = this.handleClick.bind(this);
  }//constructor

  handleClick() {
    this.setState({
      timesClicked: ++this.state.timesClicked,
      test: console.log('yo')
    });
  }//handClick

  render() {
    return (
      <div>
        // <label>{this.state.timesClicked}</label>
        <button onClick={this.handClick}>{this.state.timesClicked}</button>
      </div>
    );
  }
}

module.exports = DigitalClicker;
