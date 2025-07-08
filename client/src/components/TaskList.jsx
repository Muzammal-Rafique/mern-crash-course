import { useEffect, useState } from 'react';
import axios from '../api/axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await axios.get('/tasks');
      setTasks(res.data);
    } catch (error) {
      console.error('Error fetching tasks', error.message);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">All Tasks</h2>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task._id} className="p-2 border rounded">
            <strong>{task.title}</strong> — {task.completed ? '✅' : '❌'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
