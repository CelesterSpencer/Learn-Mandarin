import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Modal from './Modal';
import {deleteCard} from '../../actions';

class DeleteDeck extends Component {
    onCancelPress = () => {
        this.props.history.goBack();
    }
    onDeletePress = () => {
        this.props.deleteCard();
        this.props.history.push({pathname: '/views/deck-details'});
    }

    render() {
        return (
            <Modal 
                onCancelPress={this.onCancelPress}
                onDeletePress={this.onDeletePress}
                text='Are you sure you want to delete this card?'
            />
        );
    }
};

export default withRouter(connect(null, {
    deleteCard
})(DeleteDeck));