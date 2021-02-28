import React, {useState, useEffect} from 'react';

const DigitalClicker = (props) => {
	const [timesClicked, setTimesClicked] = useState(0);

	useEffect(()=>{}, [timesClicked]);

	return (
		<div className="container">
			<button className="btn"
				onClick={()=>setTimesClicked(timesClicked + 1)}
			>
				{timesClicked}
			</button>
			{timesClicked > 0 &&
				<button className="btn reset"
					onClick={()=>setTimesClicked(0)}
				>
					reset count
				</button>
			}			
		</div>
	)
}

export default DigitalClicker;
