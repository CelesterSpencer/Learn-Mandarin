import React, {Component} from 'react';
import Themes from '../res/data/themes.json';

const cardTheme = Themes.cards.default;

const vocalMap = {
    "a": { priority: 1, tone: { "1": "ā", "2": "á", "3": "ǎ", "4": "à", "5": "a" }},
    "e": { priority: 2, tone: { "1": "ē", "2": "é", "3": "ě", "4": "è", "5": "e" }},
    "o": { priority: 3, tone: { "1": "ō", "2": "ó", "3": "ǒ", "4": "ò", "5": "o" }},
    "u": { priority: 4, tone: { "1": "ū", "2": "ú", "3": "ǔ", "4": "ù", "5": "u" }},
    "i": { priority: 4, tone: { "1": "ī", "2": "í", "3": "ǐ", "4": "ì", "5": "i" }},
    "v": { priority: 4, tone: { "1": "ǖ", "2": "ǘ", "3": "ǚ", "4": "ǜ", "5": "ü" }}
}

class Card extends Component {
    getToneColor(tone) {
        switch(tone) {
            case 1  : return cardTheme.tone1;
            case 2  : return cardTheme.tone2;
            case 3  : return cardTheme.tone3;
            case 4  : return cardTheme.tone4;
            default : return cardTheme.tone5;
        }
    }
    getVocalPriority(char) {
        let priority = vocalMap[char];
        priority = (priority != null) ? priority.priority : 5;
        return priority;
    }
    getCharWithTone(char, tone) {
        let charWithTone = "";
        const charObj = vocalMap[char];
        if (charObj != null) {
            const toneObj = charObj.tone[tone];
            charWithTone = (toneObj != null) ? toneObj : charObj[5];
        } else {
            charWithTone = char;
        }
        return charWithTone;
    }
    makeTonemarks(word, tone) {
        let wordWithTones = word;

        let smallestPriority = 6;
        let idx = -1;
        for (var i = 0; i < word.length; i++) {
            const char = word.charAt(i);
            const priority = this.getVocalPriority(char);
            if (priority < smallestPriority) {
                smallestPriority = priority;
                idx = i;
            }
        }

        if (idx !== -1) {
            const char = word.charAt(idx);
            const charWithTone = this.getCharWithTone(char, tone);
            wordWithTones = word.replace(char,charWithTone);
        }
        return wordWithTones;
    }
    calcStyles(character, hanziStyle, pinyinStyle, useOnlyOnePart) {
        let topStyle    = hanziStyle;
        let bottomStyle = pinyinStyle;

        const color = this.getToneColor(character.tone);
        const fill  = cardTheme.fill;

        if(fill) {
            topStyle.background    = color.hanzi;
            bottomStyle.background = color.pinyin;
        } else {
            topStyle.background    = "none";
            bottomStyle.background = "none";
            topStyle.color    = color.hanzi;
            bottomStyle.color = color.pinyin;
            topStyle.border   = "1px solid " + color.hanzi;
            bottomStyle.border= "1px solid " + color.pinyin;
        }
        
        if(useOnlyOnePart) {
            topStyle.borderRadius    = '5px';
            bottomStyle.borderRadius = '5px';
        } else {
            topStyle.borderBottomLeftRadius = '0px';
            topStyle.borderBottomRightRadius = '0px';
            bottomStyle.borderTopRightRadius = '0px';
            bottomStyle.borderTopLeftRadius = '0px';
        }

        return {
            hanzi: topStyle,
            pinyin: bottomStyle
        }
    }

    renderPart(text, style, shouldRender) {
        if(shouldRender) return (
            <div style={style}>
                {text}
            </div>
        )
    }

    render() {
        const character  = this.props.character;
        const hideHanzi  = this.props.hideHanzi  || false;
        const hidePinyin = this.props.hidePinyin || false;

        const {
            characterStyle,
            hanziStyle,
            pinyinStyle
        } = styles;

        const top = character.hanzi;
        const bottom = this.makeTonemarks(character.pinyin, character.tone);
        const useOnlyOnePart = hideHanzi || hidePinyin;
        const charStyles = this.calcStyles(character, hanziStyle, pinyinStyle, useOnlyOnePart);

        return (
            <div style={characterStyle}>
                {this.renderPart(top, charStyles.hanzi, !hideHanzi)}
                {this.renderPart(bottom, charStyles.pinyin, !hidePinyin)}
            </div>
        )
    }
};

const styles = {
    characterStyle: {
        display: 'inline-block',
        margin: '2px'
    },
    hanziStyle: {
        padding: '10px',
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px',
        fontSize: 'x-large',
        textAlign: 'center'
    },
    pinyinStyle: {
        padding: '5px',
        borderBottomLeftRadius: '5px',
        borderBottomRightRadius: '5px',
        fontSize: 'medium',
        textAlign: 'center'
    }
}

export default Card;