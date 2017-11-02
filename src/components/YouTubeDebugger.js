import React from 'react';

class YouTubeDebugger extends React.Component{
    constructor(){
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

    changeBitrate = () => {
        this.setState({
            settings: Object.assign({}, this.state.settings, {
                bitrate: 12
            })
        },console.log(this.state.settings.bitrate))
    }

    changeResolution = () => {
        this.setState({
            settings: Object.assign({}, this.state.settings, {
                video: Object.assign({}, this.state.settings.video, {
                    resolution: '720p'
                })
            })
        }, console.log(this.state.settings.video.resolution));       
    }

    render(){
        return(
            <div>
                <label>Bitrate: {this.state.settings.bitrate}</label>
                <button className="bitrate" onClick={this.changeBitrate}>Change the bitrate to 12</button>

                <label>Resolution: {this.state.settings.video.resolution}</label>
                <button className="resolution" onClick={this.changeResolution}>Change the resolution to 720p</button>
            </div>    
        );
    }
}

export default YouTubeDebugger;