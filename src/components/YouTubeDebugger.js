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

    handleClick = (button) => {
        if (button === 1) {
            this.setState({
                settings: Object.assign({}, this.state.settings, {
                    bitrate: 12
                })
            });
        } 
        else if (button === 2) {
            this.setState({
                settings: {
                    ...this.state.settings, 
                        video: {
                            ...this.state.settings.video, resolution: '720p'
                        }
                }
            });
        }
    }

    // handleClick2 = () => {
        // this.setState({
        //     settings: Object.assign({}, this.state.settings.video, {
        //         resolution: '720p'
        //     })
        // });
    // }

    render () {
        return (
            <div>
                <button className={'bitrate'} onClick={() => this.handleClick(1)}>Bitrate - {this.state.settings.bitrate}</button>
                <button className={'resolution'} onClick={() => this.handleClick(2)}>Resolution - {this.state.settings.video.resolution}</button>
            </div>
        )
    }
}