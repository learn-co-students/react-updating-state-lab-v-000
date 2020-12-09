import React, { Component } from "react";

class YoutubeDebugger extends React.Component {
    constructor(props) {
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

        this.handleClickBitrate = this.handleClickBitrate.bind(this);
        this.handleClickResolution = this.handleClickResolution.bind(this);
    } // end of constructor

    handleClickBitrate(event) {
        this.setState({
            settings: Object.assign({}, this.state.settings, {
                bitrate: 12
            }),
        });
    } // end of handleClickBitRate Event

    handleClickResolution(event) {
        this.setState({
            settings: Object.assign({}, this.state.settings, {
                video: Object.assign({}, this.state.settings.video, {
                    resolution: '720p'
                })
            })
        });
    } // end of handleClickResoultion Event

    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.handleClickBitrate}>Change bitrate</button>
                <button className="resolution" onClick={this.handleClickResolution}>Change resolution</button>
            </div>
        );
    }
} // end of class

export default YoutubeDebugger;