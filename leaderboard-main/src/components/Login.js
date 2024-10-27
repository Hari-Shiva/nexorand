import React, { useContext, useState } from 'react';
import { loginUser } from '../services/api';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser(credentials);
      login(data.user);
      alert('Login successful!');
    } catch (error) {
      console.error(error);
      alert('Login failed.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={credentials.email}
          onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
          className="border p-2 mb-4 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          className="border p-2 mb-4 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
