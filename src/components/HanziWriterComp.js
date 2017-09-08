import React, {Component} from 'react';
import HanziWriter from 'hanzi-writer';
import hanziGridImage from '../res/images/hanzi-grid.svg';
import allStrokeData from '../res/data/all.json';

class HanziWriterComp extends Component {
    constructor() {
        super();
        this.writer = null;
    }

    handleRightStroke(status) {
        if(this.props.onRight) this.props.onRight(status);
    }
    handleWrongStroke(status) {
        if(this.props.onWrong) this.props.onWrong(status);
    }
    handleCharacterComplete(status) {
        const self = this;
        const completed = function() { self.props.onComplete(status) };
        if(this.props.onComplete) setTimeout(completed, 1000);
    }
    initWriter(hanzi) {
        let writerCanvas = document.getElementById('writerCanvas');
        writerCanvas.innerHTML = '';
        const shorterSide = writerCanvas.clientWidth;
        
        this.writer = new HanziWriter(writerCanvas, hanzi, {
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
        //quiz the user on this character
        this.writer.quiz({
            onCorrectStroke: this.handleRightStroke.bind(this),
            onMistake: this.handleWrongStroke.bind(this),
            onComplete: this.handleCharacterComplete.bind(this)
        });
    }

    render() {
        const {
            containerStyle,
            writerCanvasStyle
        } = styles;

        const {hanzi} = this.props.character;
        if(this.writer) this.initWriter(hanzi);

        return (
            <div style={containerStyle}>
                <div id='writerCanvas' style={writerCanvasStyle}></div>
            </div>
        )
    }

    componentDidMount() {
        const {hanzi} = this.props.character;
        this.initWriter(hanzi);
    }
}

const styles = {
    containerStyle: {
        width: '100%',
        height: '100%',
        background: 'url('+hanziGridImage+')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    writerCanvasStyle: {
        width: '100%',
        height: '100%',
    },
};

export default HanziWriterComp;