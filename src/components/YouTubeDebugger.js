// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {
    constructor() {
        super()
        this.state = {
            js: { 
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
    }
    render() {
        return (
            <button></button>
        )
    }
}

