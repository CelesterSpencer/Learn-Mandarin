import React, {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Page from '../../components/Page';
import HeaderBar from '../../components/HeaderBar';
import PageContent from '../../components/PageContent';
import BackButton from '../../containers/BackButton';
import MenuWidget from '../../components/MenuWidget';
import ListComp from '../../components/ListComp';
import WordComp from '../../components/WordComp';
import ButtonComp from '../../components/ButtonComp';
import {setActiveCard} from '../../actions';

const menuOptions = {
    EDIT: 'Edit Deck',
    DELETE: 'Delete Deck'
}

class DeckDetails extends Component {
    onPress = () => {
        this.props.history.push({pathname: '/views/create-card'});
    }
    onOptionSelect = (item, i) => {
        const {history} = this.props;
        switch(item) {
            case menuOptions.EDIT:
                history.push({pathname: '/views/edit-deck'});
                break;
            case menuOptions.DELETE:
                history.push({pathname: '/modal/delete-deck'});
                break;
        }
    }
    onItemPress = (card) => {
        console.log(card);
        this.props.setActiveCard(card);
        this.props.history.push({pathname: '/views/edit-card'});
    }

    renderItem = (card, i) => {
        const {listItemStyle, listContentStyle} = styles;

        return (
            <div style={listItemStyle} onClick={this.onItemPress.bind(this, card)}>
                <WordComp card={card} style={listContentStyle} />
                <span style={listContentStyle}>{card.translation}</span>
            </div>
        );
    }

    render() {
        const {
            pageContentStyle, 
            cardListStyle,
            addButtonStyle
        } = styles;

        const deck = this.props.decks.find((item) => item.id === this.props.activeDeck);
        const {cards} = deck;
        const {EDIT, DELETE} = menuOptions;

        return (
            <Page>
                <HeaderBar>
                    <MenuWidget
                        items={[EDIT, DELETE]}
                        onSelect={this.onOptionSelect}
                    />
                    <BackButton />
                </HeaderBar>
                <PageContent style={pageContentStyle}>
                    <ListComp style={cardListStyle} 
                        items={cards}
                        renderItem={this.renderItem}
                    />
                    <ButtonComp 
                        onClick={this.onPress}
                        style={addButtonStyle}
                    >Add Cards</ButtonComp>
                </PageContent>
            </Page>
        );
    }
}

const styles = {
    pageContentStyle: {
        padding: '10px'
    },
    cardListStyle: {
        height: 'calc(100% - 60px)',
        marginBottom: '10px'
    },
    listItemStyle: {
        background: 'white',
        padding: '10px',
        paddingLeft: '15px',
        paddingRight: '15px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '1em'
    },
    listContentStyle: {
        flex: 1,
        padding: '5px'
    },
    addButtonStyle: {
        width: '100%'
    }
}

const mapStateToProps = state => {
    const {activeDeck, decks} = state.deck;
    return {activeDeck, decks};
}

export default withRouter(connect(mapStateToProps, {
    setActiveCard
})(DeckDetails));