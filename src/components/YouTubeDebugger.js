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
        }
    }

    ChangeBitarate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate : 12
            }
        })
    };

    ChangeResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution : '720p'
                }
            }
        })
    };

    render() {
        return(
            <div>
                <button className="bitrate" onClick={this.ChangeBitarate}>Change bitrate to 12</button>
                <button className="resolution" onClick={this.ChangeResolution}>Change resolution to 720p</button>
            </div>
        )
    }
}

export default YouTubeDebugger;
