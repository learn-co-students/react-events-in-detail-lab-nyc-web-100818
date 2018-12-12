import React from 'react'

export default class DelayedButton extends React.Component {

  // props: onDelayedClick (fn) && delay (number)

  delayedClick = (event) => {
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay
  )}

  render() {
    return (
      <button onClick={this.delayedClick}>Delayed Button</button>
    )
  }

}
