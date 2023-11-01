// ThemeContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
    const [themeName, setThemeName] = useState(() => {
        // Initialize the theme name from localStorage or use a default value
        return localStorage.getItem('themeName') || 'light';
    });

    useEffect(() => {
        // Save the themeName to localStorage whenever it changes
        localStorage.setItem('themeName', themeName);
    }, [themeName]);

    return (
        <ThemeContext.Provider value={{ themeName, setThemeName }}>
            {children}
        </ThemeContext.Provider>
    );
};
