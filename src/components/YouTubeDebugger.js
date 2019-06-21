import React, { Component } from 'react'

class YouTubeDebugger extends Component{

    constructor(props){
        super(props)
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

    adjustBitrate = () => this.adjustSettings({bitrate: 12})

    adjustResolution = () => this.adjustSettings({video: {resolution: '720p'}})

    adjustSettings = (newSetting) => {
        console.log(this.state)
        this.setState({
            settings: {
                ...this.state.settings,
                ...newSetting
            }
        }, () => console.log(this.state))
    }

    render(){
        return (
            <div>
                <button className={"bitrate"} onClick={this.adjustBitrate}></button>
                <button className={"resolution"} onClick={this.adjustResolution}></button>
            </div>

        )
    }
}

export default YouTubeDebugger
