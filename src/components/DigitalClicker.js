import React, {Component} from 'react';

class DigitalClicker extends Component {
  constructor () {
    super();

    this.state = {
      timesClicked: 0,
    }
  }

  updateTimesClicked = () => {
    let prev = this.state.timesClicked;
    this.setState({
      timesClicked: prev += 1,
    }, () => console.log(this.state.timesClicked))
  }

  render() {
    return(
      <div>
        <button onClick={this.updateTimesClicked}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

export default DigitalClicker;