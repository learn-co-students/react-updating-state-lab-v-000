// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
    // here, we define the initial state
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

    // here, we'll handle the bitrate setting
    handleBitrateChange = () => {
        this.setState({
            // below, we utilize the 'spread' operator to ~deeply merge~ our change
            // with the (the new state) with the existing state. If we do not use the
            // spread operator -- or something like Object.assign() to merge the data ourselves
            // -- we'll completely alter the state by overwriting other objects.
            settings: {
                ...this.state.settings,
                bitrate:12
            }
        });
    }

    // similarly, we can demonstrate this again, below:
    handleResolutionChange = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        });
    }

    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.handleBitrateChange}>
                    Change Bitrate
                </button>
                <button className="resolution" onClick={this.handleResolutionChange}>
                    Change Resolution
                </button>
            </div>
        )
    }
}