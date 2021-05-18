import { render } from 'enzyme';
import React from 'react';
// Code YouTubeDebugger Component Here
export default class YouTubeDebugger extends React.Component{
    constructor(props){
        super(props);
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
    handleClickBitrate=()=>{
        this.setState({
            settings:{
                ...this.state.settings,
                bitrate:12
            }
        })
    }
    handleClickResolution=()=>{
        this.setState({
            settings:{
                ...this.state.settings,
                video:{
                    ...this.state.settings.video,
                    resolution:'720p'
                }
            }

        })
    }
    render(){
        return(
            <div>
                <button className="bitrate" onClick={this.handleClickBitrate}></button>
                <button className="resolution" onClick={this.handleClickResolution}></button>
            </div>
        )
    }
}