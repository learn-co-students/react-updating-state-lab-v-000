import React from 'react';

export default class YouTubeDebugger extends React.Component{
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
        };
    }
    handleChangeResolution = () => {
        this.setState({
            settings: {...this.state.settings, video: {...this.state.settings.video, resolution: '720p' }}
        });
    }
    
       // settings: Object.assign({}, this.state.settings, {video: Object.assign({}, this.state.settings.video, {resolution: '720p'}) })


    handleChangeBitrate = () => {
        this.setState({
            settings: {...this.state.settings, bitrate: 12 }
        });
        // this.setState({
        //     settings: Object.assign({}, this.state.settings, { bitrate: 12}),
        // });
    }

 
    render(){
        return(
            
            <div>
            <button className="bitrate" onClick={this.handleChangeBitrate}>{this.state.settings.bitrate}</button>
            <button className="resolution" onClick={this.handleChangeResolution}>{this.state.settings.video.resolution}</button>
            </div>
        );
    }
}