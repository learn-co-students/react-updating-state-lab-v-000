// Code YouTubeDebugger Component Here
import React, {Component} from 'react';
 
export default class YouTubeDebugger extends Component {
 
    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }

    }


    changeBitrate = () => {
      console.log('whoohoo');

      // let newCount = this.state.count + 1
      // this.setState({
      //   count: newCount
      // })

      // this.setState(previousState => {
      //   return {
      //     timesClicked: previousState.timesClicked + 1
      //   }
      // })

      this.setState({
        settings: {
          ...this.state.settings,
          bitrate: 12
        }
      });
      console.log(this.state)


    }


    changeResolution = () => {
        console.log('yipee!');
        
        this.setState({
            //video: {
            //...this.state.settings.video,
            //resolution: '720p'
            //}

            settings: {
                ...this.state.settings,
                video: {
                    resolution:'720p'}
            }
        });

      console.log(this.state)


    }
   
    render() {
      return (
        <div>
            
            <button className="bitrate" onClick={this.changeBitrate}>bitrate</button>
            <button className="resolution" onClick={this.changeResolution}>resolution</button>
        </div>
      );
    }
}