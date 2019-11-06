// Code YouTubeDebugger Component Here

import React from 'react'

class YouTubeDebugger extends React.Component {
  constructor() {
    super()
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


increaseBitRate = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings,{
        bitrate: 12
      }),
   });
 }

  increaseResolution = () => {
      this.setState({
        settings: Object.assign({}, this.state.settings,{
          video: Object.assign({}, this.state.settings.video, {
            resolution: '720p'
          }),
      }),
    });
  };


render() {
return (
<div>
<button className='bitrate' onClick={this.increaseBitRate}/>
<button className='resolution' onClick={this.increaseResolution} />
</div>
)
}

}

export default YouTubeDebugger;
