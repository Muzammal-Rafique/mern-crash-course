import { useEffect, useState } from 'react';
import axios from '../api/axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const hasCompletedTasks = tasks.some(task => task.completed);
  const fetchTasks = async () => {
    try {
      const res = await axios.get('/tasks');
      setTasks(res.data);
    } catch (error) {
      console.error('Error fetching tasks', error.message);
    }
  };

  const toggleComplete = async (task) => {
    try {
      await axios.put(`/tasks/${task._id}`, {
        completed: !task.completed,
      });
      fetchTasks();
    } catch (error) {
      console.error('Error updating task', error.message);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task', error.message);
    }
  };

  const clearCompletedTasks = async () => {
  try {
    await axios.delete('/tasks/clear-completed');
    fetchTasks(); // Refresh task list
  } catch (error) {
    console.error('Error clearing completed tasks', error.message);
  }
};

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center mb-4">
  <h2 className="text-xl font-bold">All Tasks</h2>
  <button
  onClick={clearCompletedTasks}
  disabled={!hasCompletedTasks}
  className={`px-4 py-1 rounded text-sm ${
    hasCompletedTasks
      ? 'bg-red-500 text-white hover:bg-red-600'
      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
  }`}
>
  Clear Completed
</button>
</div>
      {tasks.map((task) => (
        <div
          key={task._id}
          className="flex items-center justify-between border p-3 rounded-md shadow-sm bg-white"
        >
          <div>
            <h3 className={`text-lg ${task.completed ? 'line-through text-gray-400' : ''}`}>
              {task.title}
            </h3>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => toggleComplete(task)}
              className={`px-3 py-1 rounded text-sm ${
                task.completed ? 'bg-yellow-500' : 'bg-green-600'
              } text-white`}
            >
              {task.completed ? 'Undo' : 'Done'}
            </button>
            <button
              onClick={() => deleteTask(task._id)}
              className="px-3 py-1 bg-red-600 text-white rounded text-sm"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
