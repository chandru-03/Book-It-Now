import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/users";

const CrudAxios = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "" });

  // Fetch Users (GET)
  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      console.log(response);
      
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Add User (POST)
  const addUser = async () => {
    try {
        // const maxId = users.length > 0 ? Math.max(...users.map(user => user.id)) : 1;
        const len=users.length
        console.log(len);
        
        const newUser = {
          id: `${len+ 1}`, // Auto-increment ID
          name: formData.name,
          email: formData.email,
        };
      const response = await axios.post(API_URL, newUser);
      setUsers([...users, response.data]);
      setFormData({ name: "", email: "" });
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  // Update User (PUT)
  const updateUser = async (id) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, formData);
      setUsers(users.map((user) => (user.id === id ? response.data : user)));
      setFormData({ name: "", email: "" });
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  // Delete User (DELETE)
  const deleteUser = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Fake API CRUD with Axios</h2>
   

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
      />
      <button onClick={addUser}>Add User</button>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
           {user.id} - {user.name} - {user.email} 
            <button onClick={() => updateUser(user.id)}>Update</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudAxios;
