import React from 'react';

export default class YouTubeDebugger extends React.Component {
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
    }

    handleChangeBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleChangeResolustion = () => {
        this.setState({
            settings:{
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
                <button onClick={this.handleChangeBitrate} className='bitrate'>{this.state.settings.bitrate}</button>
                <button onClick={this.handleChangeResolustion} className='resolution'>{this.state.settings.video.resolution}</button>
            </div>
            )
    }


}
