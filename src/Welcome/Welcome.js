import React from 'react';
import './Welcome.css';
import {Spring, config} from 'react-spring/renderprops';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

export default class Welcome extends React.Component {
	componentDidMount = () => {
		console.log(window.scrollY)
	} 
	render(){
		AOS.init();
		return(
			<div>
				<div className="container">
				</div>
				<div className="mt6">
					<div className="alternative"></div>
					<div 
						className="lh-solid tl white  welcome welcomeRight" 
						data-aos="fade-right" 
						data-aos-duration="1000" 
						data-aos-mirror="true"
						data-aos-anchor=".alternative"

					>
						Celine
					</div>
					<div 
						className="lh-solid tr white  welcome myDIV " 
						data-aos="fade-left" 
						data-aos-duration="1000" 
						data-aos-mirror="true"
						data-aos-anchor=".alternative"
					>
						Akcag
					</div>
				</div>
				<div className="tc mb7" 
					data-aos="fade-down" 
					data-aos-anchor=".alternative2" 
					data-aos-duration="1000" 
					data-aos-mirror="true"
				>
					<div className="alternative2 mt6"></div>
					<span className="white welcome f-headline lh-solid ">lyrischer Mezzosopran</span>
					<div className="alternative3 mt6"></div>					
				</div>
				<div className="mb7 center w-50">
					<p><a 
						href="#" 
						className="link link1 dim white-90 welcome f-headline lh-solid" 
						data-aos="fade-up" 
						data-aos-duration="3000"
						data-aos-anchor=".alternative3"
					>
						About
					</a></p>
					<p><a 
						href="#" 
						className="link link2 dim white-90 welcome f-headline lh-solid" 
						data-aos="fade-up" 
						data-aos-duration="3000"
						data-aos-anchor=".link1"
					>
						Termine
					</a></p>
					<p><a 
						href="#" 
						className="link link3 dim white-90 welcome f-headline lh-solid" 
						data-aos="fade-up" 
						data-aos-duration="3000"
						data-aos-anchor=".link2"
					>
						Galerie
					</a></p>
					<p><a 
						href="#" 
						className="link 4 dim white-90 welcome f-headline lh-solid" 
						data-aos="fade-up" 
						data-aos-duration="3000"
						data-aos-anchor=".link3"
					>
						Media
					</a></p>
				</div>	
			</div>		
		)
	}
}

