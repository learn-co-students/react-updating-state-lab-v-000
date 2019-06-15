import React from 'react';

class YouTubeDebugger extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            errors: [], 
            user: null, 
            settings: { 
                bitrate: 8, 
                video: { resolution: '1080p' } 
            } 
        };
    }

    clickHandlerBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        });
    }

    clickHandlerResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: { resolution: '720p' }
            }
        });
    }

    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.clickHandlerBitrate}>Bitrate</button>
                <button className='resolution' onClick={this.clickHandlerResolution}>Resolution</button>
            </div>
        )
    }
}

export default YouTubeDebugger;