import React from 'react';

const CoordinatesButton = props => {

 const clickSentToIndex = event => {
    const click = [event.screenX, event.screenY]
    props.onReceiveCoordinates(click)
  }

  return(

    <button onClick={clickSentToIndex}></button>
  )

}

export default CoordinatesButton
