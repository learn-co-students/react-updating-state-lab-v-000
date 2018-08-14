import React, {Component} from 'react'
 export default class YouTubeDebugger extends Component {
    constructor(){
        super();
        this.state={ errors:[], 
        			 user: null,
        			 settings: {
        			 	bitrate: 8,
        			 	video: { 
        			 		resolution: '1080p'
        			 	}
        			}
        }     
    }
    
    handleBitrateClick=() => {
        const newBitrate=12
        this.setState({
            
            settings: {...this.state.settings, bitrate: newBitrate,}
        })
    }
    
    handleResolutionClick=() => {
        const newResolution='720p'
        this.setState({
            settings: {...this.state.settings, video: {resolution: newResolution}}
        })
    }
    
    
    render(){
        return (
            <div>
                <button className="bitrate" onClick={this.handleResolutionClick}></button>
                <button className="resolution" onClick={this.changeRes}></button>
            </div>
        )
    }
} 