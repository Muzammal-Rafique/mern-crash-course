import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AllTasks from './pages/AllTasks';
import AddTask from './pages/AddTask';
import CompletedTasks from './pages/CompletedTasks';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AllTasks />} />
        <Route path="add" element={<AddTask />} />
        <Route path="completed" element={<CompletedTasks />} />
      </Route>
    </Routes>
  );
};

export default App;
