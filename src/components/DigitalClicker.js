import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
  super()

  this.state = {
    timesClicked: 0
  };
}

handleClick = () => {
  let a = 1
  this.setState({
    timesClicked: ++a
  })
}

  render(){
    return(

      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }

}


export default DigitalClicker;
