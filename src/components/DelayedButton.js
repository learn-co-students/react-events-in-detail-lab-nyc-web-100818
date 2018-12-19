// Code DelayedButton Component Here
import React from 'react'

export default function DelayedButton(props) {

  const handleClick = (event) => {
    event.persist();
    setTimeout(() => {
      props.onDelayedClick(event);
    }, props.delay);
  }


  return (
    <div>
      <button onClick={handleClick}>Button</button>
    </div>
  )
}
