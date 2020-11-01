import React from 'react';

const Navbar = ({Gallery, Appointments, Contact, About}) => {
	return(
		<div>
			<nav className="pa3 pa4-ns tc">
				<a className="link dim gray f6 f5-ns dib baskerville mr4" href="/" title="About" style={{color:"#C1995B"}} onClick={About}>About</a>
				<a className="link dim gray f6 f5-ns dib baskerville mr4" href="/" title="Gallery" style={{color:"#C1995B"}} onClick={Gallery}>Gallery</a>
				<a className="link dim b f6 f5-ns dib baskerville mr4" href="/" title="Home" style={{color:"#C1995B"}} >Home</a>				
				<a className="link dim gray f6 f5-ns dib baskerville mr4" href="/" title="Appointments" style={{color:"#C1995B"}} onClick={Appointments}>Appointments</a>
				<a className="link dim gray f6 f5-ns dib baskerville" href="/" title="Contact" style={{color:"#C1995B"}} onClick={Contact}>Contact</a>
			</nav>
		</div>	
	)
}

export default Navbar;