import { useEffect, useState } from "react";

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [apiKeys, setApiKeys] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem("token");

            // Fetch users
            const userRes = await fetch("http://localhost:5000/api/admin/users", {
                headers: { Authorization: `Bearer ${token}` }
            });
            setUsers(await userRes.json());

            // Fetch API keys
            const keyRes = await fetch("http://localhost:5000/api/admin/keys", {
                headers: { Authorization: `Bearer ${token}` }
            });
            setApiKeys(await keyRes.json());
        };

        fetchData();
    }, []);

    const deleteUser = async (id) => {
        const token = localStorage.getItem("token");
        await fetch(`http://localhost:5000/api/admin/users/${id}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` }
        });
        setUsers(users.filter(user => user._id !== id));
    };

    return (
        <div>
            <h2>Admin Dashboard</h2>
            
            <h3>Users</h3>
            {users.map(user => (
                <div key={user._id}>
                    <p>{user.username} - {user.email}</p>
                    <button onClick={() => deleteUser(user._id)}>Delete</button>
                </div>
            ))}

            <h3>API Keys</h3>
            {apiKeys.map(key => (
                <p key={key._id}>{key.key} - {key.active ? "Active" : "Inactive"}</p>
            ))}
        </div>
    );
};

export default AdminDashboard
