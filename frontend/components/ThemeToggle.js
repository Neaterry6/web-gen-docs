import { useState } from "react";

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

    const toggleTheme = () => {
        const newTheme = darkMode ? "light" : "dark";
        document.body.className = newTheme;
        localStorage.setItem("theme", newTheme);
        setDarkMode(!darkMode);
    };

    return <button onClick={toggleTheme}>{darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}</button>;
};

export default ThemeToggle
