import { useState } from 'react';
import axios from '../api/axios';

const Register = () => {
  const [data, setData] = useState({ name: '', email: '', password: '' });
  const [msg, setMsg] = useState('');

  const handleChange = (e) => {
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/register', data);
      setMsg(res.data.message);
      setData({ name: '', email: '', password: '' });
    } catch (err) {
      setMsg(err.response.data.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Name" value={data.name} onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="email" placeholder="Email" value={data.email} onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="password" placeholder="Password" value={data.password} onChange={handleChange} type="password" className="w-full p-2 border rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Register</button>
        {msg && <p className="text-sm text-center text-red-500">{msg}</p>}
      </form>
    </div>
  );
};

export default Register;
