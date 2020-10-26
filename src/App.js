import React from 'react';
import './App.css';
import Welcome from './Welcome/Welcome.js';
import Header from './Header/Header';
import About from './About/About';
import Appointments from './Appointments/Appointments.js'

export default class App extends React.Component {
  constructor() {
    super(); 
    this.state= {
      userActive : false,
      aboutPos : ""
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', ()=> {
      if(window.scrollY >= 40000){
        console.log(window.scrollY)
        // used to skip the welcome window
        this.setState({userActive: true});
        // gets the header's height, we'll be used to adapt the display of the About component (mt >= header's height) 
        let header = document.querySelector('.header');
        let rect = header.getBoundingClientRect();
        this.setState({aboutPos : ((parseInt(rect.height)+20).toString() + "px") });
      }
    })
  }


  render(){  
    return (
      <div className="App" >
        {
          !this.state.userActive
            ?
              <div>
                <Welcome/>
              </div>
            :(
              <div>
                <Header className="header"/>
                <About aboutPos={this.state.aboutPos}/>
                <Appointments/>
              </div>
            )
        }
      </div>
    );
  }
}

