// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {

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

    changeBitRate = () => {
        this.setState(previousState => {
            return{
                settings: {
                    ...previousState.settings,
                    bitrate: 12
                }
            }
        });
    }

    changeResolution = () => {
        this.setState(previousState => {
            return{
                settings: {
                    ...previousState.settings,
                    video: {
                        ...previousState.video,
                        resolution: '720p'
                    }
                }
            }
        });
    }

    render() {
        return(
            <div>
                <button className="bitrate" onClick={this.changeBitRate}>Bitrate: 12</button>
                <button className="resolution" onClick={this.changeResolution}>Resolution: 720p</button>
            </div>
        );
    }
}