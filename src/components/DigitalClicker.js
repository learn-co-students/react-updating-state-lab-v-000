// Code DigitalClicker Component Here
import React from 'react';

class  DigitalClicker  extends React.Component {
    constructor(){
        super();

        this.state = {
            timesClicked: 0
        };
    }

        handleClick = () => {

            this.setState(prevState => ({
                timesClicked: prevState.timesClicked +1
            })) 
        }

        render() {
            return (
                <div>
                <p> {this.state.timesClicked ? this.setState : null} </p>
                <button onClick={this.handleClick}> 1 </button>
                </div>
            )
         }
    }


export default DigitalClicker;