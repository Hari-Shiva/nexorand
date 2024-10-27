import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl">Welcome, {user ? user.name : 'Guest'}!</h1>
      <p className="mt-4">Explore the leaderboard and claim points!</p>
    </div>
  );
};

export default Home;
