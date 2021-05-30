import { createContext, useContext, useReducer } from "react";

const initialState={
    theme:createMuiTheme({
    palette:colors,
    typography:{
      fontFamily:'Quicksand',
      fontWeightLight:400,
      fontWeightRegular:500,
      fontWeightMedium:600,
      fontWeightBold:700
    },
    type: themeType
  })
}

export const GlobalContext=createContext();

export const GlobalProvider=({reducer,initialState,children})=>{
    <GlobalContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </GlobalContext.Provider>
}

export const 