// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

export default class YouTubeDebugger extends Component{

constructor(props){
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

 changeBit= ()=>{
   this.setState({
     settings: Object.assign({},
     this.state.settings,{
       bitrate: 12
     })
   })
 }

 changeRes = ()=>{
   this.setState({
     settings: Object.assign({},
     this.state.settings,{
       video: Object.assign({},
     this.state.settings.video,{
       resolution: '720p'})

     })
   })
 }



  render(){

    return(
      <div>
      <button className='resolution' onClick={this.changeRes}>{this.state.settings.video.resolution}</button>
      <button className='bitrate' onClick={this.changeBit}>{this.state.settings.bitrate}</button>

      </div>

    )
  }
}
