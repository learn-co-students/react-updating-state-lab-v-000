import React from 'react';

// first attempt 5/1/18
// export default class YouTubeDebugger extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       errors: [],
//       user: null,
//       settings: {
//         bitrate: 8,
//         video: {
//           resolution: '1080p'
//         }
//       }
//     }
//   }
//
//   updateBitrate = () => {
//     this.setState({
//       settings: {
//         ...this.state.settings,
//         bitrate: 12
//       }
//     })
//   }
//
//   updateResolution = () => {
//     this.setState({
//       settings: {
//         ...this.state.settings,
//         video: {
//           ...this.state.settings.video,
//           resolution: '720p'
//         }
//       },
//     })
//   }
//
//   render(){
//     return(
//       <div>
//         <button className="bitrate" onClick={this.updateBitrate}>Change Bitrate</button>
//         <button className="resolution" onClick={this.updateResolution}>Change Resolution</button>
//       </div>
//     )
//   }
// }
// second attempt 11/7/18
export default class YouTubeDebugger extends React.Component {
  constructor(){
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

  handleBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleResolution = () =>{
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitrate}>Change Bitrate</button>
        <button className="resolution" onClick={this.handleResolution}>Change Resolution</button>
      </div>
    )
  }
}
