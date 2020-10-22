import React from 'react';
import './Welcome.css';
import {Spring, config} from 'react-spring/renderprops';

export default class Welcome extends React.Component {
	constructor() {
		super();
		this.state= {
			right:0,
			left:0
		}
	}

	componentDidMount = () => {
		( () => {
			let header = document.querySelector('.welcome');
			let rect = header.getBoundingClientRect();
			console.log(rect)
		})()
	}

	render(){
		return(
			<div className="container">
				<Spring
					config={config.molasses}
					from={{width: '0%',left:"200%"}}
					to={{width: '50%',left:"0%"} }
				>
					{props => <div className="mt6 lh-solid tl white Courier welcome welcomeRight" style={props}>Celine</div>}
				</Spring>
				<Spring
					config={config.molasses}
					from={{width: '0%', right:"200%"}}
					to={{width: '100%', right:"100%"}}
				>
					{props => <div className="lh-solid tr white Courier welcome " style={props}>Akcag</div>}
				</Spring>
			</div>	
		)
	}
}

