import React, {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {setDeckName, editDeck, getActiveDeckName} from '../../actions';
import Page from '../../components/Page';
import PageContent from '../../components/PageContent';
import HeaderBar from '../../components/HeaderBar';
import BackButton from '../../containers/BackButton';
import TextInput from '../../components/TextInput';
import ButtonComp from '../../components/ButtonComp';

class EditDeck extends Component {
    onBackPress = () => {
        this.props.setDeckName('');
    }

    onPress = () => {
        this.props.editDeck(this.props.deckName);
        this.props.setDeckName('');
        this.props.history.goBack();
    }

    onTextInput = (deckName) => {
        this.props.setDeckName(deckName);
    }

    render() {
        const {
            pageContentStyle, 
            labelStyle
        } = styles;

        const isButtonDisabled = !this.props.deckName || this.props.deckName.length === 0;

        return (
            <Page>
                <HeaderBar>
                    <BackButton 
                        onPress={this.onBackPress}
                    />
                </HeaderBar>
                <PageContent style={pageContentStyle}>
                    <div style={labelStyle}>Course name:</div>
                    <TextInput
                        text={this.props.deckName}
                        onChange={this.onTextInput}
                    />
                    <ButtonComp
                        onClick={this.onPress}
                        disabled={isButtonDisabled}
                    >
                        Edit Course
                    </ButtonComp>
                </PageContent>
            </Page>
        );
    }

    componentWillMount() {
        this.props.getActiveDeckName();
    }
}

const styles = {
    pageContentStyle: {
        padding: '10px',
        display: 'flex',
        boxSizing: 'border-box',
        flexDirection: 'column'
    },
    labelStyle: {
        fontSize: '1.2em',
        fontWeight: 'bold'
    }
}

const mapStateToProps = state => {
    const {deckName, activeDeck} = state.deck;
    return {deckName, activeDeck};
}

export default withRouter(connect(mapStateToProps, {
    setDeckName,
    editDeck,
    getActiveDeckName
})(EditDeck));