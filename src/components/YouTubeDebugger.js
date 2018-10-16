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
    };
  }

   handleClick = () => {
     this.setState({
       settings: Object.assign({}, this.state.settings, {bitrate: 12})
     });
   }

   manageClick = () => {
     this.setState({
       settings: Object.assign({}, this.state.settings, {
         video: Object.assign({}, this.state.settings.video, {
           resolution: '720p'
         })
       })
     });
   }

   render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleClick}>Click here to update settings for bitrate.</button>
        <button className="resolution" onClick={this.manageClick}>Click here to update settings for video resolution.</button>
      </div>
    );
  }
}

 export default YouTubeDebugger;
