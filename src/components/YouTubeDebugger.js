// Code YouTubeDebugger Component Here
import React, {Component} from 'react';

export default class YouTubeDebugger extends Component {

    constructor() {
        super();
        this.state = {
            errors: [], 
            user: null, 
            settings: { 
                bitrate: 8, 
                video: { resolution: '1080p' }
            }
        }
    }

    handleBitrateClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        }, () => console.log(this.state.settings.bitrate));
    }

    handleResolutionClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                } 
            }
        }, () => console.log(this.state.settings.video.resolution)
        )
    }

    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.handleBitrateClick}>Bitrate</button>
                <button className="resolution" onClick={this.handleResolutionClick}>Resolution</button>
            </div>
        );
    }
}
