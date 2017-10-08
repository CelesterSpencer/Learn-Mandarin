import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import ButtonComp from '../../components/ButtonComp';
import {deleteDeck} from '../../actions';

class DeleteDeck extends Component {
    onCancelPress = () => {
        this.props.history.goBack();
    }
    onDeletePress = () => {
        this.props.deleteDeck();
        this.props.history.push({pathname: '/main/deck-overview'});
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
                    Are you sure you want to delete this deck?
                </div>
                <div style={buttonsRowStyle}>
                    <ButtonComp 
                        style={cancelButtonStyle}
                        onClick={this.onCancelPress}
                    >
                        Cancel
                    </ButtonComp>
                    <ButtonComp
                        style={deleteButtonStyle}
                        onClick={this.onDeletePress}
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

export default withRouter(connect(null, {
    deleteDeck
})(DeleteDeck));