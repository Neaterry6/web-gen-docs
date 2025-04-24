 import "./landing.css";

const Landing = () => {
    return (
        <div className="landing-container">
            <h1 className="fade-in">Welcome to Ayanfe Web Gen</h1>
            <p className="fade-in">Generate API keys, manage users, and streamline your web experience effortlessly.</p>
            <a href="/signup" className="btn fade-in">Get Started</a>
        </div>
    );
};

export default Landing;
