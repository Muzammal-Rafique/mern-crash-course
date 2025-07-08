import { useState } from 'react';
import axios from '../api/axios';

const TaskForm = ({ refreshTasks }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      await axios.post('/tasks', { title });
      setTitle('');

      // ✅ only call refreshTasks if it was passed
      if (refreshTasks) refreshTasks();
    } catch (error) {
      console.error('Error adding task', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <input
        type="text"
        placeholder="New task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Add
      </button>
    </form>
  );
};


export default TaskForm;
