import React, { useContext, useEffect } from 'react';
import ThemeContext, { SwitchStyles } from '../ThemeContext'

const TextInput = (props) => {
    const { themeStyles, setThemeStyles } = useContext(ThemeContext);

    const handleChangeTheme = (e) => {
        setThemeStyles(SwitchStyles(themeStyles));
    }

    const handleChange = (event) => { }

    return (
        <div>
            <label>{props.label}: </label>
            <input type="text" onChange={handleChange} />
            <p><small><a href="#" onClick={handleChangeTheme}>change Theme from child</a></small></p>
        </div>
    );
}

export default TextInput;