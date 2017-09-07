import {
    SET_CHARACTER_INDEX
} from './types';

export const setCurrentCharacterIndex = (index) => {
    return {
        type: SET_CHARACTER_INDEX,
        payload: index
    }
} 