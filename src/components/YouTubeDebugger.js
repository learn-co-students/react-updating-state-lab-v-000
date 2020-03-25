import React from 'react';

class YouTubeDebugger extends React.Component {
    constructor() {
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

    handleChangeBitrate = () => {
        this.setState(previousState => {
            return {
                settings: {
                    ...previousState.settings,
                    bitrate: 12
                }
            }
        })
    }

    handleChangeResolution = () => {
        this.setState(previousState => {
            return {
                settings: {
                    ...previousState.settings,
                    video: {
                        ...previousState.settings.video,
                        resolution: '720p'
                    } 
                }
            }
        })
    }

    render() {
        return(
            <div>
                <button className='bitrate' onClick={this.handleChangeBitrate}>Change Bitrate</button>
                <button className='resolution' onClick={this.handleChangeResolution}>Change Resolution</button>
            </div>
        )
    }
}

export default YouTubeDebugger;