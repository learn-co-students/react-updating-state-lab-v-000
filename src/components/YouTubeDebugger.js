// Code YouTubeDebugger Component Here

import React from 'react';

export default class YouTubeDebugger extends React.Component {

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
       }
    }

    newBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings, 
                    bitrate: 12
            }
        })
    }
      

    newResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings, 
                video: {
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        return(
            <div>
                <button className = "bitrate" onClick={this.newBitrate}>Change Bitrate</button>
                <button className = "resolution" onClick={this.newResolution}>Change Resolution</button>
            </div>
        )
    }


}