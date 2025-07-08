import { Link, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">📝 Task Manager</h1>
        <div className="space-x-4">
          <Link to="/" className={pathname === '/' ? 'underline' : ''}>All</Link>
          <Link to="/add" className={pathname === '/add' ? 'underline' : ''}>Add</Link>
          <Link to="/completed" className={pathname === '/completed' ? 'underline' : ''}>Completed</Link>
        </div>
      </nav>

      <main className="p-6 max-w-2xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
