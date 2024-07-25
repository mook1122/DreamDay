
import{ createContext, useState, useContext } from 'react';

// ThemeContext 생성
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [bg, setBg] = useState('#FAFAFA');
    const [titlecolor, setTitlecolor] = useState('#F8C3C3');

    return (
        <ThemeContext.Provider value={{ bg, setBg, titlecolor, setTitlecolor }}>
            {children}
        </ThemeContext.Provider>
    );
};
