// Code YouTubeDebugger Component Here
import React from 'react';
 
class YouTubeDebugger extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
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
 
	handleBitClick = () => {
		this.setState({
			settings: {
				...this.state.settings,
				bitrate: 12
			}
		}, () => console.log(this.state))
	}
 
	handleResClick = () => {
		this.setState({
			settings: {
				...this.state.settings, 
				video: { 
					resolution: '720p'
				}
			}
		}, () => console.log(this.state))
	}

  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.handleBitClick}>Change Bitrate!</button>
        <button className='resolution' onClick={this.handleResClick}>Change Resolution!</button>
      </div>
    );
  }
}
 
export default YouTubeDebugger;
