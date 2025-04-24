import { useState } from "react";
import "./settings.css";

const Settings = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        document.body.className = newTheme;
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
    };

    return (
        <div className="settings-container">
            <h2>Account Settings</h2>
            <button onClick={toggleTheme}>{theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}</button>
        </div>
    );
};

export default Settings;
