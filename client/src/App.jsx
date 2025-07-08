import { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const [refresh, setRefresh] = useState(false);

  const refreshTasks = () => {
    setRefresh((prev) => !prev);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">📝 Task Manager</h1>
      <TaskForm refreshTasks={refreshTasks} />
      <TaskList key={refresh} />
    </div>
  );
}

export default App;
