import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
    constructor() {
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

     handleChangeBitrateClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        }, () => console.log(this.state))
        //after asynchronous state change or before it finishes...
        console.log(this.state)
     }

     handleChangeResolutionClick = () => {
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

     render() {
        return (
            <div>
                <button className="bitrate" onClick={this.handleChangeBitrateClick}>Change bitrate</button>
                <button className="resolution" onClick={this.handleChangeResolutionClick}>Change resolution</button>
            </div>
        )
     }
}
