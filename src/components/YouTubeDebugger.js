// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

class YouTubeDebugger extends Component {
    constructor(){
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
    
    handleSetBitrate = () => {
        this.setState(previousState =>{ 
            return {
             settings: {
                 ...previousState.settings,
                 bitrate: 12
             }
            }
        });
    }

    handleSetResolution = () => {
        this.setState( previousState => {
            return {
                settings: {
                    ...previousState.settings,
                    video: {
                        resolution: '720p'
                    }
                }
            }
        })
    }

    render(){
        return(
            <div>
            <button className='bitrate' onClick={this.handleSetBitrate}>Set Bitrate</button>
            <button className='resolution' onClick={this.handleSetResolution}>Set Resolution</button>
            </div>
        )
    }
}

export default YouTubeDebugger