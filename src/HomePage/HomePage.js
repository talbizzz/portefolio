import React from 'react';
import About from './About/About';
import Gallery from './Gallery/Gallery';
import Schedule from './Schedule/Schedule';
import Contact from './Contact/Contact';
import Navbar from './Navbar/Navbar'
  
export default class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      gallery: false,
      appointments:false,
      contact: false,
    }
  }
  onClickAbout = (e) => {
    e.preventDefault();  
    this.setState({gallery:false, appointments:false, contact:false});
    document.documentElement.scrollTop = 0;
  }

  onClickGallery = (e) => {
    e.preventDefault();  
    this.setState({gallery:true, appointments:false, contact:false});
    document.documentElement.scrollTop = 0;
  }
  
  onClickAppointments = (e) => {
    e.preventDefault();  
    this.setState({gallery:true, appointments:true, contact:false});
    document.documentElement.scrollTop = 0;
  }

  onClickContact = (e) => {
    e.preventDefault();  
    this.setState({contact:true, gallery:true, appointments:true});
    document.documentElement.scrollTop = 0;
  }
  
  render(){
    return(
      <div>
        <Navbar
          Gallery={this.onClickGallery}
          Appointments={this.onClickAppointments}
          Contact={this.onClickContact}
          About={this.onClickAbout}
        />
        { 
          !this.state.gallery 
            ?
              <About onClickChange={this.onClickGallery}/>
            :(!this.state.appointments
              ?
                <Gallery onClickChange={this.onClickAppointments}/>
              :(!this.state.contact
                ?
                  <Schedule onClickChange={this.onClickContact}/>
                :(
                  <Contact/>
                )
              )  
            )
        }
      </div>
    )
  }
}





