import React, { useEffect, useState } from 'react';
import { getUserHistory } from '../services/api';

const Modal = ({ user, onClose }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const { data } = await getUserHistory(user._id);
      setHistory(data);
    };
    fetchHistory();
  }, [user._id]);

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4">History for {user.name}</h2>
        <ul>
          {history.map((item, index) => (
            <li key={index}>{item.action} - {item.points} points</li>
          ))}
        </ul>
        <button onClick={onClose} className="bg-red-500 text-white py-2 px-4 mt-4 rounded">Close</button>
      </div>
    </div>
  );
};

export default Modal;
