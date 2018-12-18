// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
    
handleClick = (event) => {
    // onReceiveCoordinates is a prop that is a function 
    // passed as a callback function from index.js
    this.props.onReceiveCoordinates([event.clientX,event.clientY]);
}
    render() {
        return (
            <button onClick={this.handleClick}>Co-ordinates</button>
        );
    }
}

export default CoordinatesButton