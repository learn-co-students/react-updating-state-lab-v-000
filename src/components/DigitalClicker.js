import React from 'react';

export default class DigitalClicker extends React.Component {
  constructor() {
   super();

   this.state = {
     timesClicked: 0,
   };
 }

 clicked = () => {
   this.setState({
     timesClicked: ++this.state.timesClicked
   })
 }

  render() {
    return (
      <div>
      <label>Clicker</label><br></ br>
      <button onClick={this.clicked}>{this.state.timesClicked}</button>
      </div>
      );
  }
}
