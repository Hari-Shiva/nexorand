import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl">Leaderboard</h1>
        <div>
          {user ? (
            <div className="flex items-center space-x-4">
              <span>{user.name}</span>
              <button
                onClick={logout}
                className="bg-red-500 px-4 py-2 rounded"
              >
                Logout
              </button>
            </div>
          ) : (
            <a href="/login" className="bg-green-500 px-4 py-2 rounded">Login</a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
