import { Link, Outlet, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from '../api/axios';



const Layout = () => {
  const { user, setUser } = useContext(AuthContext);
  const { pathname } = useLocation();

  const handleLogout = async () => {
  await axios.post('/auth/logout', {}, { withCredentials: true });
  setUser(null);
};

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">📝 Task Manager</h1>
        <div className="space-x-4">
          <Link to="/" className={pathname === '/' ? 'underline' : ''}>All</Link>
          <Link to="/add" className={pathname === '/add' ? 'underline' : ''}>Add</Link>
          <Link to="/completed" className={pathname === '/completed' ? 'underline' : ''}>Completed</Link>
          <Link to="/register" className={pathname === '/register' ? 'underline' : ''}>Sign Up</Link>
          <Link to="/login" className={pathname === '/login' ? 'underline' : ''}>Sign In</Link>
           <button onClick={handleLogout} className="text-sm underline text-red-600">Logout</button>
        </div>
      </nav>

      <main className="p-6 max-w-2xl mx-auto">
        {user ? (
        <p className="text-sm">Welcome, {user.name}</p>
      ) : (
        <p className="text-sm">Not logged in</p>
      )}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
