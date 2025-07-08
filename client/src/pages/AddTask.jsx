import TaskForm from '../components/TaskForm';
import { useNavigate } from 'react-router-dom';

const AddTask = () => {
  const navigate = useNavigate();

  const refreshTasks = () => {
    navigate('/');
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Add New Task</h2>
      <TaskForm refreshTasks={refreshTasks} />
    </div>
  );
};

export default AddTask;
