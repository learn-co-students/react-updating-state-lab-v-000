// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component{
    constructor(){
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
        this.changeBitRate = this.changeBitRate.bind(this)
        this.changeResolution = this.changeResolution.bind(this)
    }

    changeBitRate(e){
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12,
            }            
        })
    }

    changeResolution(e){
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }            
        })
    }
    render(){
        return (
            <div>
                <button onClick={this.changeBitRate} className="bitrate">Bitrate</button>
                <button className="resolution" onClick={this.changeResolution}>Resolution</button>
            </div>
        )
    }
}

export default YouTubeDebugger;