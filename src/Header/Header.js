import React from 'react';
import './Header.css';

const Header = () => {
	return(
		<div>
			<div  className="header">
					<div className=" ml4 mr4">
						<div className="tr white baskerville mb6">
							<p>"Akçağ ist eine glamouröse Bühnenerscheinung mit ebenso weicher, samtig fließender Stimme."</p>
							<p>Süddeutsche Zeitung, 30.11.2018</p>
						</div>
						<span className="f-headline white lh-solid baskerville">Céline Akçağ</span> <br/>
						<span className="f1 lh-title white baskerville ml5">lyrischer Mezzosopran</span><br/>
						<Knowmore/>
					</div>
				</div>	
		</div>
			
	);
}

export default Header;