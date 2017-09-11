import React, { Component } from 'react';

class Page extends Component {
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
        height: '100%'
    }
}

export default Page;