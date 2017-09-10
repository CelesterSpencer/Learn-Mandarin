import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardComp from '../../components/CardComp';
import WordComp from '../../components/WordComp';
import CharacterComp from '../../components/CharacterComp';
import HanziWriterComp from '../../components/HanziWriterComp';
import SquareComp from '../../components/SquareComp';
import ButtonComp from '../../components/ButtonComp';
import {setCurrentCharacterIndex} from '../../actions';
import deck from '../../res/data/deck.json';

class WriteHanziPage extends Component {
    handleCharacterComplete() {
        let i = this.props.characterIndex+1;
        this.props.setCurrentCharacterIndex(this.props.characterIndex+1);
    }

    render() {
        const {
            containerStyle,
            taskContainerStyle,
            taskLeftPartStyle,
            taskRightPartStyle
        } = styles;

        const currentCard = deck.cards[0];
        const currentCharacter = currentCard.characters[this.props.characterIndex];

        return (
            <div style={containerStyle}>
                <CardComp>
                    <WordComp card={currentCard} hideHanzi={true} />
                </CardComp>
                <CardComp>
                    <div style={taskContainerStyle}>
                        <div style={taskLeftPartStyle}>write</div>
                        <div style={taskRightPartStyle}>
                            <CharacterComp character={currentCharacter} hideHanzi={true} />
                        </div>
                    </div>
                </CardComp>
                <CardComp>
                    <SquareComp>
                        <HanziWriterComp character={currentCharacter} onComplete={this.handleCharacterComplete.bind(this)} />
                    </SquareComp>
                </CardComp>
                <div style={{flex: 1}}></div>
                <CardComp>
                    <ButtonComp onClick={() => alert('pressed')} disabled={true}>Next</ButtonComp>
                </CardComp>
            </div>
        )
    }
};

const styles = {
    containerStyle: {
        height: 'calc(100% - 20px)',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column'
    },
    taskContainerStyle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        background: 'steelblue',
        borderRadius: '5px'
    },
    taskLeftPartStyle: {
        color: 'white',
        textAlign: 'center',
        verticalAlign: 'middle',
        padding: '5px'
    },
    taskRightPartStyle: {
        flex: 1,
        textAlign: 'center',
        background: 'white',
        borderTopRightRadius: '5px',
        borderBottomRightRadius: '5px'
    }
};

const mapStateToProps = state => {
    const {characterIndex} = state.writeHanziLecture;
    return { characterIndex };
};

export default connect(mapStateToProps, { setCurrentCharacterIndex })(WriteHanziPage);