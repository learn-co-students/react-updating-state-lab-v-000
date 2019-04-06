// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
    constructor() {
        super();

        this.state = {
             errors: [], 
             user: null, 
             settings: { bitrate: 8, video: { resolution: '1080p' }} 
            
        }
    }  
    render() {
        return (
            <div>
            <p> {this.bitrate ? 12 : null} </p>
            <button onClick={this.bitrate}>Bitrate</button>
          
            <p> {this.resolution ? '720p' : null} </p>
            <button onClick={this.resolution}>Resolution</button>
            </div>
        )
     }
}

export default YouTubeDebugger;