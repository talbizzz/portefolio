import React from 'react';
import Header from './Header/Header';
import About from './About/About';
import Appointments from './Appointments/Appointments.js';
import './HomePage.css'

export default class HomePage extends React.Component {
	constructor() {
		super(); 
		this.state= {
	  		marginTop : ""
		}
	}

	componentDidMount = () => {
		let header = document.querySelector('.about');
		let rect = header.getBoundingClientRect();
		this.setState({marginTop : (parseInt(rect.height).toString() + "px") });
	}

	render() {
		return(
			<div>
                <About  className="about"/>
                <Appointments marginTop={this.state.marginTop}/>
			</div>
		)
	}
}