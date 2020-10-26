import React from 'react';
import './Welcome.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class Welcome extends React.Component {
	componentDidMount = () => {
		console.log(window.scrollY)
	} 
	render(){
		AOS.init();
		return(
			<div >
				<div className="mt6">
					<div className="aosAnchor"></div>
					<div 
						className="washed-red tl welcome" 
						data-aos="fade-right" 
						data-aos-duration="1000" 
						data-aos-mirror="true"
						data-aos-anchor=".aosAnchor"

					>
						Celine
					</div>
					<div 
						className="washed-red tr welcome" 
						data-aos="fade-left" 
						data-aos-duration="1000" 
						data-aos-mirror="true"
						data-aos-anchor=".aosAnchor"
					>
						Akcag
					</div>
				</div>
				
				<div 
					className="washed-red tc" 
					data-aos="fade-down" 
					data-aos-anchor=".aosAnchor2" 
					data-aos-duration="1000" 
					data-aos-mirror="true"
				>
					<div className="aosAnchor2 mt6"></div>
					<span className="welcome f-headline lh-solid ">lyrischer Mezzosopran</span>
					<div className="aosAnchor3 mt6"></div>					
				</div>
				
			</div>		
		)
	}
}

