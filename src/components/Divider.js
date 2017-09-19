import React, {Component} from 'react';

class Divider extends Component {
    render() {
        const {dividerStyle} = styles;
        
        return (
            <div style={dividerStyle} />
        );
    }
}

const styles = {
    dividerStyle: {
        height: '1px',
        background: 'radial-gradient(circle at center, #cdcdcd 0, #cdcdcd 90%, white 93%)'
    }
}

export default Divider;