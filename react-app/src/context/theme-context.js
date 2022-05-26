//Hooks
import { createContext, useContext, useState } from "react";

//Initialize context
export const ThemeContext = createContext();

//Export context hook
export const useTheme = () => useContext(ThemeContext);

//Export Theme Provider
export default function ThemeProvider(props) {
    //Default mode is light
    const [theme, setTheme] = useState("light")

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
};
