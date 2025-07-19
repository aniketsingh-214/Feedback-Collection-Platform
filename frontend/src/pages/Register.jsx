import { useState } from 'react';
import API from '../utils/api';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    role: 'user',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      await API.post('/auth/register', form);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.msg || 'Something went wrong');
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 flex items-center justify-center p-3 overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-cyan-400/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      
      <div className="max-w-md mx-auto p-5 bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-white/20 relative z-10 transform hover:scale-[1.02] transition-all duration-300 w-full max-h-screen overflow-y-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 rounded-2xl"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-4">
            <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <h2 className="text-xl mb-1 font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">Create Account</h2>
            <p className="text-gray-600 text-xs">Fill in your details to get started</p>
          </div>

          {error && (
            <div className="bg-red-50/90 border border-red-200 text-red-700 p-2 rounded-xl mb-3 backdrop-blur-sm">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <div className="flex-1">
                  <p className="text-xs font-medium">{error}</p>
                  {error.includes('already registered') && (
                    <p className="mt-1 text-xs">
                      <Link to="/login" className="text-purple-600 hover:text-purple-800 underline font-medium">Already have an account? Login here.</Link>
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
          
          <div className="space-y-3">
            <div className="flex gap-2">
              <div className="relative group flex-1">
                <input 
                  name="firstName" 
                  className="input mb-2 w-full px-3 py-2.5 bg-gray-50/80 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-100 transition-all duration-300 placeholder-gray-400 text-gray-700 text-sm" 
                  placeholder="First Name" 
                  onChange={handleChange} 
                />
              </div>
              <div className="relative group flex-1">
                <input 
                  name="lastName" 
                  className="input mb-2 w-full px-3 py-2.5 bg-gray-50/80 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-100 transition-all duration-300 placeholder-gray-400 text-gray-700 text-sm" 
                  placeholder="Last Name" 
                  onChange={handleChange} 
                />
              </div>
            </div>

            <div className="flex gap-2">
              <div className="relative group flex-1">
                <input 
                  name="phone" 
                  className="input mb-2 w-full px-3 py-2.5 bg-gray-50/80 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-100 transition-all duration-300 placeholder-gray-400 text-gray-700 text-sm" 
                  placeholder="Phone Number" 
                  type="tel"
                  onChange={handleChange} 
                />
                <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none mb-2">
                  <svg className="h-4 w-4 text-gray-400 group-focus-within:text-purple-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>
              
              <div className="relative group flex-1">
                <select 
                  name="role" 
                  className="input mb-2 w-full px-3 py-2.5 bg-gray-50/80 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-100 transition-all duration-300 text-gray-700 appearance-none cursor-pointer text-sm" 
                  onChange={handleChange}
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none mb-2">
                  <svg className="h-4 w-4 text-gray-400 group-focus-within:text-purple-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="relative group">
              <input 
                name="email" 
                className="input mb-2 w-full px-3 py-2.5 bg-gray-50/80 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-100 transition-all duration-300 placeholder-gray-400 text-gray-700 text-sm" 
                placeholder="Email address" 
                type="email"
                onChange={handleChange} 
              />
              <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none mb-2">
                <svg className="h-4 w-4 text-gray-400 group-focus-within:text-purple-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
            </div>

            <div className="relative group">
              <input 
                name="password" 
                className="input mb-4 w-full px-3 py-2.5 bg-gray-50/80 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-100 transition-all duration-300 placeholder-gray-400 text-gray-700 text-sm" 
                type="password" 
                placeholder="Password" 
                onChange={handleChange} 
              />
              <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none mb-4">
                <svg className="h-4 w-4 text-gray-400 group-focus-within:text-purple-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
            
            <button 
              className="btn btn-primary w-full py-2.5 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-200 focus:ring-4 focus:ring-purple-200 text-sm" 
              onClick={handleRegister}
            >
              <span className="flex items-center justify-center gap-2">
                Create Account
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-gray-600 text-xs">
              Already have an account? 
              <Link to="/login" className="ml-1 text-purple-600 hover:text-purple-800 font-medium hover:underline transition-colors">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}