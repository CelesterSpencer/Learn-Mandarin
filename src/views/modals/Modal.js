import React, {Component} from 'react';
import ButtonComp from '../../components/ButtonComp';

class Modal extends Component {
    static defaultProps = {
        text: '',
        onCancelPress: () => {},
        onDeletePress: () => {}
    }

    render() {
        const {
            modalStyle,
            textStyle,
            buttonsRowStyle,
            cancelButtonStyle, 
            deleteButtonStyle
        } = styles;

        return (
            <div style={modalStyle}>
                <div style={textStyle}>
                    {this.props.text}
                </div>
                <div style={buttonsRowStyle}>
                    <ButtonComp 
                        style={cancelButtonStyle}
                        onClick={this.props.onCancelPress}
                    >
                        Cancel
                    </ButtonComp>
                    <ButtonComp
                        style={deleteButtonStyle}
                        onClick={this.props.onDeletePress}
                    >
                        Delete
                    </ButtonComp>
                </div>
            </div>
        );
    }
};

const styles = {
    modalStyle: {
        height: '100%',
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        marginBottom: '10px'
    },
    buttonsRowStyle: {
        width: '100%',
        display: 'flex'
    },
    cancelButtonStyle: {
        background: 'none',
        color: 'gray',
        width: 'calc(50% - 20px)',
        margin: '10px',
        boxSizing: 'border-box',
        ':hover': {
            background: 'none',
            color: 'black'
        }
    },
    deleteButtonStyle: {
        background: 'red',
        width: 'calc(50% - 20px)',
        margin: '10px',
        boxSizing: 'border-box'
    }
}

export default Modal;