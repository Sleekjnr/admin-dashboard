import React, { useState } from "react";
import "./Createuser.css";

const Createuser = ({ onUserCreated }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

    const newUser = {
      id: existingUsers.length + 1,
      name: formData.username,
      email: formData.email,
      phone: formData.phone,
    };

    existingUsers.push(newUser);

    localStorage.setItem("users", JSON.stringify(existingUsers));

    setFormData({
      username: "",
      email: "",
      phone: "",
    });

    if (onUserCreated) {
      onUserCreated();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="create-user-container">
      <h2>Create New User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
          />
        </div>

        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default Createuser;
