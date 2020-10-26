import React from 'react';
import './About.css';
import More from './More.js';

export default class About extends React.Component {
	constructor(){
		super(); 
		this.state = {
			scroll: false
		}
	}
	componentDidMount = () => {
		const container = document.querySelector("div.container0");
	    window.addEventListener('scroll', () => {
			let rect = container.getBoundingClientRect();
			if(rect.y < (window.innerHeight*(2/3))){
				this.setState({ scroll: true });
			}else {
				this.setState({ scroll: false });
			}
		});
	}
	render(){
		return(
			<div>
				<div className="about container0 w-100">
					<div className="bg-image"></div>
					<div className="bg-text">
						{
							this.state.scroll
								?(
									<div className="container1 flex ph7">
										<div className="washed-red description fl white w-40 mt5 mr2 baskerville " >
											<p>
												Céline Akçağ, in Zürich geboren, begann ihre Gesangsausbildung bei ihrer Mutter. Nach dem Vorstudium am Konservatorium Zürich bei Ulrike Andersen absolvierte sie ihren Bachelor in Oper, Konzert und Pädagogik in Freiburg i.Br. bei Prof. Dorothea Wirtz. Ein Auslandsemester verbrachte sie an der Royal Academy of Music (LDN) bei Mary Nelson und Iain Ledingham. An der Theaterakademie August Everding (MUC) absolvierte sie den Master in Musiktheater/Operngesang bei KS Prof.
											</p>
											<More/>
										</div>
									</div>
								)
								:<div className="pa7"></div>
						}
					</div>
				</div>
			</div>
		)
	}
}
