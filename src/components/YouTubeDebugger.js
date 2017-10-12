// Code YouTubeDebugger Component Here
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
        resolution: '1080p' }
      }
    };
  }

  // bitClick = () => {
  //   this.setState({
  //     settings: {
  //       ...this.state.settings,
  //       bitrate: 12,
  //     }, 
  //   });
  // }


  // bitClick = () => {
  //   let newSettings = _.extend({}, this.state.settings);
  //   newSettings.bitrate = 12;
  //   this.setState({ settings: newSettings });
  //   console.log(this.state)
  // }

  bitClick = () => {
    var newSettings = React.addons.update(this.state, {
      settings: {
        bitrate: { $set: 12 }
      }
    });
    this.setState(newSettings);
  }

  // bitClick = () => {
  //   this.setState({
  //     settings: Object.assign({}, this.state.settings,
  //   {
  //     bitrate: 12
  //     })
  //   })
  // }

  bitResolve = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p',
        },
      },
    });
  }

  // bitResolve = () => {
  //   this.setState({
  //     video: Object.assign({}, this.state.settings.video,
  //     {
  //       resolution: '720p',
  //     }),
  //   })
  // }




  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.state.bitClick}>Bitrate me!</button><br></br>
        <button className='resolution' onClick={this.state.bitResolve}>Resolutionize me!!</button>
      </div>
    );
  }
}

export default YouTubeDebugger;





















// In the components/YouTubeDebugger.js file, create a YouTubeDebugger 
// React component.
// This component has several state properties. The initial state shape 
// looks like this: 
// js { errors: [], user: null, 
//   settings: { bitrate: 8, video: { resolution: '1080p' } } }
// Create a button with the class 'bitrate'. 
// Clicking this button changes the settings.bitrate state property to 12.
// Create a button with the class 'resolution'. 
// Clicking this button changes the settings.video.resolution state 
// property to '720p'.
