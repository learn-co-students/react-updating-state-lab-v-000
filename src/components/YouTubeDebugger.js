import React from 'react'

export default class YouTubeDebugger extends React.Component {

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

      handleClick = () => {
        this.setState({
            video: {
                ...this.state.settings.video.resolution,
                bitrate: this.statesettings.bitrate
              }
        })
      };
     
      render() {
        return (   
            <div>     
            <button class="bitrate" onClick={this.handleClick}>{this.state.timesClicked}</button>
            <button class="resolution" onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
        );
    }
}
