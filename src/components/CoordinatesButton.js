// Code CoordinatesButton Component Here
import React from 'react'

export default function CoordinatesButton(props) {
  return <div>
          <button onClick={(event)=>props.onReceiveCoordinates([event.clientX, event.clientY])}/>
        </div>;
}
