import React from 'react';
import './App.css';
import Welcome from './Welcome/Welcome.js';
import Header from './Header/Header';
import About from './About/About';
import Appointments from './Appointments/Appointments.js';

class App extends React.Component {
  constructor() {
    super(); 
    this.state= {
      userActive : false,
      aboutPos : ""
    }
  }

  componentDidMount = () => {
    window.addEventListener('mousemove', ()=> {
      // skip the welcome window
      this.setState({userActive: true});
      // get the header's height, we'll be used to adapt the display of the About component (mt >= header's height) 
      let header = document.querySelector('.header');
      let rect = header.getBoundingClientRect();
      this.setState({aboutPos : (parseInt(rect.height).toString() + "px") });
    })
  }


  render(){  
    return (
      <div className="App" >
        {
          !this.state.userActive
            ?<div className="header"><Welcome/></div>
            :(
              <div>
                <Header className="header"/>
                <div style={{marginTop:`${this.state.aboutPos}`}}>
                  <div><About className="about"/></div>
                  <div><Appointments className="appointments"/></div>
                </div>
              </div>
            )
        }
      </div>
    );
  }
}

export default App;
