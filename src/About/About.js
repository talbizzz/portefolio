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
			<div className="about container0 w-100" style={{marginTop:`${this.props.aboutPos}`}}>
				{
					this.state.scroll
						?(
							<div className="container1 flex ph7">
								<div className=" fl white w-60 mr2">
									<article >
						  				<div className="aspect-ratio aspect-ratio--3x4 mb4">
								    		<div 
								    			className=" aspect-ratio--object cover"
								    			style={{background:"url(https://static.wixstatic.com/media/879330_256c498602b34f3597b78c4e9cb92f8b~mv2_d_1667_2500_s_2.jpg/v1/fill/w_749,h_1124,al_c,q_90,usm_0.66_1.00_0.01/879330_256c498602b34f3597b78c4e9cb92f8b~mv2_d_1667_2500_s_2.webp) bottom"}}
								    		>
								    			<span className="ml2 pb7 f-subheadline white lh-solid baskerville">About <br/>me</span>
								    		</div>
								  		</div>
									</article>
								</div>
								<div className="description fl white w-40 mt5 mr2 " >
									<p>
										Céline Akçağ, in Zürich geboren, begann ihre Gesangsausbildung bei ihrer Mutter. Nach dem Vorstudium am Konservatorium Zürich bei Ulrike Andersen absolvierte sie ihren Bachelor in Oper, Konzert und Pädagogik in Freiburg i.Br. bei Prof. Dorothea Wirtz. Ein Auslandsemester verbrachte sie an der Royal Academy of Music (LDN) bei Mary Nelson und Iain Ledingham. An der Theaterakademie August Everding (MUC) absolvierte sie den Master in Musiktheater/Operngesang bei KS Prof.
									</p>
									<More/>
								</div>
							</div>
						):<div className="pa7"></div>
				}
			</div>
		)
	}
}
