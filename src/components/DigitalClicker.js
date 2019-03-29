import React, {Component} from 'react';

export default class DigitalClicker extends Component {

  constructor(props) {
    super(props)
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    const timesClicked = this.state.timesClicked;
    this.setState({timesClicked: timesClicked + 1});
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        <p>Click Me</p>
      </div>
    )
  }

}
