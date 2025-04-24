import { useState } from "react";

const SignupForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, email, password })
        });
        const data = await response.json();
        if (data.message) {
            alert("✅ Signup successful! Please log in.");
        } else {
            alert("❌ Signup failed!");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign Up for Ayanfe Web Gen</h2>
            <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignupForm
