import React, {useState, useEffect} from 'react';

const initialSettings = {
  		errors: [],
  		user: null,
  		settings: {
    		bitrate: 8,
    		video: {
      			resolution: '1080p'
    		}
  		}
	}

const YouTubeDebugger = (props) => {
	const [stateSettings, setStateSettings] = useState(initialSettings);

	const {settings:{bitrate, video:{resolution}}} = stateSettings;

	useEffect(()=>{}, [bitrate, resolution]);

	return (
		<React.Fragment>
		<div className="container">
			<div className="btnContainer">
				<button className="btn bitrate"
					onClick={() => setStateSettings({
  						errors: [],
  						user: null,
  						settings: {
    						bitrate: 12,
    						video: {
      							resolution
    						}
  						}
					})}
					>
						Adjust Bitrate
					</button>				
					<button className="btn bitrate"
					onClick={() => setStateSettings({
  						errors: [],
  						user: null,
  						settings: {
    						bitrate,
    						video: {
      							resolution: '720p'
    						}
  						}
					})}
				>
					Adjust Resolution
				</button>
				{(bitrate===12 || resolution==='720p') &&
					<button className="btn reset"
						onClick={() => setStateSettings(initialSettings)}
					>
						Reset Values
					</button>
				}				
			</div>			
		</div>
		<p className="settings"><span style={{fontWeight:"bold"}}>BITRATE : </span>{bitrate}</p>			
		<p className="settings"><span style={{fontWeight:"bold"}}>RESOLUTION : </span>{resolution}</p>
		</React.Fragment>
	)
}

export default YouTubeDebugger;
// Code YouTubeDebugger Component Here
