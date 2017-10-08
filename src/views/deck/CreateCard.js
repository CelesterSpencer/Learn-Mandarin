import React, {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Page from '../../components/Page';
import HeaderBar from '../../components/HeaderBar';
import PageContent from '../../components/PageContent';
import BackButton from '../../containers/BackButton';
import TextInput from '../../components/TextInput';
import ButtonComp from '../../components/ButtonComp';
import {
    setHanzi, 
    setPinyin, 
    setTranslation, 
    setHint,
    createCard
} from '../../actions';

class CreateCard extends Component {
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
    onCreateButtonPress = () => {
        const {hanzi, pinyin, translation, hint} = this.props;
        this.props.createCard(hanzi, pinyin, translation, hint);
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
                        onClick={this.onCreateButtonPress}
                        disabledStyle={buttonStyle}
                        disabled={buttonDisabled}
                    >Create Card</ButtonComp>
                </PageContent>
            </Page>
        );
    }
}

const styles = {
    pageContentStyle: {
        padding: '10px'
    },
    scrollableContentStyle: {
        height: 'calc(100% - 60px)',
        marginBottom: '10px',
        overflowY: 'auto'
    },
    labelStyle: {
        fontSize: '1.2em',
        fontWeight: 'bold',
        marginTop: '10px'
    },
    buttonStyle: {
        width: '100%'
    }
}

const mapStateToProps = state => {
    const {hanzi, pinyin, translation, hint} = state.deck;
    return {hanzi, pinyin, translation, hint};
}

export default withRouter(connect(mapStateToProps, {
    setHanzi,
    setPinyin,
    setTranslation,
    setHint,
    createCard
})(CreateCard));