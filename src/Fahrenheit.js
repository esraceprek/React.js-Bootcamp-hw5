// @flow strict

import React, { Component } from 'react'

class Fahrenheit extends Component{
    render() {
        
        
        
        
        return (
            <div>
                {(this.props.fahrenheit * 1.8000) + 32} FAHRENHEIT

              
                
            </div>
        );
    }
}

export default Fahrenheit;