import { useState } from 'react';
import API from '../utils/api';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await API.post('/auth/login', { email, password });
    localStorage.setItem('token', res.data.token);
    navigate('/dashboard');
  };

  return (
    <div className="h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 flex items-center justify-center p-3 overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-cyan-400/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      
      <div className="max-w-md mx-auto p-8 bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-white/20 relative z-10 transform hover:scale-[1.02] transition-all duration-300 w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 rounded-2xl"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
            </div>
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent mb-2">Welcome Back</h2>
            <p className="text-gray-600 text-sm">Enter your credentials to access your account</p>
          </div>

          <input
            className="mb-4 w-full px-4 py-3 bg-gray-50/80 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-100 transition-all duration-300 placeholder-gray-400 text-gray-700"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="mb-6 w-full px-4 py-3 bg-gray-50/80 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-100 transition-all duration-300 placeholder-gray-400 text-gray-700"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />

          <button
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-200 focus:ring-4 focus:ring-purple-200"
            onClick={handleLogin}
          >
            Login
          </button>

          {/* Redirect to Register if user doesn't have an account */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/" className="text-purple-600 hover:text-purple-800 font-medium hover:underline transition-colors">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}