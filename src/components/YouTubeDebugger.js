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

    updateResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })
    }

    updateBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    render() {
        return(
            <div>
                <button className="bitrate" onClick={this.updateBitrate}>Change bitrate to 12</button><br/>
                <button className="resolution" onClick={this.updateResolution}>Change resolution to 720p</button>
            </div>
        )
    }
}