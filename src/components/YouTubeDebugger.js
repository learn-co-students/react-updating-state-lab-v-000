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

  handleClick = () => {
    const settings = {...this.state.settings};
    settings.bitrate = 12;
    this.setState({settings});
    }

  handleResolution = () => {
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

	render() {
		return (
			<div>
        <button className="bitrate" onClick={this.handleClick}>{this.state.settings.bitrate}</button>
        <button className="resolution" onClick={this.handleResolution}>{this.state.settings.video.resolution}</button>
      </div>
		);
	}
}

export default YouTubeDebugger;
