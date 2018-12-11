// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  findCoordinates = (event) => {
    let arr = [];
    arr.push(event.clientX, event.clientY)
    this.props.onReceiveCoordinates(arr)
  }

  render() {
    return (
      <button
      onClick={this.findCoordinates}
      />
    )
  }
}
