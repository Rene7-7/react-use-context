import React, {useContext} from 'react';
import ThemeContext from '../ThemeContext'
import themeDarkStyles from '../ThemeDark.module.css';
import themeLightStyles from '../ThemeLight.module.css';

const TextInput = (props) => {
    const {theme, setTheme} = useContext(ThemeContext);

    const handleTheme = (event) => {
        event.preventDefault();
        setTheme( theme === themeDarkStyles ? themeLightStyles : themeDarkStyles);
    }
    const handleChange = (event) => {}
    return (
    <div>
        <label>{props.label}</label>
        <input type="text" onChange={handleChange} />
        <a href="#" onClick={handleTheme}>change Theme from child</a>
    </div>
    );
}

export default TextInput;