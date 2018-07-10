import React from 'react';

export default class DigitalClicker extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = { timesClicked: 0 }
  }


  handleClick = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render() {
    return (
      <div>
        <p>I have been clicked {this.state.timesClicked} times!</p>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    );
  }
}
