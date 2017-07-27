import React from 'react';

export default class YouTubeDebugger extends React.Component {
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

        this.bitrateClick = this.bitrateClick.bind(this)
        this.resolutionClick = this.resolutionClick.bind(this)
    }

    bitrateClick = () => {
        this.setState({
            settings: {
            ...this.state.settings,
            bitrate: 12,
            },
        });
    }

    resolutionClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p',
                },
            },
        });
    }

    render() {
        return(
            <div>
                <button onClick={this.bitrateClick} className="bitrate">Bitrate</button>
                <button onClick={this.resolutionClick} className="resolution">Resolution</button>
            </div>
        );
    }
}