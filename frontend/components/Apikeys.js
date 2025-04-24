import { useEffect, useState } from "react";

const APIKeys = () => {
    const [apiKeys, setApiKeys] = useState([]);
    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchKeys = async () => {
            const response = await fetch("http://localhost:5000/api/key", {
                headers: { Authorization: `Bearer ${token}` }
            });
            const data = await response.json();
            setApiKeys(data.keys || []);
        };

        fetchKeys();
    }, []);

    const generateKey = async () => {
        const response = await fetch("http://localhost:5000/api/key/generate", {
            method: "POST",
            headers: { Authorization: `Bearer ${token}` }
        });
        const data = await response.json();
        if (data.key) setApiKeys([...apiKeys, data.key]);
    };

    return (
        <div>
            <h3>API Keys</h3>
            <button onClick={generateKey}>Generate New Key</button>
            {apiKeys.map(key => <p key={key}>{key}</p>)}
        </div>
    );
};

export default APIKeys
