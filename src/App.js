import React, {useState} from 'react';
import ThemeContext, {SwitchStyles} from './ThemeContext';
import TextInput from './components/TextInput';
import styles from './App.module.css'



function App() {
  const [themeStyles, setThemeStyles] = useState(SwitchStyles()); 

  const handleChangeTheme = (e) => {
    setThemeStyles(SwitchStyles(themeStyles));
  }

  return (
    <ThemeContext.Provider value={{themeStyles, setThemeStyles}}>
      <div className={styles.app}>
        <header className={themeStyles.appHeader}>
          <h1 className={styles.appHeading1}>Use Context</h1>
          <p><button onClick={handleChangeTheme}>Parent Change Theme</button></p>
          <TextInput label="First name" />
        </header>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
