import peg from 'pegjs';
import ChunkGrammar from '../res/grammars/chunk';
import HanziGrammar from '../res/grammars/hanzi';
import PinyinGrammar from '../res/grammars/pinyin';

const chunkParser  = peg.generate(ChunkGrammar);
const pinyinParser = peg.generate(PinyinGrammar);
const hanziParser  = peg.generate(HanziGrammar);

export const parseCard = (hanzi, pinyin) => {
    try {
        let hanziArray = [];
        let pinyinArray = [];
        let toneArray = [];
        let typeArray = [];

        // divide string into chunks and return if chuck length doesn't match
        let hanziChunks = hanziParser.parse(hanzi);
        let pinyinChunks = chunkParser.parse(pinyin);
        if(hanziChunks.length !== pinyinChunks.length) 
            throw new Error('Length of hanzi and pinyin chunks do not match');
        
        for(var i = 0; i < hanziChunks.length; i++) {
            // parse hanzi
            if(hanziChunks[i].type !== pinyinChunks[i].type) 
                throw Error('Types of hanzi and pinyin chunk do not match');
            let hanzi = hanziChunks[i];
            // parse pinyin
            let pinyin = (pinyinChunks[i].type === 'word') ? 
                pinyinParser.parse(pinyinChunks[i].content) :
                {chars: pinyinChunks[i].content, tone: 5};
            
            // add properties of current word
            hanziArray.push(hanzi.content);
            pinyinArray.push(pinyin.chars);
            toneArray.push(pinyin.tone);
            typeArray.push(hanzi.type);
        }
        return {
            hanzi: hanziArray,
            pinyin: pinyinArray,
            tones: toneArray,
            types: typeArray    
        };
    } catch (e) {
        if(e instanceof peg.parser.SyntaxError) {
            console.log(e);
        } else {
            console.error(`Error thrown while parsing ${hanzi}, ${pinyin}.`);
            console.error(`what: ${e}`);
        }
        return [];
    }
}