// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
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

    handleBitrateClick = () => {
        this.setState({
            settings: Object.assign({}, this.state.settings, {
                bitrate: 12,
            }),
        });
    };

    handleResolutionClick = () => {
        this.setState({
            settings: Object.assign({}, this.state.settings, {
                video: Object.assign({}, this.state.settings.video, {
                    resolution: '720p'
                })
            }),
        });
    };

    render () {
        return (
            <div>
                <button className="bitrate" onClick={this.handleBitrateClick}>Bitrate: {this.state.settings.bitrate}</button>

                <button className="resolution" onClick={this.handleResolutionClick}>Resolution: {this.state.settings.video.resolution}</button>
            </div>
        )
    }
}

export default YouTubeDebugger