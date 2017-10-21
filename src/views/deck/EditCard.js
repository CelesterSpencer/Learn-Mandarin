import React, {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Page from '../../components/Page';
import HeaderBar from '../../components/HeaderBar';
import PageContent from '../../components/PageContent';
import BackButton from '../../containers/BackButton';
import TextInput from '../../components/TextInput';
import ButtonComp from '../../components/ButtonComp';
import {parseCard} from '../../helpers';
import {
    setHanzi, 
    setPinyin, 
    setTranslation, 
    setHint,
    editCard,
    deleteCard
} from '../../actions';

class EditCard extends Component {
    onChangeHanzi = (hanzi) => {
        this.props.setHanzi(hanzi);
    }
    onChangePinyin = (pinyin) => {
        this.props.setPinyin(pinyin);
    }
    onChangeTranslation = (translation) => {
        this.props.setTranslation(translation);
    }
    onChangeHint = (hint) => {
        this.props.setHint(hint);
    }
    onEditButtonPress = () => {
        const {hanzi, pinyin, translation, hint} = this.props;
        const word = parseCard(hanzi, pinyin);
        if(word && word.hanzi.length > 0) {
            this.props.editCard(word, translation, hint);
            this.props.history.goBack();
        }
    }
    onDeleteButtonPress = () => {
        this.props.history.push({pathname: '/modal/delete-card'});
    }

    render() {
        const {
            pageContentStyle, 
            scrollableContentStyle,
            labelStyle,
            buttonStyle
        } = styles;

        const {hanzi, pinyin, translation, hint} = this.props;
        const buttonDisabled = !(hanzi.length && pinyin.length && translation.length);

        return (
            <Page>
                <HeaderBar>
                    <BackButton />
                </HeaderBar>
                <PageContent style={pageContentStyle}>
                    <div style={scrollableContentStyle}>
                        <div style={labelStyle}>Hanzi</div>
                        <TextInput 
                            onChange={this.onChangeHanzi} 
                            text={hanzi}
                        />
                        <div style={labelStyle}>Pinyin</div>
                        <TextInput 
                            onChange={this.onChangePinyin}
                            text={pinyin} 
                        />
                        <div style={labelStyle}>Translation</div>
                        <TextInput 
                            onChange={this.onChangeTranslation}
                            text={translation}
                        />
                        <div style={labelStyle}>Hint</div>
                        <TextInput 
                            onChange={this.onChangeHint}
                            text={hint}
                        />
                    </div>
                    <ButtonComp 
                        style={buttonStyle}
                        onClick={this.onEditButtonPress}
                        disabledStyle={buttonStyle}
                        disabled={buttonDisabled}
                    >Edit Card</ButtonComp>
                    <ButtonComp 
                        style={buttonStyle}
                        onClick={this.onDeleteButtonPress}
                        disabledStyle={buttonStyle}
                        disabled={buttonDisabled}
                    >Delete Card</ButtonComp>
                </PageContent>
            </Page>
        );
    }

    componentWillMount() {
        const deck = this.props.decks.find((item) => item.id === this.props.activeDeck);
        const card = deck.cards.find((item) => item.id === this.props.activeCard);
        this.props.setHanzi(card.hanzi.join(''));
        this.props.setPinyin(card.pinyin.map((p, i) => p+card.tones[i]).join(' '));
        this.props.setTranslation(card.translation);
        this.props.setHint(card.hint);
    }
}

const styles = {
    pageContentStyle: {
        padding: '10px'
    },
    scrollableContentStyle: {
        height: 'calc(100% - 95px)',
        marginBottom: '10px',
        overflowY: 'auto'
    },
    labelStyle: {
        fontSize: '1.2em',
        fontWeight: 'bold',
        marginTop: '10px'
    },
    buttonStyle: {
        width: '100%',
        marginBottom: '5px'
    }
}

const mapStateToProps = state => {
    const {decks, hanzi, pinyin, translation, hint, activeDeck, activeCard} = state.deck;
    return {decks, hanzi, pinyin, translation, hint, activeDeck, activeCard};
}

export default withRouter(connect(mapStateToProps, {
    setHanzi,
    setPinyin,
    setTranslation,
    setHint,
    editCard,
    deleteCard
})(EditCard));