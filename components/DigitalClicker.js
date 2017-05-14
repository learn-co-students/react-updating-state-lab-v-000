import React from 'react'

class DigitalClicker extends React.Component {

  constructor() {
    super();

    this.state = {
      timesClicked: 0
    };

    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render() {
    return(
      <div>
        <button onClick={this._handleClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}
export default DigitalClicker
