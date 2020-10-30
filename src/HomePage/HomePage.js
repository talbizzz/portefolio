import React from 'react';
import About from './About/About';
import Appointments from './Appointments/Appointments';
  
export default class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
    }
  }

  onClickChange = (e) => {
    e.preventDefault();  
    console.log('clicked', this.state.clicked);
    this.setState({clicked:true});
    document.documentElement.scrollTop = 0;
  }
  
  render(){
    return(
      <div>
        { 
          !this.state.clicked 
            ?
              <div>
                <About onClickChange={this.onClickChange}/>
              </div>
            :(
              <div>
                <Appointments onClickChange={this.onClickChange}/>
              </div>
            )
        }
      </div>
    )
  }
}





