import { useEffect, useState } from 'react';
import axios from '../api/axios';

const CompletedTasks = () => {
  const [completedTasks, setCompletedTasks] = useState([]);

  const fetchCompleted = async () => {
    const res = await axios.get('/tasks');
    const completed = res.data.filter(task => task.completed);
    setCompletedTasks(completed);
  };

  useEffect(() => {
    fetchCompleted();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Completed Tasks</h2>
      <ul className="space-y-2">
        {completedTasks.map(task => (
          <li key={task._id} className="bg-green-100 p-3 rounded shadow">
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompletedTasks;
