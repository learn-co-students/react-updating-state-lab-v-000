// Code YouTubeDebugger Component Here
// Code DigitalClicker Component Here
import React, { Component } from 'react';

    class YouTubeDebugger extends Component { 
        
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
            };
        }

        handleChangeBit = () => {
            this.setState({
                settings: {
                    ...this.state.settings,
                    bitrate: 12
                }
            });
        };

        handleChangeRes = () => {
            this.setState({
                settings: {
                    ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                resolution: '720p'
                }
            }
        });
        }

        /*
    Or this can be defined using the Object.assign method:
    
        this.setState({
            settings: Object.assign({}, this.state.settings, {
                video: Object.assign({}, this.state.settings.video, {
                resolution: '720p'
                })
            })
        });
        */


        render() {
            return(
                <div>
                    <button className="bitrate" onClick={this.handleChangeBit}>Change Bitrate</button>
                    <button className="resolution" onClick={this.handleChangeRes}>Change Resolution</button>
                </div>
            )
        }

    }

export default YouTubeDebugger;