import React from 'react';

class CoordinatesButton extends React.Component {
  constructor(props) {
    super(props)
  }

  handleMouse = event => {
    let mouseCoordinates = [event.clientX, event.clientY] 
    return this.props.onReceiveCoordinates(mouseCoordinates)
  }

  render() {
    return (
      <button onClick={this.handleMouse}>get coordinates</button>
    )
  }
}

export default CoordinatesButton