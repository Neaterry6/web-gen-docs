import { useEffect, useState } from "react";
import "./adminDashboard.css";

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [apiKeys, setApiKeys] = useState([]);
    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchAdminData = async () => {
            const userResponse = await fetch("http://localhost:5000/api/admin/users", {
                headers: { Authorization: `Bearer ${token}` }
            });
            const keyResponse = await fetch("http://localhost:5000/api/admin/apikeys", {
                headers: { Authorization: `Bearer ${token}` }
            });

            const userData = await userResponse.json();
            const keyData = await keyResponse.json();

            setUsers(userData);
            setApiKeys(keyData);
        };

        fetchAdminData();
    }, []);

    const deleteUser = async (id) => {
        await fetch(`http://localhost:5000/api/admin/delete/${id}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` }
        });
        setUsers(users.filter(user => user._id !== id));
    };

    return (
        <div className="admin-container">
            <h2>Admin Dashboard</h2>

            <h3>Manage Users</h3>
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        {user.username} ({user.email}) 
                        <button onClick={() => deleteUser(user._id)}>Delete</button>
                    </li>
                ))}
            </ul>

            <h3>API Keys Overview</h3>
            <ul>
                {apiKeys.map(apiKey => (
                    <li key={apiKey._id}>{apiKey.key} - User: {apiKey.userId}</li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;
