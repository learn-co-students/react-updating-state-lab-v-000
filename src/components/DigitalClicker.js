import React from 'react';

export default class DigitalClicker extends React.Component{
  constructor(){
    super();
    this.state = {
      timesClicked: 0,
    };

    this.clickIt = this.clickIt.bind(this);
  }

  clickIt(){
    this.setState({
      timesClicked: ++this.state.timesClicked,
    });
  }


  render(){
    return(
      <button onClick={this.clickIt}>{this.state.timesClicked}</button>
    )
  }

}