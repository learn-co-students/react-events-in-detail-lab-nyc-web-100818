// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component{

  onClick = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }


  render() {
    return (
      <button onClick={this.onClick}>
        Coords
      </button>
    )
  }




}//end of class


  
