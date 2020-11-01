import React from 'react';
import './Schedule.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Schedule = ({onClickChange}) => {
  AOS.init();
  return( 
    <div>
      <div> 
        <h1 
          style={{ fontFamily: "Mak", color:"#C1995B"}} 
          className="f-headline ml6"
          data-aos="fade-down" 
          data-aos-duration="1000" 
          data-aos-mirror="true"
        >
          Termine
        </h1>
        <ul className="ph7 center ">
          <li 
            className="flex items-center lh-copy pa4 ph0-l bb b--black-10"
            data-aos="fade-right" 
            data-aos-duration="1000" 
            data-aos-mirror="true"
          >
            <img alt="" className="w2 h2 w3-ns h3-ns br-100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/KreuzkircheM%C3%BCnchen.JPG/1200px-KreuzkircheM%C3%BCnchen.JPG" />
            <div className="pl3 flex-auto">
              <span className="f3 db baskerville navy">Gottesdienst</span>
              <span className="f6 db baskerville navy">Kreuzkirche, Hiltenspergerstraße 57, 80796 München, Deutschland</span>
            </div>
            <div>
              <p className="f6 link red hover-dark-grayb tc">08. Nov, <br/> 9:30</p>
            </div>
          </li>
          <li 
            className="flex items-center lh-copy pa4 ph0-l bb b--black-10"
            data-aos="fade-left" 
            data-aos-duration="1000" 
            data-aos-mirror="true"
          >
            <img alt="" className="w2 h2 w3-ns h3-ns br-100" src="https://walcheturm.ch/assets/projects/1012/_resampled/EditedWzAsMCwxMDAsMTAwXQ/anatomy-of-melancholy.jpg" />
            <div className="pl3 flex-auto">
              <span className="f3 db baskerville navy">Anatomy of Melancholy</span>
              <span className="f6 db baskerville navy">Netzwerk Neubad, Bireggstrasse 36, 6003 Luzern, Schweiz</span>
            </div>
            <div>
              <p className="f6 link red hover-dark-grayb tc">25. Nov, <br/> 20h00</p>
            </div>
          </li>
          <li 
            className="flex items-center lh-copy pa4 ph0-l bb b--black-10"
            data-aos="fade-right" 
            data-aos-duration="1000" 
            data-aos-mirror="true"
          >
            <img alt="" className="w2 h2 w3-ns h3-ns br-100" src="https://walcheturm.ch/assets/projects/1012/_resampled/EditedWzAsMCwxMDAsMTAwXQ/anatomy-of-melancholy.jpg"/>
            <div className="pl3 flex-auto">
              <span className="f3 db baskerville navy">Anatomy of Melancholy</span>
              <span className="f6 db baskerville navy">Kunstraum Walcheturm, Kanonengasse 20, 8004 Zürich, Schweiz</span>
            </div>
            <div>
              <p className="f6 link red hover-dark-grayb tc">28. Nov, <br/> 20:00</p>
            </div>
          </li>
          <li 
            className="flex items-center lh-copy pa4 ph0-l bb b--black-10"
            data-aos="fade-left" 
            data-aos-duration="1000" 
            data-aos-mirror="true"
          >
            <img alt="" className="w2 h2 w3-ns h3-ns br-100" src="https://image.brigitte.de/11032920/t/PJ/v3/w480/r1/-/zitate-zu-weihnachten.jpg" />
            <div className="pl3 flex-auto">
              <span className="f3 db baskerville navy">Weinhnachtsoratorium</span>
              <span className="f6 db baskerville navy">St. Benedikt, Lechnerstraße, 82067 Schäftlarn, Deutschland</span>
            </div>
            <div>
              <p className="f6 link red hover-dark-grayb tc">6. Dez, <br/> 00:00</p>
            </div>
          </li>
          <li 
            className="flex items-center lh-copy pa4 ph0-l bb b--black-10"
            data-aos="fade-right" 
            data-aos-duration="1000" 
            data-aos-mirror="true"
          >
            <img alt="" className="w2 h2 w3-ns h3-ns br-100" src="https://cdt85.media.tourinsoft.eu/upload/DIVA-Photo-Carree-c.-Louis-Decamps-2.JPG" />
            <div className="pl3 flex-auto">
              <span className="f3 db baskerville navy">D.I.V.A</span>
              <span className="f6 db baskerville navy">La Balise, 2 rue Guitton, 85270 Saint-Hilaire-de-Riez, Frankreich</span>
            </div>
            <div>
              <p className="f6 link red hover-dark-grayb tc">09. Jan. 2021, <br/> 20:30</p>
            </div>
          </li>
          <li 
            className="flex items-center lh-copy pa4 ph0-l bb b--black-10"
            data-aos="fade-left" 
            data-aos-duration="1000" 
            data-aos-mirror="true"
          >
            <img alt="" className="w2 h2 w3-ns h3-ns br-100" src="https://scontent-dus1-1.xx.fbcdn.net/v/t1.0-9/45559893_10157077293014644_5078984073754443776_o.jpg?_nc_cat=100&ccb=2&_nc_sid=e3f864&_nc_ohc=X6X-v-83MxYAX_SeKC-&_nc_ht=scontent-dus1-1.xx&oh=50720d68eddfb6aa4302c8b270d7bb84&oe=5FC372D3" />
            <div className="pl3 flex-auto">
              <span className="f3 db baskerville navy">Il vaggio a Reims</span>
              <span className="f6 db baskerville navy">Staatsteater Augsburg, Provinostr. 52, 86153 Augsburg, Deutschland</span>
            </div>
            <div>
              <p className="f6 link red hover-dark-grayb tc">31. Jan. 2021, <br/> 00:00</p>
            </div>
          </li>
          <li 
            className="flex items-center lh-copy pa4 ph0-l bb b--black-10 aosAnchor"
            data-aos="fade-right" 
            data-aos-duration="1000" 
            data-aos-mirror="true"
          >
            <img alt="" className="w2 h2 w3-ns h3-ns br-100" src="https://static.wixstatic.com/media/6c6a24_82ae5fef68dc4cf8905539031f443aff~mv2.jpg/v1/crop/x_40,y_3,w_1460,h_410/fill/w_1460,h_410,al_c,q_85/6c6a24_82ae5fef68dc4cf8905539031f443aff~mv2.webp" />
            <div className="pl3 flex-auto">
              <span className="f3 db baskerville navy">Missa Solemnis (Beethoven)</span>
              <span className="f6 db baskerville navy">Dreispitz Sport- und Kulturzentrum, Pestalozzistrasse 17, 8280 Kreuzlingen, Schweiz</span>
            </div>
            <div>
              <p className="f6 link red hover-dark-grayb tc">01. April. 2021, <br/> 19:30</p>
            </div>
          </li>
          <li 
            className="flex items-center lh-copy pa4 ph0-l bb b--black-10"
            data-aos="fade-left" 
            data-aos-duration="1000" 
            data-aos-mirror="true"
          >
            <img alt="" className="w2 h2 w3-ns h3-ns br-100" src="https://www.theater-lueneburg.de/wp-content/themes/Theater%20L%C3%BCneburg%20Gold/images/logo.png" />
            <div className="pl3 flex-auto">
              <span className="f3 db baskerville navy">Ritter Blaubart (Offenbach)</span>
              <span className="f6 db baskerville navy">Theater Lüneburg, Theater Lüneburg, 21335 Lüneburg, Deutschland</span>
            </div>
            <div>
              <p className="f6 link red hover-dark-grayb tc">26. Juni. 2021, <br/> 20:00</p>
            </div>
          </li>
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <a 
            style={{ fontFamily: "Mak"}} 
            className="f-subheadline tc navy link pointer grow "
            data-aos="zoom-in" 
            data-aos-duration="1000" 
            data-aos-mirror="true"
            data-aos-anchor=".aosAnchor"
            onClick={onClickChange}
            href='/'
          >
          Get in touch
          </a>
        </div>
      </div>
    </div>
  )
}

export default Schedule;