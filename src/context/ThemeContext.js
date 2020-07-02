import React, {useState, createContext} from 'react';
import {useColorScheme} from 'react-native';

import {themedColors} from '../style/theme';

// Context
export const ThemeContext = createContext();

// Provider
export const ThemeProvider = (props) => {
  const osTheme = useColorScheme();
  const [theme, changeTheme] = useState(themedColors[osTheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        changeTheme,
      }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
