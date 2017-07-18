// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {
    constructor(props){
        super(props);

        this.state = { errors: [], user: null, 
            settings: { bitrate: 8, video: { resolution: '1080p'}}
        }

        this.changeBitrate = this.changeBitrate.bind(this);
        this.changeResolution = this.changeResolution.bind(this);
    }

    changeBitrate(){
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        });
    }

    changeResolution(){
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        });
    }

    render(){
        return (
            <div>
                <button onClick={this.changeBitrate} className="bitrate">Change bitrate</button>
                <button onClick={this.changeResolution} className="resolution">Change bitrate</button>
            </div>
        );
    }
}