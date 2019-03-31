// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      timesClicked: 0,
    };
  }

  handleClick = () => {
  this.setState(prevState => ({
    timesClicked: prevState.timesClicked + 1
  }) // prints true
)}

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    );
  }
}

export default DigitalClicker;

// src/index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
//
// import ClickityClick from './components/ClickityClick';
//
// ReactDOM.render(<ClickityClick />, document.getElementById('root'));
