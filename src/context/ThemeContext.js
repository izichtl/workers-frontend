import React, { createContext } from 'react';
import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import useTheme from './hooks/useTheme';
import { THEMES } from '../constants';
import { themesOptions, baseOptions } from '../theme';

const ThemeContext = createContext();

function ThemeProviderr({ children }) {
  const { theme, changeTheme } = useTheme();
  const themeOptions = themesOptions[theme ? THEMES.DARK : THEMES.LIGHT];
  const appliedTheme = createTheme(baseOptions, themeOptions);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <ThemeProvider theme={appliedTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
export { ThemeContext, ThemeProviderr };
