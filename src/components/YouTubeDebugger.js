import React from 'react'

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
    }
    
    changeBitrate = () => {
        this.setState({
            settings: {...this.state.settings, bitrate: 12}
        })
        console.log(this.state)
    }
        
    changeResolution = () => {
        this.setState({
            
        })
    }
    
    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.changeBitrate}>Raise Bitrate, Current Bitrate: {this.state.settings.bitrate}</button>
                
                <button className="resolution" onClick={this.changeResolution}>Lower Resolution</button>
            </div>
        )
    }
}