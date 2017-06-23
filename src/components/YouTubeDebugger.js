import React from 'react';

export default class YouTubeDebugger extends React.Component {
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
        this.updateBitrate = this.updateBitrate.bind(this)
        this.updateResolution = this.updateResolution.bind(this)
    }
    updateBitrate() {
        this.setState({

            settings: {
                ...this.state.settings,
                bitrate: 12,
            }
        })
    }
    updateResolution() {
        this.setState({

            settings: {
                ...this.state.settings,
                video: { resolution: '720p'}
            }
        })
    }
    render() {
        return (
            <div>
                <ul>
                    <li>bitrate: {this.state.settings.bitrate}</li>
                    <li>resolution: {this.state.settings.video.resolution}</li>
                </ul>
                <button onClick={this.updateBitrate} className="bitrate">bitrate</button>
                <button onClick={this.updateResolution} className="resolution">resolution</button>
            </div>
        )
    }
}