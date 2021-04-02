// Code YouTubeDebugger Component Here

import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
	constructor(props){
		super()

		this.state =     {
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

	clickHandlerBitRate = () => {
		this.setState({
			settings: {
									...this.state.settings,
									bitrate: 12
							}
		})
	}

	clickHandlerResolution = () => {
		this.setState({
			settings: {
									...this.state.settings,
									video: {
										resolution: '720p'
									}
							}
		})
	}

	render(){
		return( 
						<div>
							<button className="bitrate" onClick={this.clickHandlerBitRate}></button>
						 	<button className="resolution" onClick={this.clickHandlerResolution}></button>
						</div>
					 )
	}
}

