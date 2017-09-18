import React, {Component} from 'react';

class CenterComp extends Component {
    render() {
        const {containerStyle} = styles;

        return (
            <div style={containerStyle}>
                {this.props.children}
            </div>
        );
    }
}

const styles = {
    containerStyle: {
        width: '100%',
        height: '100%',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export default CenterComp;