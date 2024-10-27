import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/api';
import Modal from './Modal.js';

const Leaderboard = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await getUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl mb-4">Leaderboard</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Rank</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Points</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id} onClick={() => setSelectedUser(user)}>
              <td className="py-2 px-4 border">{index + 1}</td>
              <td className="py-2 px-4 border">{user.name}</td>
              <td className="py-2 px-4 border">{user.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && <Modal user={selectedUser} onClose={() => setSelectedUser(null)} />}
    </div>
  );
};

export default Leaderboard;
