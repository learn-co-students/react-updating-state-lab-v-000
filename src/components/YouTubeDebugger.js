// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {
  constructor() {
  super();

  // Define the initial state:
  this.state = {
     errors: [],
      user: null,
      settings: { bitrate: 8,
        video: { resolution: '1080p' } }

  };
}
handleClick = () => {
  this.setState({
  settings: Object.assign({}, this.state.settings, {
    bitrate: 12,
  }),
});
}

handleResolutionChange = () => {
  this.setState({
  settings: Object.assign({}, this.state.settings, {
    video: Object.assign({}, this.state.settings.video, {
         resolution: '720p'
       })
  }),
});
}

render() {
  return (
    <div>
       <button
         className="bitrate"
         onClick={this.handleClick}
       >
         Change bitrate
       </button>
       <button
         className="resolution"
         onClick={this.handleResolutionChange}
       >
         Change resolution
       </button>
     </div>
  );
}
}
