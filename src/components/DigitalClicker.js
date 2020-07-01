// Code DigitalClicker Component Here


import React, {Component} from 'react';
 
export default class DigitalClicker extends Component {
 
    constructor(){
        super()
        this.state = {
            timesClicked : 0
        }

    }


    addClick = () => {
      console.log('Tee hee!');

      // let newCount = this.state.count + 1
      // this.setState({
      //   count: newCount
      // })

      this.setState(previousState => {
        return {
          timesClicked: previousState.timesClicked + 1
        }
      })


    }
   
    render() {
      return (
        <div>
            
            <button onClick={this.addClick}>{this.state.timesClicked}</button>
        </div>
      );
    }
}