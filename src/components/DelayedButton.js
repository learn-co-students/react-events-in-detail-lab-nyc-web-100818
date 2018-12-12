import React from 'react';

const DelayedButton = props =>{

  const activateDelayedButton = event => {
    event.persist()
    setTimeout (() =>{
      props.onDelayedClick(event)},
    props.delay)
    // console.log(props.onDelayedClick(event), props.delay)
  }


  return (
    <button onClick={activateDelayedButton}>Delayed Button</button>
  )
}

export default DelayedButton
