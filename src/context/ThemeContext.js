import { createContext, useContext, useState } from "react";

// Theme Context
const themeContext=createContext();

// function to access the context values easily
function useThemeValue(){
    const value=useContext(themeContext);
    return value;
}

// Theme Context Provider
function ThemeContextProvider({children}){
    const [theme,setTheme]=useState('light');

    const toggleTheme=()=>{
        setTheme(prev=>prev==='light'?'dark':'light');
    }
    return(
        <themeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </themeContext.Provider>
    );
}

export{useThemeValue};
export default ThemeContextProvider;
