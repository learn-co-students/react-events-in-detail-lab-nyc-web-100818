// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {

  handleChg = (event) => {
    // console.log(this.props);
    // console.log("Mouse X Coord is:", event.clientX)
    // console.log("Mouse Y Coord is:", event.clientY)
    let xCoord = event.clientX
    let yCoord = event.clientY
    let arr = []
    arr.push(xCoord)
    arr.push(yCoord)
    // invoke parent function
    this.props.onReceiveCoordinates(arr)
    // debugger
  }

  render() {
    return <button onClick={this.handleChg}>Click me</button>
  }


}

export default CoordinatesButton
