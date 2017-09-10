import React, {Component} from 'react';

class MainSettings extends Component {
    render() {
        const {containerStyle} = styles;
        
        return (
            <div style={containerStyle}>
                <span>Main Settings</span>
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

export default MainSettings;