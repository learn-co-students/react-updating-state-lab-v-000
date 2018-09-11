// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
    constructor() {
        super()
        this.state = { 
            errors: [], 
            user: null, settings: { bitrate: 8, video: { resolution: '1080p' } }
            }
    }
    
    clickHandler = () => {
        this.setState({
            settings: {
            ...this.state.settings, 
                bitrate: 12,
            }
        })
    }
    
    resHandler = () =>
        this.setState({
            settings: {
            ...this.state.settings,
            video: {
            ...this.state.settings.video,
                resolution: '720p',
            }
            }
        })
    
    render() {
        return (
            <div>
            <button className='bitrate' onClick={this.clickHandler}>bitrate</button>
            <button className='resolution' onClick={this.resHandler}>resolution</button>
            </div>
            )
    }
}

export default YouTubeDebugger