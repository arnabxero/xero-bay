// CampusThemeContext.js
// how to use
//import { useCampusTheme } from '@/contexts/CampusThemeContext';
// const { campusTheme } = useCampusTheme();
// const isDark = (campusTheme === "dark");
//{`${(isDark) ? 'dark-bg-1' : 'light-bg-1'}

import React, { createContext, useContext, useState } from 'react';

// Create a new context
const XeroBayThemeContext = createContext();

// Create a provider component for the context
export const XeroBayThemeProvider = ({ children }) => {
    const [xeroBayTheme, setXeroBayTheme] = useState(localStorage.getItem('xeroBayTheme') || 'light');

    // Function to set the xeroBayTheme value
    const setTheme = (value) => {
        setXeroBayTheme(value);
        localStorage.setItem('xeroBayTheme', value);
    };

    return (
        <XeroBayThemeContext.Provider value={{ xeroBayTheme, setTheme }}>
            {children}
        </XeroBayThemeContext.Provider>
    );
};

// Custom hook to easily access the context
export const useXeroBayTheme = () => {
    const context = useContext(XeroBayThemeContext);
    if (!context) {
        throw new Error('useXeroBayTheme must be used within a XeroBayThemeProvider');
    }
    return context;
};

