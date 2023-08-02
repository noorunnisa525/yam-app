import {DEFAULT_DARK_THEME, DEFAULT_DARK_THEME_ID} from './DefaultDark';
import {DEFAULT_LIGHT_THEME, DEFAULT_LIGHT_THEME_ID} from './DefaultLight';
import React, {createContext, useContext, useState} from 'react';

const ThemeContext = createContext({
  theme: DEFAULT_DARK_THEME,
  setTheme: () => {
    console.log('Your stuff here');
  },
  toggleTheme: () => {
    console.log('Your stuff here');
  },
});

export const ThemeProvider = React.memo(props => {
  const [theme, setTheme] = useState(DEFAULT_LIGHT_THEME);
  const setThemeCallback = React.useCallback(newTheme => {
    setTheme(currentTheme => {
      if (currentTheme.id === newTheme.id) {
        return currentTheme;
      } else {
        return newTheme;
      }
    });
  }, []);

  const setToggleThemeCallback = React.useCallback(() => {
    setTheme(currentTheme => {
      if (currentTheme['id'] === DEFAULT_DARK_THEME_ID) {
        return DEFAULT_LIGHT_THEME;
      }
      if (currentTheme.id === DEFAULT_LIGHT_THEME_ID) {
        return DEFAULT_DARK_THEME;
      }
    });
  }, []);

  const MemoizedValue = React.memo(() => {
    const value = {
      theme: theme,
      setTheme: setThemeCallback,
      toggleTheme: setToggleThemeCallback,
    };
    return value;
  });
  const value = {
    theme: theme,
    setTheme: setThemeCallback,
    toggleTheme: setToggleThemeCallback,
  };
  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
});

export const useTheme = () => useContext(ThemeContext);
