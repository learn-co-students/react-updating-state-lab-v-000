// Code YouTubeDebugger Component Here
import React from 'react';


export default class YouTubeDebugger extends React.Component {
  constructor(props) {
    super(props);

      this.state = {
          errors: [],
          user: null,
          settings: {
            bitrate: 8,
            video: {
              resolution: '1080p'
            },
          },
        } // End of this.state=
    }

    handleClickBitrate = () => {
      const newBitrate = 12;

      this.setState({
          ...this.state,
          settings: {
            ...this.state.settings,
            bitrate: newBitrate,
            video: {
              ...this.state.settings.video
            },
          },
      })
    }

    handleClickResolution = () => {
      const newRes = '720p';

      this.setState({
        ...this.state,
        settings: {
          ...this.state.settings,
          video: {
            resolution: newRes
          },
        },
      })
    }


    render() {
      return (
        <div className="YouTubeDebugger">
         <button className="bitrate" onClick={this.handleClickBitrate}>Bitrate</button>
         <button className="resolution" onClick={this.handleClickResolution}>Resolution</button>
        </div>
       )
    }
}
