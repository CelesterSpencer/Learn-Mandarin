import React, {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {setDeckName, createDeck} from '../../actions';
import Page from '../../components/Page';
import PageContent from '../../components/PageContent';
import HeaderBar from '../../components/HeaderBar';
import BackButton from '../../containers/BackButton';
import TextInput from '../../components/TextInput';
import ButtonComp from '../../components/ButtonComp';

class CreateDeck extends Component {
    onBackPress = () => {
        this.props.setDeckName('');
    }

    onPress = () => {
        this.props.createDeck(this.props.deckName);
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
                        disabled={this.props.deckName.length === 0}
                    >
                        Create Course
                    </ButtonComp>
                </PageContent>
            </Page>
        );
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
    const {deckName} = state.deck;
    return {deckName};
}

export default withRouter(connect(mapStateToProps, {
    setDeckName,
    createDeck
})(CreateDeck));