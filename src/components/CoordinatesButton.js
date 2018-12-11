// Code CoordinatesButton Component Here
import React, {Component} from 'react'

export default class CoordinatesButton extends Component {
  constructor(props) {
    super(props)
  }

  clicking = event => {
    console.log(event.clientX, event.clientY)
    const coords = [event.clientX, event.clientY]
    return this.props.onReceiveCoordinates(coords)
  }

  render() {
    return (
      <button onClick={this.clicking}>CoordinatesButton</button>
    )
  }
}

//
// function is currently just logging whatever is passed into it.
//
// Within CoordinatesButton, render a button. On click of the button, create an array with two elements: the X and Y coordinates of the mouse. Find these using the event data.
//
// Pass this event data in as the argument for the onReceiveCoordinates prop.
//
// If successful, the current x,y position of your mouse should be logged.
//
