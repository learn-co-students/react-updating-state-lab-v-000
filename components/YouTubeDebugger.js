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
    } // state 
    this.handleBitClick = this.handleBitClick.bind(this);
    this.handleVidClick = this.handleVidClick.bind(this);
  }//constructor

handleBitClick(){
  this.setState({
    settings: Object.assign({}, this.state.settings,
      { 
        bitrate: 12
      }), 
  }); // setState
} // handleBitClick

handleVidClick(){
  this.setState({
    video: Object.assign({}, this.state.video,
      {
        resolution: '720p'
    }),
  }) //setState
} // handleVidClick

render(){
  return(
    <div>
      <button onClick={this.handleBitClick}>Update Bitrate </button>
      <button onClick={this.handleVidClick} >Update Resolution </button>
    </div>
    )
 }

} //component

module.exports = YouTubeDebugger;
