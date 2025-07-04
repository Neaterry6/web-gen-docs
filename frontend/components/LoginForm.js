import { useState } from "react";

const LoginForm = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        if (data.token) {
            localStorage.setItem("token", data.token); // Persist session
            onLogin();
        } else {
            alert("❌ Login failed!");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login to Ayanfe Web Gen</h2>
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm
