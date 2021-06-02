// Code ClickityClick Component Here
import React from 'react';
 
class ClickityClick extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      hasBeenClicked: false
    };
  }
 
 handleClick = () => {
   this.setState({
     hasBeenClicked: true
   })
   console.log(this.state.hasBeenClicked);
 }
 
  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not 😫'} been clicked!</p>
        <button onClick={this.handleClick}>🥰</button>
      </div>
    );
  }
}
 
export default ClickityClick;
 
