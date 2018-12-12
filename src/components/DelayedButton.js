import React from 'react';

class DelayedButton extends React.Component {
  constructor(props) {
    super(props)
    console.log(super())
  }

  handleDelayClick = (event) => {
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay)
  }

  render() {
    return (
      <button onClick={this.handleDelayClick}>hi</button>
    )
  }
}

export default DelayedButton