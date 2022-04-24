import React, { createContext } from 'react';
import themeDarkStyles from './ThemeDark.module.css';
import themeLightStyles from './ThemeLight.module.css';
import themeRedStyles from './ThemeRed.module.css';
import themeGreenStyles from './ThemeGreen.module.css';


const ThemeContext = createContext(null);

export const Themes = [themeDarkStyles, themeLightStyles, themeRedStyles, themeGreenStyles];

export const SwitchTheme = (theme) => {
    return (theme === (Themes.length - 1) ? 0 : theme + 1);
}

export const SwitchStyles = (currentStyles) => {
    switch (currentStyles) {
        case themeDarkStyles:
            return themeLightStyles;
        case themeLightStyles:
            return themeRedStyles;
        case themeRedStyles:
            return themeGreenStyles;
        case themeGreenStyles:
            return themeDarkStyles;
        default:
            return themeDarkStyles;
    }
}

export default ThemeContext;