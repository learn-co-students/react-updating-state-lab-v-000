const React = require('react');

class DigitalClicker extends React.Component{
  constructor(){
    super();

    this.state = {timesClicked: 0};
    this.handleClick = this.handleClick.bind(this);
  }

handleClick(){
  this.setState({
    timesClicked: this.timesClicked.val() = this.timesClicked.val() + 1
  });
}

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

module.exports = DigitalClicker;
