import React from 'react';

class YoutTubeDebugger extends React.Component {
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

    handleClickA = () => {
        this.setState({
            settings: {
                ...this.state.settings,           
                bitrate: 12,
        },
    });
    }

    handleClickB = () => {
        this.setState({
            settings: {
                ...this.state.settings,           
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
        },
    });
    }



    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.handleClickA}>Bitrate</button>
                <button className="resolution" onClick={this.handleClickB}>Resolution</button>
            </div>
        )
    }
}

export default YoutTubeDebugger

