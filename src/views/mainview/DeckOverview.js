import React, {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Page from '../../components/Page';
import HeaderBar from '../../components/HeaderBar';
import PageContent from '../../components/PageContent';
import ListComp from '../../components/ListComp';
import CenterComp from '../../components/CenterComp';
import AddButton from '../../containers/AddButton';
import {setActiveDeck} from '../../actions';

class DeckOverview extends Component {
    onAddButtonPress = () => {
        this.props.history.push({pathname: '/views/create-deck'});
    }

    onItemPress(deck, i) {
        this.props.setActiveDeck(deck);
        this.props.history.push({pathname: '/views/deck-details'});
    }

    renderEmpty = () => {
        return (
            <CenterComp>
                Add new Decks
            </CenterComp>
        );
    }

    renderItem = (deck, i) => {
        const {listItemStyle, bigTextStyle} = styles;

        const deckName = deck.name;
        const cardCount = deck.cards.length;

        return (
            <div style={listItemStyle} onClick={this.onItemPress.bind(this, deck, i)}>
                <div style={bigTextStyle}>{deckName}</div>
                <div>{cardCount}</div>
            </div>
        );
    }

    render() {
        const {decks} = this.props;
        const hasNoDecks = this.props.decks.length === 0;

        return (
            <Page>
                <HeaderBar>
                </HeaderBar>
                <PageContent>
                    <ListComp
                        items={decks}
                        renderItem={this.renderItem}
                        renderEmpty={this.renderEmpty}
                    />
                    <AddButton onPress={this.onAddButtonPress} />
                </PageContent>
            </Page>
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
    },
    listItemStyle: {
        padding: '5px',
        paddingLeft: '10px',
        background: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'Verdana'
    },
    bigTextStyle: {
        fontSize: '1.5em',
        fontWeight: 'bold'
    }
}

const mapStateToProps = state => {
    const {decks} = state.deck;
    console.dir(state);
    return { decks };
};

export default withRouter(connect(mapStateToProps, {
    setActiveDeck
})(DeckOverview));