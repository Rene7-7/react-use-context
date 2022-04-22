import React, {useState, useContext} from 'react';
import themeDarkStyles from './ThemeDark.module.css';
import themeLightStyles from './ThemeLight.module.css';
import ThemeContext from './ThemeContext';
import TextInput from './components/TextInput'



function App() {
  const [theme, setTheme] = useState(themeDarkStyles);

  const styles = theme; 

  const toggleTheme = (e) => {
    setTheme( theme === themeDarkStyles ? themeLightStyles : themeDarkStyles);
  }

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <h1>Use Context</h1>
          <p><button onClick={toggleTheme}>Parent Change Theme</button></p>
          <TextInput label="First name" />
        </header>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
