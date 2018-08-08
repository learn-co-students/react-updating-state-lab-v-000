// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

export default class YouTubeDebugger extends Component {
    constructor(){
        super();
        this.state={
            
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
    
    changeBitrate=(event)=>{
        const newBitrate=12
        this.setState({
            
            settings: {...this.state.settings, bitrate: newBitrate,}
        })
    }
    
    changeRes=(event)=>{
        const newRes='720p'
        this.setState({
            settings: {...this.state.settings, video: {resolution: newRes}}
        })
    }
    
    
    render(){
        return (
            <div>
                <button className="bitrate" onClick={this.changeBitrate}></button>
                <button className="resolution" onClick={this.changeRes}></button>
            </div>
        )
    }
    
    
    
}