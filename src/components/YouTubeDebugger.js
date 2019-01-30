import React, { Component } from 'react';
export default class YouTubeDebugger extends Component {
    constructor() {
        super()
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
    handleBitRate = () => {
        this.setState({
            settings: Object.assign({}, this.state.settings, {
                bitrate: 12
            })
        })
    }
    handleResoultion = () => {
        this.setState({
            settings: Object.assign({}, this.state.settings, {
                video: Object.assign({}, this.state.video, {
                    resolution: '720p'
                })
            })
        })
    }
    render() {
        return (
            <div>
                <h1>YouTubeDebugger</h1>
                <button
                    className='bitrate'
                    onClick={this.handleBitRate}>
                    Change Bit Rate
      </button>
                <button
                    className='resolution'
                    onClick={this.handleResoultion}>
                    Change Resolution
        </button>
            </div>
        )
    }
}