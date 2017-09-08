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
        width: '100%',
        color: 'white',
        background: 'steelblue',
        border: 'none',
        padding: '10px',
        fontWeight: 'bold',

        ':hover': {
            background: 'rgb(28, 60, 87)'
        }
    },
    buttonDisabledStyle: {
        width: '100%',
        color: 'white',
        background: 'gray',
        border: 'none',
        padding: '10px',
        fontWeight: 'bold',

        ':hover': {
            background: 'gray'
        }
    }
}

export default ButtonComp;