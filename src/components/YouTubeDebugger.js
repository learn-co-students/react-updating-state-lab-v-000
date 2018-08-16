import React, { Component } from 'react'
export default class YouTubeDebugger extends Component{

    constructor(){
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

    bitrateButton = () => {
        this.setState({
            settings: {
                ...this.state.settings, 
                bitrate: 12
            }
        })
    }

    resolutionButton = () => {
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
        return(
            <React.Fragment>
            <button onClick={this.bitrateButton} className="bitrate">Update Bitrate</button>
            <br/>
            <button onClick={this.resolutionButton} className="resolution">Resolution</button>
            </React.Fragment>
        )
    }
}