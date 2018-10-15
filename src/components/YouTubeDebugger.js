// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
    constructor() {
        super();
    
        this.state = {
            errors: [], 
            user: null, 
            settings: { bitrate: 8, video: { resolution: '1080p' } } 

        };
    }

    handleBitrate = () =>{
        this.setState();
    }

    handleResolution = () =>{
        this.setState();
    }

    render() {
        return (
            <div>
                <button onClick={this.handleBitrate}>Change Bitrate</button>
                <button onClick={this.handleResolution}>Change Resolution</button>
            </div>
        )
    }
}

export default YouTubeDebugger;