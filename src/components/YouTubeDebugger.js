// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component{
    constructor() {
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          };
    }

    handleBitrate = () => {
        this.setState({settings: {
            ...this.state.settings,
            bitrate: 12
        }})
    }

    handleResolution = () => {
        this.setState({settings: {
            ...this.state.settings,
            video: {
                resolution: "720p"
            }
        }})
    }
     
      render() {
        return (
            <React.Fragment>
            <button className="bitrate" onClick = {this.handleBitrate}>Bitrate is {this.state.settings.bitrate}</button> 
            <button className = "resolution" onClick = {this.handleResolution}>Resolution is {this.state.settings.video.resolution}</button>
            </React.Fragment>
        );
      }


}

export default YouTubeDebugger