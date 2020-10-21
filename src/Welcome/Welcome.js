import React from 'react';
import './Welcome.css';
import {useSpring, animated, interpolate} from 'react-spring'

const Welcome = () => {
	return(
		<div className="container pa7">
			<h1 className="tl white baskerville welcome">Welcome !</h1>
			<h3 className="tl white baskerville welcome">let's learn more about Celine</h3>
		</div>	
	)
}

export default Welcome;