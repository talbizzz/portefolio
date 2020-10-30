import React from 'react';
import './App.css';
import Welcome from './Welcome/Welcome.js';
import Button from './Button/Button.js';
import HomePage from './HomePage/HomePage';

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
    console.log('userActive', this.state.userActive);
    this.setState({userActive:true});
    document.documentElement.scrollTop = 0;
  }

  render(){  
    return (
      <div className="App" >
        {
          !this.state.userActive
            ?
              <div>
                <Welcome onClickChange= {this.onClickChange}/>
              </div>
            :(
              <div>
                <HomePage/>
              </div>
            )
        }
      </div>
    );
  }
}

