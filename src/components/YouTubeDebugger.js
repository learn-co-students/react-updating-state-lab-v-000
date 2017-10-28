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

    handleClickBitrate = (e) => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        });

        /*
        this.setState({
            settings: Object.assign({}, this.state.settings, {
                bitrate: 12
            })
        });
        */
    }

   handleClickResolution = (e) => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.video,
                    resolution: '720p'
                }
            }
        });

        /*
        this.setState({
            settings: Object.assign({}, this.state.settings, {
                video: Object.assign({}, this.state.video, {
                    resolution: '720p'
                })
            })
        })
        */
   }
    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.handleClickBitrate}>
                    Change bitrate: {this.state.settings.bitrate}
                </button>
                <br />
                <button className="resolution" onClick={this.handleClickResolution}>
                    Change resolution: {this.state.settings.video.resolution}
                </button>
            </div>
        )
    }
}

export default YouTubeDebugger;


