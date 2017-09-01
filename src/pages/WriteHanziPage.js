import React, {Component} from 'react';
import HanziWriter from 'hanzi-writer';
import allStrokeData from '../res/data/all.json';

class WriteHanziPage extends Component {
    render() {
        const {containerStyle} = styles;

        return (
            <div style={containerStyle} id='writerCanvas'>

            </div>
        )
    }
    componentDidMount() {
        let writerCanvas = document.getElementById('writerCanvas');
        let writer = new HanziWriter(writerCanvas, '我', {
            charDataLoader: function(char) {
                return allStrokeData[char];
            },
            showOutline: true,
            showCharacter: true,
            width: 200,
            height: 200,
            padding: 20,
            strokeAnimationDuration: 300,
            delayBetweenStrokes: 1000,
            strokeColor: '#555',
            highlightColor: '#AAF',
            outlineColor: '#DDD', 
            drawingColor: '#333',
            showHintAfterMisses: 3,
            highlightOnComplete: true
        });

        // callbacks
        writer.animateCharacter({
            onComplete: function() { console.log('finished animating!'); }
        });
          
        // quiz the user on this character
        writer.quiz({
            onCorrectStroke: function(status) { console.log('got a stroke correct! :)', status); },
            onMistake: function(status) { console.log('Oh no, you made a mistake drawing the stroke :(', status); },
            onComplete: function(status) { console.log('Yay you finished the whole character! :D', status); }
        });
    }
};

const styles = {
    containerStyle: {
        height: '100%'
    }
};

export default WriteHanziPage;