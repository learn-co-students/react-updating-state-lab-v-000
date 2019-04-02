// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {

  constructor() {
    super()
    this.state = { errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } } }
  }

  newBitrate = () => {
  
    this.setState({
        settings: {
          ...this.state.settings,
          bitrate: 12
        },
      });
  }

  render() {

    return (
      <div>
    	<button className="bitrate" onClick={this.newBitRate}>
    		Bitrate
    	</button>

    	<button className="resolution">
    		
    	</button>
      </div>
    )
  }
}

export default YouTubeDebugger;