import React, {useContext, useState, createContext} from 'react';
import {createMuiTheme,ThemeProvider} from '@material-ui/core';
import colors from '../../constants/colors';
import lightBlue from "@material-ui/core/colors/lightBlue";
import { grey } from '@material-ui/core/colors';

export const ThemeContext = createContext();

//create a generic provider for analytics
export const TrouveThemeProvider = ({children}) => {

  const localTheme=localStorage.getItem('theme');
  
  const [themeType,setThemeType]=useState(localTheme || 'light');
  
  const toggleTheme=()=>{
      const _themeType=themeType==='light' ? 'dark' : 'light'
      setThemeType(_themeType);
      localStorage.setItem('theme',_themeType)
  }

  const theme=createMuiTheme({
    palette:colors,
    typography:{
      fontFamily:'Quicksand',
      fontWeightLight:400,
      fontWeightRegular:500,
      fontWeightMedium:600,
      fontWeightBold:700
    },
    type: themeType,
    overrides: {
        MuiPickersToolbar: {
          toolbar: {
            backgroundColor: themeType==='dark' ? grey[700] : lightBlue.A200,
          },
        },
        MuiPickersCalendarHeader: {
          switchHeader: {
            // backgroundColor: lightBlue.A200,
            // color: "white",
          },
        },
        MuiPickersDay: {
          day: {
            color: themeType==='dark' ? grey[700] : lightBlue.A700,
          },
          daySelected: {
            backgroundColor: themeType==='dark' ? grey[700] : lightBlue["400"],
          },
          dayDisabled: {
            color: themeType==='dark' ? grey[700] : lightBlue["100"],
          },
          current: {
            color: themeType==='dark' ? grey[700] : lightBlue["900"],
          },
        },
        MuiPickersModal: {
          dialogAction: {
            color: themeType==='dark' ? grey[700] : lightBlue["400"],
          },
        },
      },
  })

    return (
      <ThemeContext.Provider
        value={{theme,themeType,toggleTheme}}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
      </ThemeContext.Provider>
    );
};

export const useTrouveTheme = () => useContext(ThemeContext);
