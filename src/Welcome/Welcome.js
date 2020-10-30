import React from 'react';
import './Welcome.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class Welcome extends React.Component {
	 componentDidMount = () => {
	 	document.documentElement.scrollTop = 0;
	 }
	render(){
		AOS.init();
		return(
			<div>
				<div className="mt6">
					<div className="aosAnchor"></div>
					<div 
						className="washed-red tl welcome" 
						data-aos="fade-right" 
						data-aos-duration="1000" 
						data-aos-mirror="true"
						data-aos-anchor=".aosAnchor"
						style={{fontFamily:"Mak", color:"#C1995B"}}

					>
						Celine
					</div>
					<div 
						className="washed-red tr welcome" 
						data-aos="fade-left" 
						data-aos-duration="1000" 
						data-aos-mirror="true"
						data-aos-anchor=".aosAnchor"
						style={{fontFamily:"Mak", color:"#C1995B"}}
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
					<div className="aosAnchor2 mt5"></div>
					<span className="welcome f-headline lh-solid " style={{fontFamily:"Mak", color:"#C1995B"}}>lyrischer Mezzosopran</span>
					<div className="aosAnchor3 mt1"></div>					
				</div>

				<div 
					className="mt5 mb6 w-30 center"
					data-aos="fade-down" 
					data-aos-anchor=".aosAnchor3" 
					data-aos-duration="1000" 
					data-aos-mirror="true"
				>
					<a 
						className="center f1 grow no-underline  ph3 pv2 mb2 dib washed-red" 
						style={{fontFamily:"Mak"}}
						onClick={this.props.onClickChange}
						href='/'
					>
						<p className="tc pointer" style={{fontFamily:"Mak", color:"#C1995B"}}>Learn more</p>
					</a>
				</div>
				
			</div>		
		)
	}
}

