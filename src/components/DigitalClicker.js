import React from 'react';

class DigitalClicker extends React.Component{
    constructor(){
        super();

        this.state = {
            timesClicked: 0
        }
    }

    incrementTime = () => {
        let newNumber = this.state.timesClicked += 1;
        this.setState({
            timesClicked: newNumber 
        }, ()=> {console.log(this.state.timesClicked)})
    }

    render(){
        return(
            <div>
                <label></label>
                <button onClick={this.incrementTime}>
                    {this.state.timesClicked > 0 ? `${this.state.timesClicked}` : "Click me!"}
                </button>
            </div>    
        );
    }
}

export default DigitalClicker;