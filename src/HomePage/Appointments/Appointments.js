import React from 'react';
import './Appointments.css'

const Appointments = ({marginTop}) => {
	return(
		<div className="appointments" style={{marginTop:`${marginTop}`}}>
				
			<ul className="list pl0 mt0 w-60 center">
			  <div className=" headline white f1 baskerville" >Termine</div>
			  <li className="w-100 flex items-center lh-copy pa3 ph0-l bb b--white-30">
			      <img className="w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-mrmrs.jpg" alt="" />
			      <div className="pl3 flex-auto">
			        <span className="db white f3 lh-title baskerville">Mrmrs</span>
			        <span className="db white f3 lh-title baskerville">Medium Hexagon, LLC</span>
			      </div>
			  </li>
			  <li
			    className="flex items-center lh-copy pa3 ph0-l bb b--white-30">
			      <img className="w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-jxnblk.jpg" alt="" />
			      <div className="pl3 flex-auto">
			        <span className="db white f3 lh-title baskerville">Jxnblk</span>
			        <span className="db white f3 lh-title baskerville">Large Circle, Inc</span>
			      </div>
			  </li>
			  <li
			    className="flex items-center lh-copy pa3 ph0-l bb b--white-30">
			      <img className="w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-jasonli.jpg" alt="" />
			      <div className="pl3 flex-auto">
			        <span className="db white f3 lh-title baskerville">Jason Li</span>
			        <span className="db white f3 lh-title baskerville">Little Blue Square, Inc</span>
			      </div>
			  </li>
			  <li
			    className="flex items-center lh-copy pa3 ph0-l bb b--white-30">
			      <img className="w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-yavor.jpg" alt="" />
			      <div className="pl3 flex-auto">
			        <span className="db white f3 lh-title baskerville">Yavor</span>
			        <span className="db white f3 lh-title baskerville">Large Circle, Inc</span>
			      </div>
			  </li>
			  <li className="w-100 flex items-center lh-copy pa3 ph0-l bb b--white-30">
			      <img className="w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-mrmrs.jpg" alt="" />
			      <div className="pl3 flex-auto">
			        <span className="db white f3 lh-title baskerville">Mrmrs</span>
			        <span className="db white f3 lh-title baskerville">Medium Hexagon, LLC</span>
			      </div>
			  </li>
			  <li
			    className="flex items-center lh-copy pa3 ph0-l bb b--white-30">
			      <img className="w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-jxnblk.jpg" alt="" />
			      <div className="pl3 flex-auto">
			        <span className="db white f3 lh-title baskerville">Jxnblk</span>
			        <span className="db white f3 lh-title baskerville">Large Circle, Inc</span>
			      </div>
			  </li>
			  <li
				className="flex items-center lh-copy pa3 ph0-l bb b--white-30">
			      <img className="w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-jasonli.jpg" alt="" />
			      <div className="pl3 flex-auto">
			        <span className="db white f3 lh-title baskerville">Jason Li</span>
			        <span className="db white f3 lh-title baskerville">Little Blue Square, Inc</span>
			      </div>
			  </li>
			  <li
			    className="flex items-center lh-copy pa3 ph0-l bb b--white-30">
			      <img className="w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-yavor.jpg" alt="" />
			      <div className="pl3 flex-auto">
			        <span className="db white f3 lh-title baskerville">Yavor</span>
			        <span className="db white f3 lh-title baskerville">Large Circle, Inc</span>
			      </div>
			  </li>
			</ul>

		</div>	
			
	)
}

export default Appointments;