// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
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
        };
    }

    increaseBitrate = () => {
        this.setState(previousState => {
            return {
                settings: {
                    ...previousState.settings,
                    bitrate: 12,
                }
            }
        })
    }

    lowerResolution = () => {
        this.setState(previousState => {
            return {
                settings: {
                    ...previousState.settings,
                    video: {
                        ...previousState.settings.video,
                        resolution: '720p'
                    }
                }
            }
        })
    }

    render() {
        return(
            <div>
                <button className='bitrate' onClick={this.increaseBitrate}>{this.state.settings.bitrate === 8 ? 'Increase Bitrate' : 'Bitrate 12'}</button>
                <button className='resolution' onClick={this.lowerResolution}>{this.state.settings.video.resolution === '1080p' ? 'Lower Resolution to 720p' : 'Resolution 720p'}</button>
            </div>
        )
    }
}