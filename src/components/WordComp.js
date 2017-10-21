import React, {Component} from 'react';
import CharacterComp from './CharacterComp';

class WordComp extends Component {
    static defaultProps = {
        hideHanzi: false,
        hidePinyin: false
    }

    renderCharacters() {
        const {hanzi, pinyin, tones} = this.props.card;
        const {hideHanzi, hidePinyin} = this.props;
        let characterComps = [];
        for(let i = 0; i < hanzi.length; i++) {
            const character = { hanzi: hanzi[i], pinyin: pinyin[i], tone: tones[i] };
            characterComps.push(
                <CharacterComp 
                    key={i} 
                    character={character} 
                    hideHanzi={hideHanzi} 
                    hidePinyin={hidePinyin} 
                />
            );
        }
        return characterComps;
    }

    render() {        
        const {containerStyle} = styles;

        return (
            <div style={{containerStyle, ...this.props.style}}>
                {this.renderCharacters()}
            </div>
        );
    }
};

const styles = {
    containerStyle: {
        textAlign: 'center'
    }
};

export default WordComp;