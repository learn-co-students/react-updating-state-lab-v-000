// Code YouTubeDebugger Component Here
import React, { Component } from "react";

export default class YouTubeDebugger extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } } }
  }

  changeState = () => {
    if (this.props.type === "bitrate") {
      this.setState({settings:{...this.state.settings, bitrate: 12}},()=>console.log(this.state));
    } else if (this.props.type === "resolution") {
      this.setState({settings:{...this.state.settings, video: {resolution:"720p"}}},()=>console.log(this.state));
    }
  }
  
  render() {
    return (
      <div>
        <button className="bitrate" onClick={() => this.setState({settings:{...this.state.settings, bitrate: 12}},()=>console.log(this.state))}>Bitrate</button>
        <button className="resolution" onClick={() => this.setState({settings:{...this.state.settings, video: {resolution:"720p"}}},()=>console.log(this.state))}>Resolution</button>
      </div>
  );
  }
}