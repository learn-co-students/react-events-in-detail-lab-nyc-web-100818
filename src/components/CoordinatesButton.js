import React, { Component } from 'react';

  export default class CoordinatesButton extends Component {

      handleClick = (event) => {
         const x = event.clientX
         const y = event.clientY
         const coords = [x, y]

          this.props.onReceiveCoordinates(coords)
     }

      render() {
         return <button onClick={this.handleClick}>COORDINATES BUTTON</button>
     }

  }
