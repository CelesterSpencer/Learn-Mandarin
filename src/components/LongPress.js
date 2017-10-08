import React, { Component } from 'react';

class LongPress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start: undefined
        }
    }

    static defaultProps = {
        style: {},
        onPress: () => {},
        onLongPress: () => {},
        pressDuration: 2000
    }

    onDown = () => {
        const now = Date.now();
        this.setState({start: now});
    }

    onUp = () => {
        const now = Date.now();
        if(Math.abs(now - this.state.start) < pressDuration) {
            this.props.onPress();
        } else {
            this.props.onLongPress();
        }
    }
    
    render() {
        return (
            <div style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}

export default LongPress;