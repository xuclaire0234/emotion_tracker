import { createContext, useState } from "react";

import { emotions } from '../components/consts';

const EmotionThemeContext = createContext();
export default EmotionThemeContext;

export const EmotionThemeProvider = ({children}) => {
    const [ storageEmotions, setStorageEmotions ] = useState(
        () => localStorage.getItem('storageEmotions') ? JSON.parse(localStorage.getItem('storageEmotions')) : emotions);
    
    const updateEmotions = (emotionData) => {
        console.log('Updating storageEmotions with emotionData ...');
        console.debug(emotionData);
        localStorage.setItem('storageEmotions', JSON.stringify(emotionData));
        setStorageEmotions(emotionData);
    }

    const resetEmotions = () => {
        console.log('Resetting storageEmotions ...');
        localStorage.setItem('storageEmotions', JSON.stringify(emotions));
        setStorageEmotions(emotions);
    }

    let contextData = {
        storageEmotions: storageEmotions,
        updateEmotions: updateEmotions,
        resetEmotions: resetEmotions,
    }

    return (
        <EmotionThemeContext.Provider value={contextData}>
            {children}
        </EmotionThemeContext.Provider>
    );
}
