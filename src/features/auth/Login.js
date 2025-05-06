// src/features/auth/Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './authSlice'; // Make sure it's imported correctly
import './Login.css';

function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username) {
      dispatch(login({ username })); // Dispatching login action with username
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
