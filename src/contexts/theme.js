import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light", // var
    darkTheme: () =>{}, // method-1
    lightTheme: () =>{}, // method-2

})

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme(){
    return useContext(ThemeContext)
}