
import { useState } from 'react';
import useLocalStorage from './useLocalStorage';
const usedarkMode = () => {
    const [ darkMode, setDarkMode ] = useLocalStorage("darkMode", initialValue);
    return [darkMode, setDarkMode];

}

export default usedarkMode;