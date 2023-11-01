import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { PaintBrush2 } from 'lucide-react';

const availableThemes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
];

const ThemeSelector = () => {
    const { themeName, setThemeName } = useTheme();

    const changeTheme = (newTheme) => {
        setThemeName(newTheme);
        localStorage.setItem('themeName', newTheme);
    };


    return (
        <div data-theme={themeName}>
            {/* <p>Current Theme: {themeName}</p> */}
            <details className="dropdown">
                <summary className='text-4xl'>🎨</summary>
                <ul className={`p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52`}>
                    {availableThemes.map((theme) => (
                        <li key={theme} data-theme={theme}>
                            <a onClick={() => changeTheme(theme)}>{theme}</a>
                        </li>
                    ))}
                </ul>
            </details>
        </div>
    );
}

export default ThemeSelector
