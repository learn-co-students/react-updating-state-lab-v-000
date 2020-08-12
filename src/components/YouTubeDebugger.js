import React, { Component } from 'react';

export default class YouTubeDebugger extends Component{
    constructor(){
        super();

        //initial state
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

    handleBit = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        });
    }

    handleRes = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.video,
                    resolution: '720p'
                }
            }
        })
    }

    render(){
        return(
            <div>
            <button className='bitrate' onClick={this.handleBit}>
                Bitrate: {this.state.settings.bitrate}
            </button>

            <button className='resolution' onClick={this.handleRes}>
                Resolution: {this.state.settings.video.resolution}
            </button>
            </div>
        )
    }
}
