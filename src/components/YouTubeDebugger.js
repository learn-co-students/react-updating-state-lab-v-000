// Code YouTubeDebugger Component Here
import React from 'react'
class YouTubeDebugger extends React.Component{
    constructor(){
        super()
        this.state =
            {
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
    handleBitrate = () => {
        this.setState({
           settings: {
               ...this.state.settings,
               bitrate: 12
           }
        })
    }
    handleResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.handleBitrate} className="bitrate">Bitrate: {this.state.settings.bitrate} </button>
                <button onClick={this.handleResolution} className="resolution">Resolution: {this.state.settings.video.resolution} </button>
            </div>
        )
    }
}

export default YouTubeDebugger;