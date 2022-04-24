import React, { Component } from 'react'

export default class Kelvin extends Component {
  render() {
    return (
      <div>
          {(this.props.kelvin)+274.15} KELVIN
      </div>
    )
  }
}
