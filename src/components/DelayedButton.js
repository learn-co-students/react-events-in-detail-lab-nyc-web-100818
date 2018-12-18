// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {
    // DelayedButton takes two props:
    // 1. onDelayedClick - a function
    // 2. delay - a param, integer

    handleClick= event => {
        event.persist();
        setTimeout(()=>{
            this.props.onDelayedClick(event);

        }, this.props.delay)
    }

    render() {
        return (
           <button onClick={this.handleClick}>Delayed Button</button>
        );
    }

}

export default DelayedButton