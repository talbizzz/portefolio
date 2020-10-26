import React from 'react';
import './App.css';
import Welcome from './Welcome/Welcome.js';
import Header from './Header/Header';
import About from './About/About';
import Appointments from './Appointments/Appointments.js';
import Button from './Button/Button.js'

export default class App extends React.Component {
  constructor() {
    super(); 
    this.state= {
      userActive : false,
      aboutPos : ""
    }
  }

  onClickChange = (e) => {
    e.preventDefault();
    console.log('Le lien a été cliqué.');
    this.setState({userActive:true})
  }


  render(){  
    return (
      <div className="App" >
        {
          !this.state.userActive
            ?
              <div>
                <Welcome className=""/>
                <Button onClickChange= {this.onClickChange}/>
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

