import React, {Component} from 'react';
import Radium from 'radium';

@Radium
class ButtonComp extends Component {
    onPressHandler() {
        if(!this.props.disabled) this.props.onClick();
    }
    render() {
        const {buttonStyle, buttonDisabledStyle} = styles;

        const usedStyle = (this.props.disabled) ? buttonDisabledStyle : buttonStyle;

        return (
            <button style={usedStyle} onClick={this.onPressHandler.bind(this)}>
                {this.props.children}
            </button>
        )
    }
}

const styles = {
    buttonStyle: {
        width: 'auto',
        color: 'white',
        background: '#C00000',
        border: 'none',
        padding: '5px',
        fontWeight: 'bold',
        display: 'flex',

        ':hover': {
            background: 'rgb(126, 4, 4)'
        }
    },
    buttonDisabledStyle: {
        width: 'auto',
        color: 'white',
        background: 'gray',
        border: 'none',
        padding: '5px',
        fontWeight: 'bold',
        display: 'flex',

        ':hover': {
            background: 'gray'
        }
    }
}

export default ButtonComp;