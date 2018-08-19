// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {

    // Constructor for using/initializing state
    constructor() {
        super();
        
        // Define the initial state:
        this.state = {
          errors: [], 
          user: null, 
          settings: { bitrate: 8,
            video: { resolution: '1080p' } }
        };
    }
    
    // Function for updating bitrate
    updateBitrate = () => {
        this.setState({
          settings: {
            ...this.state.settings,
            bitrate: 12,
          },
        })
    }

    // Function for updating resolution
    updateResolution = () => {
        this.setState({
          settings: {
            ...this.state.settings,
            video: {
                ...this.state.video,
                resolution: '720p'
            },
          },
        })
    }
    
    render() {
        return (
          <div className="youtubedebugger">
           <button className='bitrate' onClick={this.updateBitrate}>Update Bitrate</button>
           <button className='resolution' onClick={this.updateResolution}>Update Resolution</button>
          </div>
        );
    }
}
