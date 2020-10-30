import React from 'react';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';


export default class About extends React.Component {
  render() {
      return (
        <Parallax ref={ref => (this.parallax = ref)} pages={3.5}>
          <ParallaxLayer offset={0} speed={0} factor={4} style={{ backgroundColor:'#FAF5EF'}}/>
          
          {/*first page*/}
          <ParallaxLayer offset={0.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
            <img alt="" src='https://static.wixstatic.com/media/879330_b6a216b63fe94e3f931d8e6df673bd61~mv2_d_1667_2500_s_2.jpg/v1/fill/w_749,h_1124,al_c,q_90,usm_0.66_1.00_0.01/879330_b6a216b63fe94e3f931d8e6df673bd61~mv2_d_1667_2500_s_2.webp' style={{ width: '15%', marginLeft: '70%' }} />
          </ParallaxLayer>
          <ParallaxLayer offset={0.6} speed={-0.3} style={{ pointerEvents: 'none' }}>
            <img alt="" src='https://static.wixstatic.com/media/879330_51337e4b854a4a82b279c19b0e82fdb2~mv2_d_2500_1667_s_2.jpg/v1/fill/w_1686,h_1124,al_c,q_90,usm_0.66_1.00_0.01/879330_51337e4b854a4a82b279c19b0e82fdb2~mv2_d_2500_1667_s_2.webp' style={{ display: 'block', width: '35%', marginLeft: '30%' }} />
          </ParallaxLayer>
          <ParallaxLayer offset={0.1} speed={-0.1} style={{ opacity: 0.1 }}>
            <img alt="" src='https://static.wixstatic.com/media/879330_b6a216b63fe94e3f931d8e6df673bd61~mv2_d_1667_2500_s_2.jpg/v1/fill/w_749,h_1124,al_c,q_90,usm_0.66_1.00_0.01/879330_b6a216b63fe94e3f931d8e6df673bd61~mv2_d_1667_2500_s_2.webp' style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
            <img alt="" src='https://static.wixstatic.com/media/879330_b6a216b63fe94e3f931d8e6df673bd61~mv2_d_1667_2500_s_2.jpg/v1/fill/w_749,h_1124,al_c,q_90,usm_0.66_1.00_0.01/879330_b6a216b63fe94e3f931d8e6df673bd61~mv2_d_1667_2500_s_2.webp' style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
          </ParallaxLayer>
          <ParallaxLayer offset={0.3} speed={0.8} style={{ opacity: 0.1 }}>
            <img alt="" src='https://static.wixstatic.com/media/879330_51337e4b854a4a82b279c19b0e82fdb2~mv2_d_2500_1667_s_2.jpg/v1/fill/w_1686,h_1124,al_c,q_90,usm_0.66_1.00_0.01/879330_51337e4b854a4a82b279c19b0e82fdb2~mv2_d_2500_1667_s_2.webp' style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
            <img alt="" src='https://static.wixstatic.com/media/879330_51337e4b854a4a82b279c19b0e82fdb2~mv2_d_2500_1667_s_2.jpg/v1/fill/w_1686,h_1124,al_c,q_90,usm_0.66_1.00_0.01/879330_51337e4b854a4a82b279c19b0e82fdb2~mv2_d_2500_1667_s_2.webp' style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
          </ParallaxLayer>
          <ParallaxLayer
            offset={0}
            speed={0.1}
            style={{  marginLeft:'60%' }}>
            <p className='baskerville f-subheadline' style={{color:"#C1995B", fontFamily:"Mak"}}>About me</p>
          </ParallaxLayer>
          <ParallaxLayer
            offset={0}
            speed={0.1}
            style={{ display: 'flex', alignItems: 'top', justifyContent: 'left' }}>
              <div className="flex ph7">
                <div className="navy description fl white w-40 mt5 mr2 baskerville " >
                  <p>
                    Céline Akçağ, in Zürich geboren, begann ihre Gesangsausbildung bei ihrer Mutter. Nach dem Vorstudium am Konservatorium Zürich bei Ulrike Andersen absolvierte sie ihren Bachelor in Oper, Konzert und Pädagogik in Freiburg i.Br. bei Prof. Dorothea Wirtz. Ein Auslandsemester verbrachte sie an der Royal Academy of Music (LDN) bei Mary Nelson und Iain Ledingham. An der Theaterakademie August Everding (MUC) absolvierte sie den Master in Musiktheater/Operngesang bei KS Prof. Andreas Schmidt. Zurzeit studiert sie im Konzertmaster an der Hochschule für Musik und Theater München bei KS Prof. Christiane Iven und Okka von der Damerau, sowie im Postgradualen Studiengang Liedduo an der Universität Mozarteum Salzburg bei Prof. Pauliina Tukiainen.
                    Meisterkurse mit Vesselina Kasarova, Alessandro De Marchi, Anne Le Bozec, Prof. Claudia Visca, Prof. Ulrike Sonntag, Tobias Kratzer, Gerd Uecker und Nadine Secunde haben ihre Ausbildung erweitert.
                  </p>
                </div>
              </div>
          </ParallaxLayer>

          <ParallaxLayer offset={1.4} speed={-0.3} style={{opacity: 0.1}}>
            <p className='f-headline' style={{ display: 'block', width: '35%', marginLeft: '30%', color:"#C1995B", fontFamily:"Mak" }}>About me</p>
          </ParallaxLayer>

        {/*2nd page*/}
          <ParallaxLayer offset={1.8} speed={-0.3} style={{ pointerEvents: 'none' }}>
            <img alt="" src='https://static.wixstatic.com/media/879330_89dc1c08eb324e1c804f8baa2d14241c~mv2_d_1667_2500_s_2.jpg/v1/fill/w_749,h_1124,al_c,q_90,usm_0.66_1.00_0.01/879330_89dc1c08eb324e1c804f8baa2d14241c~mv2_d_1667_2500_s_2.webp' style={{ width: '15%', marginLeft: '10%' }} />
          </ParallaxLayer>
          <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
            <img alt="" src='https://static.wixstatic.com/media/879330_89dc1c08eb324e1c804f8baa2d14241c~mv2_d_1667_2500_s_2.jpg/v1/fill/w_749,h_1124,al_c,q_90,usm_0.66_1.00_0.01/879330_89dc1c08eb324e1c804f8baa2d14241c~mv2_d_1667_2500_s_2.webp' style={{ display: 'block', width: '20%', marginLeft: '10%' }} />
            <img alt="" src='https://static.wixstatic.com/media/879330_89dc1c08eb324e1c804f8baa2d14241c~mv2_d_1667_2500_s_2.jpg/v1/fill/w_749,h_1124,al_c,q_90,usm_0.66_1.00_0.01/879330_89dc1c08eb324e1c804f8baa2d14241c~mv2_d_1667_2500_s_2.webp' style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          </ParallaxLayer>
          <ParallaxLayer offset={2.8} speed={0.7} style={{ opacity: 0.6 }}>
            <img alt="" src='https://static.wixstatic.com/media/879330_3b721c05213346658019620ad135c8c5~mv2_d_3280_4928_s_4_2.jpg/v1/fill/w_748,h_1124,al_c,q_90,usm_0.66_1.00_0.01/879330_3b721c05213346658019620ad135c8c5~mv2_d_3280_4928_s_4_2.webp' style={{ display: 'block', width: '25%', marginLeft: '7%' }} />
          </ParallaxLayer>
          <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 1 }}>
            <img alt="" src='https://static.wixstatic.com/media/879330_3b721c05213346658019620ad135c8c5~mv2_d_3280_4928_s_4_2.jpg/v1/fill/w_748,h_1124,al_c,q_90,usm_0.66_1.00_0.01/879330_3b721c05213346658019620ad135c8c5~mv2_d_3280_4928_s_4_2.webp' style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          </ParallaxLayer>
          <ParallaxLayer offset={2.5} speed={0.4} style={{ opacity: 0.6 }}>
            <img alt="" src='https://static.wixstatic.com/media/879330_3b721c05213346658019620ad135c8c5~mv2_d_3280_4928_s_4_2.jpg/v1/fill/w_748,h_1124,al_c,q_90,usm_0.66_1.00_0.01/879330_3b721c05213346658019620ad135c8c5~mv2_d_3280_4928_s_4_2.webp' style={{ width: '15%', marginLeft: '70%' }} />
          </ParallaxLayer>
          <ParallaxLayer
            offset={2}
            speed={0.1}
            style={{ display: 'flex', alignItems: 'top', justifyContent: 'center' }}>
            <div className="navy w-40 ph5 baskerville " >
              <p>
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
          </ParallaxLayer>

          
          {/*next page button*/}
          <ParallaxLayer
            offset={2.9}
            speed={0.1}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <a onClick={this.props.onClickChange} className="f-headline link pointer grow" href='/' style={{fontFamily:"Mak", color:"#C1995B"}} >Visit the gallery</a>
          </ParallaxLayer>


        </Parallax>
      )
    }
}
