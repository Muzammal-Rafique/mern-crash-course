import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AllTasks from './pages/AllTasks';
import AddTask from './pages/AddTask';
import CompletedTasks from './pages/CompletedTasks';
import Register from './pages/Register';
import Login from './pages/Login';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AllTasks />} />
        <Route path="add" element={<AddTask />} />
        <Route path="completed" element={<CompletedTasks />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
