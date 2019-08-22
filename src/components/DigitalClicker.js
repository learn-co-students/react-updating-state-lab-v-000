// Code DigitalClicker Component Here
import React from 'react';
 
class DigitalClicker extends React.Component {
  constructor(props) {
    super(props);
 
    // Define the initial state:
    this.state = {
      timesClicked: 0
    };
  }
 
  render() {
    return (
        <button onClick={this.update}>{this.state.timesClicked}</button>
          )}
      update = () => {
        const addOne = this.state.timesClicked + 1;
            this.setState({
              timesClicked: addOne
            });
          }
        
        }
 
export default DigitalClicker;