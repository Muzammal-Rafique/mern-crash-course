import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">📝 Task Manager</h1>
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
