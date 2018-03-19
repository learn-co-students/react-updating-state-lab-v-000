import React from 'react'

class DigitalClicker extends React.Component {
  constructor(){
    super();

    this.state = {
      timesClicked: 0,
    };

  }

  handleClick = () => {
    this.setState({
      timesClicked: ++this.state.timesClicked
    });
  }
  render(){
    return(
    <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker;



// //1. In the `components/DigitalClicker.js` file, create a `DigitalClicker` React component.
// 2. This component has an initial state property called `timesClicked`, which is initially defined as 0.
// 3. The component renders out a button with a label that shows the `timesClicked` value. This means that, at the start, your button should just say `0`.
// 4. Whenever the button is clicked, update the state by incrementing the `timesClicked` by 1.
