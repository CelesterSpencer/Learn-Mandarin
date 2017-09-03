import React, {Component} from 'react';
import HanziWriter from 'hanzi-writer';
import hanziGridImage from '../res/images/hanzi-grid.svg';
import allStrokeData from '../res/data/all.json';

class HanziWriterComp extends Component {
    constructor() {
        super();
        this.writer = null;
    }

    render() {
        const {
            containerStyle,
            writerCanvasStyle
        } = styles;

        if(this.writer) this.writer.setCharacter(this.character.pinyin);

        return (
            <div style={containerStyle}>
                <div id='writerCanvas' style={writerCanvasStyle}></div>
            </div>
        )
    }

    componentDidMount() {
        let writerCanvas = document.getElementById('writerCanvas');
        const shorterSide = writerCanvas.clientWidth;
        
        this.writer = new HanziWriter(writerCanvas, '我', {
            charDataLoader: function(char) {
                return allStrokeData[char];
            },
            showOutline: false,
            showCharacter: false,
            width: shorterSide,
            height: shorterSide,
            padding: 0,
            strokeAnimationDuration: 300,
            delayBetweenStrokes: 1000,
            strokeColor: '#000',
            highlightColor: '#AAF',
            outlineColor: '#000', 
            drawingColor: '#f33',
            showHintAfterMisses: 3,
            highlightOnComplete: true
        });
        // callbacks
        this.writer.animateCharacter({
            onComplete: function() { console.log('finished animating!'); }
        });
        // quiz the user on this character
        this.writer.quiz({
            onCorrectStroke: function(status) { console.log('got a stroke correct! :)', status); },
            onMistake: function(status) { console.log('Oh no, you made a mistake drawing the stroke :(', status); },
            onComplete: function(status) { console.log('Yay you finished the whole character! :D', status); }
        });
    }
}

const styles = {
    containerStyle: {
        width: '100%',
        height: '100%',
        border: '2px solid gray',
        background: 'url('+hanziGridImage+')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'

    },
    writerCanvasStyle: {
        width: '100%',
        height: '100%',
    },
}

export default HanziWriterComp;