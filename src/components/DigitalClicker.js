import React from 'react'

export default class DigitalClicker extends React.Component{
  state = {
    timesClicked: 0
  }

  changeStateHandler = () => {
    let counter = this.state.timesClicked;

    this.setState({
      timesClicked: ++counter
    })
  }

  render() {
    const style = {
      border: '1px solid',
      width: '80px',
      padding: '10px',
      margin: '16px 16px auto'
    }

    return(
      <button style={style} onClick={this.changeStateHandler}>{this.state.timesClicked}</button>
    )
  }
}
