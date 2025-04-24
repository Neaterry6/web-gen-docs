import { useEffect, useState } from "react";
import "./dashboard.css";

const Dashboard = () => {
    const [apiKeys, setApiKeys] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchKeys = async () => {
            const token = localStorage.getItem("token");
            const response = await fetch("http://localhost:5000/api/key", {
                headers: { Authorization: `Bearer ${token}` }
            });
            const data = await response.json();
            setApiKeys(data.keys || []);
            setLoading(false);
        };

        fetchKeys();
    }, []);

    return (
        <div className="dashboard">
            <h2>User Dashboard</h2>
            <h3>API Keys</h3>
            {loading ? <p>Loading API keys...</p> : 
                apiKeys.length > 0 ? apiKeys.map(key => <p key={key}>{key}</p>) : <p>No API keys found.</p>
            }
        </div>
    );
};

export default Dashboard
