const React = require('react');


class YouTubeDebugger extends React.Component{
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
    };
     // state 
    this.handleBitClick = this.handleBitClick.bind(this);
    this.handleVidClick = this.handleVidClick.bind(this);
  }//constructor

  handleBitClick() {
      this.setState({
        settings: Object.assign({}, this.state.settings, {
          bitrate: 12
        }),
      });
    }

    handleVidClick() {
      this.setState({
        settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
            resolution: '720p'
          })
        }),
      });
    }

      
  render(){
    return(
        <div>
          <button className="bitrate" onClick={this.handleBitClick}>Update Bitrate </button>
          <button className="resolution" onClick={this.handleVidClick}>Update Resolution </button>
        </div>
      );
   }
} //component

module.exports = YouTubeDebugger;
