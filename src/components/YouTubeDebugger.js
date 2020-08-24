// Code YouTubeDebugger Component Here
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

    handleClickBitrate = () => {
        // changes the settings.bitrate state property to 12.
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleClickResolution = () => {
        // changes the settings.video.resolution state property to '720p'.
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        return (
            <div>
                <button 
                    className='bitrate' 
                    onClick={this.handleClickBitrate}>Bitrate
                </button>

                <button 
                    className='resolution' 
                    onClick={this.handleClickResolution}>Resolution
                </button>
            </div>
        )
    }
}