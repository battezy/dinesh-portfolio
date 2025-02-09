import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash, FaKey } from "react-icons/fa"; // Import Icons
import "../style/adminusers.css";

export default function AdminUsers() {
    const [users, setUsers] = useState([]);
    const [passwordData, setPasswordData] = useState({ userId: "", newPassword: "" });

    useEffect(() => {
        axios.get("http://localhost:5000/api/users")
            .then((res) => setUsers(res.data))
            .catch(() => alert("Error fetching users!"));
    }, []);

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/api/users/${id}`);
        setUsers(users.filter((user) => user._id !== id));
    };

    const handleChangePassword = async (e) => {
        e.preventDefault();
        if (!passwordData.userId || !passwordData.newPassword) return alert("Fill all fields!");

        try {
            await axios.put(`http://localhost:5000/api/users/change-password`, passwordData);
            alert("Password updated successfully!");
            setPasswordData({ userId: "", newPassword: "" });
        } catch (err) {
            alert("Failed to update password!");
        }
    };

    return (
        <div className="admin-users">
            <h2>Manage Users</h2>

            {/* Change Password Form */}
            <form onSubmit={handleChangePassword}>
                <select
                    value={passwordData.userId}
                    onChange={(e) => setPasswordData({ ...passwordData, userId: e.target.value })}
                    required
                >
                    <option value="">Select User</option>
                    {users.map((user) => (
                        <option key={user._id} value={user._id}>{user.name} ({user.email})</option>
                    ))}
                </select>
                <input
                    type="password"
                    placeholder="New Password"
                    value={passwordData.newPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                    required
                />
                <button type="submit" className="btn-change">
                    <FaKey /> Change Password
                </button>
            </form>

            {/* List of Users */}
            <ul>
                {users.map((user) => (
                    <li key={user._id}>
                        <p>{user.name} - {user.email}</p>
                        <button onClick={() => handleDelete(user._id)} className="btn-delete">
                            <FaTrash /> Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
