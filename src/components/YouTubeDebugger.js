// Code YouTubeDebugger Component Here
import React, {Component} from 'react';

export default class YouTubeDebugger extends Component {
    constructor(props){
        super(props)
        this.state= { 
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

    bitrateButtonHandler = () => {
        this.setState({
            settings: {
                ...this.state.settings, 
                bitrate: 12
            }
        })
    }

    resolutionButtonHandler = () => {
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
            <div>
            <button className="bitrate" onClick={this.bitrateButtonHandler}>Bitrate</button>
            <button className="resolution" onClick={this.resolutionButtonHandler}></button>
            </div>
        )
    }
}