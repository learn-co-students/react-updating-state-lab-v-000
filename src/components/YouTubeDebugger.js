// Code YouTubeDebugger Component Here
import React from 'react';


export default class YouTubeDebugger extends React.Component {

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
}
  }



  changeBitRate = () => {
    this.setState({
      settings: {...this.state.settings,
      bitrate: 12
    }
    })
  }

  changeResolution = () => {
    this.setState({
      settings: {...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }


//   {
//     theme: 'blue',
//     addressInfo: {
//       street: null,
//       number: null,
//       city: null,
//       country: null
//     },
//   }
//
//   this.setState({
//   addressInfo: {
//     ...this.state.addressInfo,
//     city: 'New York City'
//   }
// });


  render() {
    return(
      <div>
        <button className="bitrate" onClick={ this.changeBitRate }> </button>
        <button className="resolution" onClick={ this.changeResolution }> </button>
      </div>
    )
  }
}

//
// {
//   theme: 'blue',
//   addressInfo: {
//     street: null,
//     number: null,
//     city: null,
//     country: null
//   },
// }
// // .....
// {
//   theme: 'blue',
//   addressInfo: {
//     street: null,
//     number: null,
//     city: null,
//     country: null
//   }
// }
// // ....




// to remember-
// putting 'this' when using setState()
// should the button's 'class' be className? or different in jsx?
