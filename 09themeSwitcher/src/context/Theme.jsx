
import { createContext, useContext } from 'react';

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
    
})

export const ThemeProvider= ThemeContext.Provider

export default function useTheme(){ // custom hook
    return useContext(ThemeContext) // returns the value of the context 
    // that is the object {themeMode: "light", darkTheme: ()=>{}, lightTheme: ()=>{}}
    // that is passed to the provider
    
}