
import './App.css';
import Celcius from './Celcius';
import Fahrenheit from './Fahrenheit';
import Kelvin from './Kelvin';
import React, { Component } from 'react'


export default class App extends Component {

  constructor(props){
    super(props)
    this.onClickEvent = this.onClickEvent.bind(this)
    // eslint-disable-next-line no-labels
    this.state = {
        currentTemperature:"0"
  
    }
    
    
  }
  
  onClickEvent=(e) => {
    
    this.setState({currentTemperature: e.target.value++})
  
  }

   render() {
    return (
     <div className="App">

     
     <div className="row">
     <h1>Celcius Convertion</h1>

     <h4>Current temperature: {this.state.currentTemperature} Celcius</h4>
     <br/>
     <br/>
 
    <button className="col-md-1"onClick={this.onClickEvent}>Increase</button>

     </div>

     <div className="row">
     <div className="col-md-4">
     <Celcius celcius = {this.state.currentTemperature}/>
       </div> 
     <div className="col-md-4">
     <Fahrenheit fahrenheit = {this.state.currentTemperature}/>
     </div>
      
      <div className="col-md-4"> 
      <Kelvin kelvin= {this.state.currentTemperature}/>
      </div>
      
     </div>
    
    </div>
        );
    
  
}
 


}