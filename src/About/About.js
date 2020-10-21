import React from 'react';
import './About.css'

class About extends React.Component {
	constructor(){
		super(); 
		this.state = {
			scroll: false
		}
	}
	componentDidMount = () => {
		const container = document.querySelector("div.center");
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
			<div className="about mw8 mw8-ns center" style={{marginTop:`${this.props.aboutPos}`}}>
				{
					this.state.scroll
						?(
							<div className="container1">
								<div className=" fl white w-30 mw5 mw6-ns center pt4">
									<article >
						  				<div className="ba bw2 aspect-ratio aspect-ratio--3x4 mb4">
								    		<div 
								    			className=" aspect-ratio--object cover"
								    			style={{background:"url(https://static.wixstatic.com/media/879330_256c498602b34f3597b78c4e9cb92f8b~mv2_d_1667_2500_s_2.jpg/v1/fill/w_749,h_1124,al_c,q_90,usm_0.66_1.00_0.01/879330_256c498602b34f3597b78c4e9cb92f8b~mv2_d_1667_2500_s_2.webp) bottom"}}
								    		>
								    			<span className="ml2 pb7 f-subheadline white lh-solid baskerville">About me</span>
								    		</div>
								  		</div>
									</article>
								</div>
								<div className="description fl white w-60 ml3" >
									<p>Céline Akçağ, in Zürich geboren, begann ihre Gesangsausbildung bei ihrer Mutter. Nach dem Vorstudium am Konservatorium Zürich bei Ulrike Andersen absolvierte sie ihren Bachelor in Oper, Konzert und Pädagogik in Freiburg i.Br. bei Prof. Dorothea Wirtz. Ein Auslandsemester verbrachte sie an der Royal Academy of Music (LDN) bei Mary Nelson und Iain Ledingham. An der Theaterakademie August Everding (MUC) absolvierte sie den Master in Musiktheater/Operngesang bei KS Prof. Andreas Schmidt. Zurzeit studiert sie im Konzertmaster an der Hochschule für Musik und Theater München bei KS Prof. Christiane Iven und Okka von der Damerau, sowie im Postgradualen Studiengang Liedduo an der Universität Mozarteum Salzburg bei Prof. Pauliina Tukiainen.
										Meisterkurse mit Vesselina Kasarova, Alessandro De Marchi, Anne Le Bozec, Prof. Claudia Visca, Prof. Ulrike Sonntag, Tobias Kratzer, Gerd Uecker und Nadine Secunde haben ihre Ausbildung erweitert.
										Innerhalb des Studiums sang sie den Hänsel (Hänsel und Gretel, Humperdinck) am kleinen Haus des Theaters Freiburg, sowie an der Theaterakademie August Everding im Prinzregententheater das Glückskind (Der Teufel mit den drei goldenen Haaren, Hanke), Dorabella (Così fan tutte, Mozart) und Vanina (in L'Ancêtre von Saint-Saëns).
										Die Mezzosopranistin gewann den Studienpreis 2019 des Migros Kulturprozent und den Anerkennungspreis beim Internationalen Wettbewerb Karlsruhe für das Lied des 20. und 21. Jahrhunderts.
										Die Spielzeit 19/20 beinhalteten Cherubino (Le nozze di Figaro, Mozart) am Saarländischen Staatstheater, das Geisterkind 1 (Coraline, Turnage) am Opernhaus Zürich, und Sesto (Giulio Cesare, Händel) in konzertanter Fassung mit der Bayerischen Kammerphilharmonie.
										An den Osterfestspielen Baden-Baden und in der kleinen Berliner Philharmonie sang sie Carmen (La tragédie de Carmen, Bizet/Brook).
										In der Heubühne Zürich war sie als Nancy (Martha, Flotow) und Giannetta (L'elisir d'amore, Donizetti) zu sehen.
										Seit 2019 gehört sie zum Cast des Operncabarets 'D.I.V.A' und gibt diverse Shows in Frankreich.
										Im Konzertfach sang sie die Altpartien in 'Petite messe solennelle' (Rossini) unter der Leitung von Peter Marino, 'Chichester Psalms' (Bernstein) und 'Glagolitische Messe' (Janáček) im Herkulessaal München unter der Leitung von Benedikt Haag, sowie 'The Messiah' (Händel) unter der Leitung von Martin Frey.
										Eine rege Liedtätigkeit gehört seit Beginn ihrer Laufbahn zu ihrem Alltag. Das Repertoire reicht von Haydn bis Reimann, womit sie mit ihrer aktuellen Liedduo-Partnerin Rebeka Stojkoska diverse thematische Programme gestaltet.
										In der Spielzeit 20/21 ist sie als Modestina (Il viaggio a Reims, Rossini) am Staatstheater Augsburg und als Boulotte (Ritter Blaubart, Offenbach) am Theater Lüneburg zu sehen.
									</p>
								</div>
							</div>
						):<div className="pa7"></div>
				}
			</div>
		)
	}
}

export default About;