// Code DelayedButton Component Here

import React from 'react';

// console.log(this.props);: {onDelayedClick: ƒ, delay: 1500}
// if u wanna access onDelayedClick in here, it MUST B this.props.onDelayedClick and this.props.delay
class DelayedButton extends React.Component {

  // methods go here
  passClickEvent = (event) => {
    event.persist();
    setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
  }



  render() {
    return <button onClick={this.passClickEvent}>Delayed Button</button>
  }


}

export default DelayedButton
