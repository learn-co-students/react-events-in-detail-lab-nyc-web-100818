// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {

	handleClick = (event) => {
		this.props.onReceiveCoordinates([event.clientX, event.clientY])
	}

	render() {
		return (
			<button onClick={this.handleClick}>Coordinates</button>
		)
	}
}
	


// This component takes in one prop: onReceiveCoordinates. 
// This prop is a function passed down from index.js.
// This function is currently just logging whatever is passed into it.