import React, { Component } from "react";

export default class YouTubeDebugger extends Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p"
        }
      }
    };
  }

  updateBitrate = _ => {
    this.setState(state => ({
      settings: {
        ...state.settings,
        bitrate: 12
      }
    }));
  };

  updateResolution = _ => {
    this.setState(state => ({
      settings: {
        ...state.settings,
        video: { resolution: "720p" }
      }
    }));
  };

  render() {
    const {
      settings: {
        bitrate,
        video: { resolution }
      }
    } = this.state;
    return (
      <div>
        <button className="bitrate" onClick={this.updateBitrate}>
          {bitrate}
        </button>
        <button className="resolution" onClick={this.updateResolution}>
          {resolution}
        </button>
      </div>
    );
  }
}
