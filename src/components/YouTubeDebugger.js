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
 
	updateBitrate = () => {
		this.setState({
		  settings: {
		    ...this.state.settings,
		    bitrate: 12,
		  },
		});
	}

	updateResolution = () => {
		this.setState({
		  settings: {
		    ...this.state.settings,
		    video: {
		    	...this.state.settings.video,
		    	resolution: '720p'
		    }
		  },
		});
	}

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.updateBitrate}>Update bitrate</button>
        <button className="resolution" onClick={this.updateResolution}>Update resolution</button>
      </div>
    );
  }
}
 
export default YouTubeDebugger;

