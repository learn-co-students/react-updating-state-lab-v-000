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

  handleBitrateClick = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12,
      })
   });
 }

 handleResolutionClick = () => {
   this.setState({
     settings: Object.assign({}, this.state.settings, {
       video: Object.assign({}, this.state.video, {
         resolution: '720p',
     })
   })
 });
}

 render() {
   return (
     <div>
      <button onClick={this.handleBitrateClick} className="bitrate" />
      <button onClick={this.handleResolutionClick} className="resolution" />
     </div>
   );
 }
}
