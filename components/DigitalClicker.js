import React from 'react';

class DigitalClicker extends React.Component {
  constructor(){
    super();

    this.clickButton = this.clickButton.bind(this);

    this.state = {
      timesClicked: 0,
    };
  };

  clickButton(){
    var clickNum = this.state.timesClicked + 1;
    this.setState(
      {timesClicked: clickNum},
    )
  };

  render(){
    return(
      <button onClick={this.clickButton}>{this.state.timesClicked}</button>
    )
  };
};

export default DigitalClicker;
