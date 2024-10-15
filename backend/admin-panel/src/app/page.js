'use client';

import { useState, useContext } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { AuthContext } from './context/AuthContext';
import { FaUser, FaLock } from 'react-icons/fa';

const LoginPage = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { saveToken } = useContext(AuthContext);

  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await axios.post('/api/users/login', { userId, password });
      
      if (response.status === 200) {
        const { token } = response.data;
        saveToken(token);
        toast.success('Logged in successfully!');
        router.push('/admin');
      }
    } catch (error) {
      toast.error('Invalid credentials, please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <ToastContainer />
      <div className="bg-gray-900 text-white p-10 rounded-xl shadow-2xl max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-8">Admin Login</h2>
        
        <form onSubmit={handleLogin}>
          <div className="mb-5">
            <label htmlFor="userId" className="block mb-1 font-medium">UserId</label>
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-0 shadow-inner">
              <FaUser className="text-gray-400 mr-3" />
              <input
                type="text"
                id="userID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
                className="w-full bg-transparent focus:outline-none p-1 text-gray-600 placeholder-gray-400"
                placeholder="Enter your user ID"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block mb-1 font-medium">Password</label>
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-0 shadow-inner">
              <FaLock className="text-gray-400 mr-3" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-transparent focus:outline-none p-1 text-gray-600 placeholder-gray-400"
                placeholder="Enter your password"
              />
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-lg hover:bg-gradient-to-l transition duration-300 font-semibold"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
