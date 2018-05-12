import React from 'react';

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = {
        errors: [],
        user: null,
        settings:
          { bitrate: 8,
            video: { resolution: '1080p' }
          }
        };
      };

  handleBitClick = () => {
    this.setState({
      settings: { ...this.state.settings,
        bitrate: 12
      }
    },  () => console.log(this.state.settings))
  };

  handleResClick = () => {
    this.setState({
      settings: { ...this.state.settings, video: { ...this.state.settings.video, resolution: '720p'}}
    });
  };

  render() {
    return(
      <div>
        <button className="bitrate" onClick={this.handleBitClick}>{this.state.settings.bitrate}</button><br />
        <button className="resolution" onClick={this.handleResClick}>{this.state.settings.video.resolution}</button>
      </div>
    )};
};
