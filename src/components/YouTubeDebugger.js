import React from 'react';

export default class YoutubeDebugger extends React.Component {
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

 bitrateClicked = () => {
   this.setState({
     settings: Object.assign({}, this.state.settings, {
       bitrate: 12
     })
   })
 }

 resClicked = () => {
   this.setState({
     settings: Object.assign({}, this.state.settings, {
       video: Object.assign({}, this.state.settings.video, {
         resolution: '720p'
       })
     })
   })
 }

  render() {
    return (
      <div>
      <label>Bitrate</label><br></ br>
      <button className="bitrate" onClick={this.bitrateClicked}>{this.state.settings.bitrate}</button>
      <br></ br>
      <label>Resolution</label><br></ br>
      <button className="resolution" onClick={this.resClicked}>{this.state.settings.video.resolution}</button>
      </div>
    );
  }
}
